import type { CSSProperties } from 'react';

const materialTags = ['YUZU', 'SHISO', 'PANDAN', 'CACAO', 'OOLONG', 'MISO'];

function FloatingMaterialLayer() {
  return (
    <div className="floating-material-layer" aria-hidden="true">
      <div className="material-blob material-blob-a" />
      <div className="material-blob material-blob-b" />
      <div className="material-blob material-blob-c" />
      <div className="material-slice material-slice-a" />
      <div className="material-slice material-slice-b" />
      <div className="material-leaf material-leaf-a" />
      <div className="material-leaf material-leaf-b" />
      <div className="material-thread material-thread-a" />
      <div className="material-thread material-thread-b" />
      <div className="material-dust material-dust-a" />
      <div className="material-dust material-dust-b" />
      <div className="material-dust material-dust-c" />
      <div className="material-tags">
        {materialTags.map((tag, index) => (
          <span key={tag} style={{ '--tag-index': index } as CSSProperties}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FloatingMaterialLayer;
