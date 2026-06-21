import { getConnectedNodes, getEdgesForNode, KnowledgeNode } from '../data/knowledgeGraph';

type NodeDetailPanelProps = {
  node: KnowledgeNode;
  onSelect: (id: string) => void;
  eyebrow?: string;
};

function NodeDetailPanel({ node, onSelect, eyebrow = 'Selected node' }: NodeDetailPanelProps) {
  const connectedNodes = getConnectedNodes(node.id);
  const edges = getEdgesForNode(node.id);

  return (
    <aside className="glow-card p-6">
      <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">{eyebrow}</div>
      <div className="mt-4 font-mono text-xs uppercase tracking-[0.24em] text-white/45">{node.type}</div>
      <h3 className="mt-3 text-4xl font-semibold leading-none sm:text-5xl">{node.name}</h3>
      <p className="mt-5 text-base leading-7 text-white/70">{node.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {node.tags.map((tag) => (
          <span key={tag} className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
            {tag}
          </span>
        ))}
      </div>

      {node.notes?.length ? (
        <div className="mt-6 border-l border-electric/50 pl-4 text-sm leading-6 text-white/62">
          {node.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      ) : null}

      <div className="mt-8">
        <div className="font-mono text-xs uppercase tracking-[0.24em] text-electric">
          Connected paths
        </div>
        <div className="mt-4 grid gap-2">
          {connectedNodes.map((connectedNode) => {
            const edge = edges.find(
              (item) =>
                (item.source === node.id && item.target === connectedNode.id) ||
                (item.target === node.id && item.source === connectedNode.id),
            );

            return (
              <button
                key={connectedNode.id}
                onClick={() => onSelect(connectedNode.id)}
                className="group grid grid-cols-[1fr_auto] gap-4 border border-white/10 bg-black/35 px-4 py-3 text-left transition hover:border-electric/70 hover:bg-electric/10"
              >
                <span>
                  <span className="block text-sm text-white">{connectedNode.name}</span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {edge?.relation}
                  </span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-electric opacity-70 group-hover:opacity-100">
                  Explore
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default NodeDetailPanel;
