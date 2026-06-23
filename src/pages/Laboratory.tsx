import { motion } from 'framer-motion';
import { builderOptions, directionTags } from '../data/lab';
import { useArchiveStore } from '../store/useArchiveStore';

const builderLabels = {
  base: '基酒',
  acid: '酸',
  sweet: '甜',
  aroma: '香气',
  texture: '质感',
} as const;

function Laboratory() {
  const builder = useArchiveStore((state) => state.builder);
  const setBuilderValue = useArchiveStore((state) => state.setBuilderValue);

  const resultTags = Array.from(
    new Set(
      Object.values(builder).flatMap((value) => directionTags[value] ?? []),
    ),
  ).slice(0, 6);

  return (
    <section className="grid min-h-screen gap-10 border-t border-white/10 py-24 lg:grid-cols-[0.88fr_1.12fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
          Laboratory / 风味实验室
        </p>
        <h2 className="mt-6 text-5xl font-semibold leading-none sm:text-7xl">
          Build a direction before a recipe.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          选择基酒、酸、甜、香气和质感，先生成风味方向，再回到世界食材地图寻找合适地区与原料。
        </p>

        <motion.div
          key={resultTags.join('-')}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 glow-card p-6"
        >
          <div className="font-mono text-xs uppercase tracking-[0.24em] text-electric">Generated direction</div>
          <div className="mt-5 flex flex-wrap gap-3">
            {resultTags.map((tag) => (
              <span key={tag} className="border border-electric/40 bg-electric/10 px-4 py-3 text-2xl">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid gap-5">
        {(Object.keys(builderOptions) as Array<keyof typeof builderOptions>).map((key) => (
          <div key={key} className="glow-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-electric">
                {builderLabels[key]}
              </span>
              <span className="text-sm text-muted">{builder[key]}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {builderOptions[key].map((option) => (
                <button
                  key={option}
                  onClick={() => setBuilderValue(key, option)}
                  className={`border px-4 py-2 text-sm transition ${
                    builder[key] === option
                      ? 'border-electric bg-electric/20 text-white shadow-glow'
                      : 'border-white/10 text-white/65 hover:border-electric/60'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Laboratory;
