import { useEffect, useMemo, useRef, useState } from 'react';
import { KnowledgeEdge, KnowledgeNode } from '../data/knowledgeGraph';

type Point = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type ForceGraph2DProps = {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  selectedId: string;
  onSelect: (id: string) => void;
  height?: number;
  compact?: boolean;
};

const typeRadius: Record<string, number> = {
  Flavor: 18,
  Ingredient: 13,
  Cocktail: 17,
  Region: 15,
  Music: 12,
  Article: 11,
  Technique: 12,
};

function createInitialPoints(nodes: KnowledgeNode[], width: number, height: number) {
  const radius = Math.min(width, height) * 0.32;
  const centerX = width / 2;
  const centerY = height / 2;

  return nodes.reduce<Record<string, Point>>((acc, node, index) => {
    const angle = (index / Math.max(nodes.length, 1)) * Math.PI * 2;
    acc[node.id] = {
      id: node.id,
      x: centerX + Math.cos(angle) * radius + node.position[0] * 18,
      y: centerY + Math.sin(angle) * radius + node.position[1] * 18,
      vx: 0,
      vy: 0,
    };
    return acc;
  }, {});
}

function ForceGraph2D({ nodes, edges, selectedId, onSelect, height = 620, compact = false }: ForceGraph2DProps) {
  const width = compact ? 760 : 980;
  const [points, setPoints] = useState<Record<string, Point>>(() => createInitialPoints(nodes, width, height));
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const frameRef = useRef<number | null>(null);

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);

  useEffect(() => {
    setPoints((current) => {
      const next = createInitialPoints(nodes, width, height);
      nodes.forEach((node) => {
        if (current[node.id]) next[node.id] = current[node.id];
      });
      return next;
    });
  }, [height, nodes, width]);

  useEffect(() => {
    let tick = 0;

    const simulate = () => {
      setPoints((current) => {
        const next: Record<string, Point> = {};
        nodes.forEach((node) => {
          const point = current[node.id] ?? createInitialPoints([node], width, height)[node.id];
          next[node.id] = { ...point };
        });

        const values = Object.values(next);
        values.forEach((a, index) => {
          for (let bIndex = index + 1; bIndex < values.length; bIndex += 1) {
            const b = values[bIndex];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 24);
            const force = 980 / (distance * distance);
            const fx = (dx / distance) * force;
            const fy = (dy / distance) * force;
            a.vx += fx;
            a.vy += fy;
            b.vx -= fx;
            b.vy -= fy;
          }
        });

        edges.forEach((edge) => {
          const source = next[edge.source];
          const target = next[edge.target];
          if (!source || !target) return;
          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
          const preferred = compact ? 118 : 150;
          const force = (distance - preferred) * 0.006;
          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force;
          source.vx += fx;
          source.vy += fy;
          target.vx -= fx;
          target.vy -= fy;
        });

        values.forEach((point) => {
          const centerPull = point.id === selectedId ? 0.018 : 0.006;
          point.vx += (width / 2 - point.x) * centerPull;
          point.vy += (height / 2 - point.y) * centerPull;
          point.vx *= 0.84;
          point.vy *= 0.84;
          point.x = Math.min(width - 38, Math.max(38, point.x + point.vx));
          point.y = Math.min(height - 38, Math.max(38, point.y + point.vy));
        });

        tick += 1;
        return next;
      });

      frameRef.current = window.requestAnimationFrame(simulate);
    };

    frameRef.current = window.requestAnimationFrame(simulate);
    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [compact, edges, height, nodes, selectedId, width]);

  return (
    <div className="relative overflow-hidden border border-white/10 bg-black/40" style={{ minHeight: height }}>
      <svg className="h-full w-full" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Knowledge force graph">
        <defs>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map((edge) => {
          const source = points[edge.source];
          const target = points[edge.target];
          if (!source || !target) return null;
          const active = selectedId === edge.source || selectedId === edge.target;
          return (
            <g key={`${edge.source}-${edge.target}`}>
              <line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={active ? '#2f7dff' : 'rgba(255,255,255,0.18)'}
                strokeWidth={active ? 1.6 : 0.8}
              />
              {!compact && active ? (
                <text
                  x={(source.x + target.x) / 2}
                  y={(source.y + target.y) / 2}
                  fill="rgba(255,255,255,0.45)"
                  fontSize="10"
                  letterSpacing="1.6"
                  textAnchor="middle"
                >
                  {edge.relation}
                </text>
              ) : null}
            </g>
          );
        })}

        {nodes.map((node) => {
          const point = points[node.id];
          if (!point) return null;
          const radius = typeRadius[node.type] ?? 12;
          const active = selectedId === node.id;
          const hovered = hoveredId === node.id;

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              transform={`translate(${point.x} ${point.y})`}
              onClick={() => onSelect(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <circle
                r={active ? radius + 6 : hovered ? radius + 3 : radius}
                fill={node.color}
                fillOpacity={active ? 0.95 : 0.72}
                stroke={active ? '#ffffff' : '#2f7dff'}
                strokeOpacity={active ? 0.86 : 0.3}
                strokeWidth={active ? 1.6 : 0.8}
                filter="url(#node-glow)"
              />
              <text
                x={radius + 10}
                y="-2"
                fill={active ? '#ffffff' : 'rgba(255,255,255,0.72)'}
                fontSize={active ? 13 : 11}
                fontWeight={active ? 700 : 500}
              >
                {node.name}
              </text>
              <text x={radius + 10} y="14" fill="rgba(255,255,255,0.38)" fontSize="9" letterSpacing="1.4">
                {node.type}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
        Force graph / click any node to continue
      </div>
    </div>
  );
}

export default ForceGraph2D;
