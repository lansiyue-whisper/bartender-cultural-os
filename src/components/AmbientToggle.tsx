import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useArchiveStore } from '../store/useArchiveStore';

function AmbientToggle() {
  const ambientMode = useArchiveStore((state) => state.ambientMode);
  const setAmbientMode = useArchiveStore((state) => state.setAmbientMode);

  useEffect(() => {
    document.documentElement.classList.toggle('ambient', ambientMode);
    // Reserved audio hook: connect rain, bar room, or vinyl noise here later.
  }, [ambientMode]);

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => setAmbientMode(!ambientMode)}
      className="fixed bottom-5 right-5 z-50 border border-electric/60 bg-black/80 px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-electric shadow-glow backdrop-blur-md transition hover:bg-electric hover:text-white"
    >
      {ambientMode ? 'Ambient Mode On' : 'Ambient Mode'}
    </motion.button>
  );
}

export default AmbientToggle;
