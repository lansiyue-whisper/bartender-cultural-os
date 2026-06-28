import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  GraphEdge,
  GraphNode,
  GraphNodeType,
  getDefaultGraphNodeId,
  getGraphEdgesForNode,
  getGraphNeighborhood,
  getGraphNode,
} from '../data/knowledgeNetwork';

type Point = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const typeColors: Record<GraphNodeType, string> = {
  ingredient: '#2f7dff',
  spirit: '#8fb2ff',
  technique: '#42b7a9',
  flavor: '#f4f7ff',
  region: '#7f92c8',
  cocktail: '#c8d3ff',
  season: '#6a7fd6',
};

const typeLabels: Record<GraphNodeType, string> = {
  ingredient: 'Ingredient / 食材',
  spirit: 'Spirit / 烈酒',
  technique: 'Technique / 技法',
  flavor: 'Flavor / 风味',
  region: 'Region / 地区',
  cocktail: 'Cocktail / 鸡尾酒方向',
  season: 'Season / 季节',
};

function createPoints(nodes: GraphNode[], width: number, height: number) {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.34;

  return nodes.reduce<Record<string, Point>>((acc, node, index) => {
    const angle = index === 0 ? 0 : ((index - 1) / Math.max(nodes.length - 1, 1)) * Math.PI * 2;
    acc[node.id] = {
      id: node.id,
      x: index === 0 ? centerX : centerX + Math.cos(angle) * radius,
      y: index === 0 ? centerY : centerY + Math.sin(angle) * radius,
      vx: 0,
      vy: 0,
    };
    return acc;
  }, {});
}

function GraphCanvas({
  nodes,
  edges,
  selectedId,
  onSelect,
}: {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const width = 940;
  const height = 660;
  const [points, setPoints] = useState<Record<string, Point>>(() => createPoints(nodes, width, height));
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setPoints(createPoints(nodes, width, height));
  }, [nodes]);

  useEffect(() => {
    const simulate = () => {
      setPoints((current) => {
        const next: Record<string, Point> = {};
        nodes.forEach((node) => {
          next[node.id] = current[node.id] ? { ...current[node.id] } : createPoints([node], width, height)[node.id];
        });

        const values = Object.values(next);
        values.forEach((a, index) => {
          for (let bIndex = index + 1; bIndex < values.length; bIndex += 1) {
            const b = values[bIndex];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 28);
            const force = 1100 / (distance * distance);
            a.vx += (dx / distance) * force;
            a.vy += (dy / distance) * force;
            b.vx -= (dx / distance) * force;
            b.vy -= (dy / distance) * force;
          }
        });

        edges.forEach((edge) => {
          const source = next[edge.source];
          const target = next[edge.target];
          if (!source || !target) return;
          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
          const force = (distance - 145) * 0.005;
          source.vx += (dx / distance) * force;
          source.vy += (dy / distance) * force;
          target.vx -= (dx / distance) * force;
          target.vy -= (dy / distance) * force;
        });

        values.forEach((point) => {
          const centerPull = point.id === selectedId ? 0.028 : 0.0045;
          point.vx += (width / 2 - point.x) * centerPull;
          point.vy += (height / 2 - point.y) * centerPull;
          point.vx *= 0.82;
          point.vy *= 0.82;
          point.x = Math.min(width - 44, Math.max(44, point.x + point.vx));
          point.y = Math.min(height - 44, Math.max(44, point.y + point.vy));
        });

        return next;
      });

      frameRef.current = window.requestAnimationFrame(simulate);
    };

    frameRef.current = window.requestAnimationFrame(simulate);
    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [edges, nodes, selectedId]);

  return (
    <div className="relative overflow-hidden border border-white/10 bg-black/40" style={{ minHeight: height }}>
      <svg className="h-full w-full" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Unified knowledge graph">
        <defs>
          <filter id="knowledge-network-glow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
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
          const active = edge.source === selectedId || edge.target === selectedId;
          return (
            <g key={`${edge.source}-${edge.target}-${edge.relation}`}>
              <line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={active ? '#2f7dff' : 'rgba(255,255,255,0.16)'}
                strokeWidth={active ? 1.35 : 0.72}
              />
              {active ? (
                <text
                  x={(source.x + target.x) / 2}
                  y={(source.y + target.y) / 2}
                  fill="rgba(255,255,255,0.44)"
                  fontSize="9"
                  letterSpacing="1.2"
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
          const active = node.id === selectedId;
          const hovered = node.id === hoveredId;
          const radius = active ? 22 : node.type === 'cocktail' ? 15 : 13;

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
                r={hovered ? radius + 4 : radius}
                fill={typeColors[node.type]}
                fillOpacity={active ? 0.94 : 0.66}
                stroke={active ? '#ffffff' : typeColors[node.type]}
                strokeOpacity={active ? 0.9 : 0.42}
                strokeWidth={active ? 1.5 : 0.8}
                filter="url(#knowledge-network-glow)"
              />
              <text
                x={radius + 10}
                y="-2"
                fill={active ? '#ffffff' : 'rgba(255,255,255,0.74)'}
                fontSize={active ? 13 : 11}
                fontWeight={active ? 700 : 500}
              >
                {node.title}
              </text>
              <text x={radius + 10} y="14" fill="rgba(255,255,255,0.36)" fontSize="9" letterSpacing="1.2">
                {typeLabels[node.type]}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
        Unified graph / click any node to continue
      </div>
    </div>
  );
}

function GraphDetailPanel({ node, onSelect }: { node: GraphNode; onSelect: (id: string) => void }) {
  const edges = getGraphEdgesForNode(node.id);
  const connected = useMemo(
    () =>
      edges.map((edge) => {
        const nextId = edge.source === node.id ? edge.target : edge.source;
        return { node: getGraphNode(nextId), edge };
      }),
    [edges, node.id],
  );

  return (
    <aside className="glow-card p-6">
      <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
        Node Detail / 节点详情
      </div>
      <div className="mt-4 font-mono text-xs uppercase tracking-[0.24em] text-white/45">
        {typeLabels[node.type]}
      </div>
      <h3 className="mt-3 text-4xl font-semibold leading-none sm:text-5xl">{node.title}</h3>
      <div className="mt-3 text-sm text-white/42">{node.subtitle}</div>
      <p className="mt-5 text-base leading-7 text-white/70">{node.description}</p>

      <div className="mt-8">
        <div className="font-mono text-xs uppercase tracking-[0.24em] text-electric">
          Direct Connections / 直接关联
        </div>
        <div className="mt-4 grid max-h-[560px] gap-2 overflow-y-auto pr-1">
          {connected.map(({ node: connectedNode, edge }) => (
            <button
              key={`${connectedNode.id}-${edge.relation}`}
              onClick={() => onSelect(connectedNode.id)}
              className="group grid grid-cols-[1fr_auto] gap-4 border border-white/10 bg-black/35 px-4 py-3 text-left transition hover:border-electric/70 hover:bg-electric/10"
            >
              <span>
                <span className="block text-sm text-white">{connectedNode.title}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  {edge.relation} / {typeLabels[connectedNode.type]}
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-electric opacity-70 group-hover:opacity-100">
                Explore
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ExploreGraph() {
  const [selectedId, setSelectedId] = useState(getDefaultGraphNodeId());
  const graph = useMemo(() => getGraphNeighborhood(selectedId), [selectedId]);
  const selectedNode = getGraphNode(selectedId);

  return (
    <section id="explore-graph" className="min-h-screen border-t border-white/10 py-24">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
          Explore Graph / 风味知识网络
        </p>
        <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-none sm:text-7xl">
          One archive, many paths.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          从食材、烈酒、技法、风味、地区、季节或鸡尾酒方向进入。点击任何节点，它就会成为新的中心，并显示直接关联对象。
        </p>
      </div>

      <div className="mt-10 grid gap-5 xl:grid-cols-[1.28fr_0.72fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
          >
            <GraphCanvas nodes={graph.nodes} edges={graph.edges} selectedId={selectedId} onSelect={setSelectedId} />
          </motion.div>
        </AnimatePresence>

        <GraphDetailPanel node={selectedNode} onSelect={setSelectedId} />
      </div>
    </section>
  );
}

export default ExploreGraph;
