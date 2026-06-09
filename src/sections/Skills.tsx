import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-visible"
      style={{
        backgroundColor: '#111111',
        padding: '5rem 0 4rem',
        minHeight: '100vh',
      }}
      aria-labelledby="skills-heading"
    >

      <div
        className="absolute hidden xl:block pointer-events-none"
        style={{
          right: '-4rem',
          top: '12rem',
          fontSize: '32rem',
          fontFamily: 'Bangers',
          color: '#E63946',
          opacity: 0.04,
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        03
      </div>

      <div
        className="absolute noise-overlay pointer-events-none"
        style={{ top: 0, right: 0, bottom: 0, left: 0 }}
      />
      <div
        className="absolute paper-texture opacity-40 pointer-events-none"
        style={{ top: 0, right: 0, bottom: 0, left: 0 }}
      />
      <div
        className="absolute action-lines opacity-10 pointer-events-none"
        style={{ top: 0, right: 0, bottom: 0, left: 0 }}
      />
      <div
        className="absolute action-lines opacity-15 pointer-events-none"
        style={{ top: 0, right: 0, bottom: 0, left: 0 }}
      />

      <div
        className="absolute halftone-red opacity-55 pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: '20rem',
          height: '20rem',
          maskImage: 'radial-gradient(circle at top left, black 35%, transparent 80%)',
        }}
      />

      <div
        className="absolute halftone-yellow opacity-40 pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          width: '24rem',
          height: '24rem',
          maskImage: 'radial-gradient(circle at bottom right, black 35%, transparent 80%)',
        }}
      />

      <div
        className="relative z-10"
        style={{
          width: 'min(1400px, calc(100% - 3rem))',
          marginInline: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.8rem 1.4rem',
              background: '#E63946',
              color: '#111',
              transform: 'rotate(-2deg)',
              border: '3px solid #111',
              boxShadow: '6px 6px 0 #111',
              width: 'fit-content',
            }}
          >
            <span className="font-comic text-sm tracking-[0.35em] uppercase">
              CHAPTER 03
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2
              className="font-comic text-white"
              style={{
                fontSize: 'clamp(4rem, 9vw, 8rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                textShadow: '8px 8px 0 #E63946',
              }}
            >
              POWER SET
            </h2>

            <div
            className="halftone-red absolute pointer-events-none"
            style={{
              width: '14rem',
              height: '14rem',
              left: '-2rem',
              top: '-2rem',
              opacity: 0.4,
            }}
          />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1rem 1.8rem',
                background: '#FFD60A',
                color: '#111',
                border: '3px solid #111',
                boxShadow: '6px 6px 0 #E63946',
                transform: 'rotate(-2deg)',
                width: 'fit-content',
              }}
            >
              <span className="font-comic" style={{ fontSize: '1.5rem' }}>
                TECH STACK ARSENAL
              </span>
            </div>

            {/* Competitive Programming Power Levels */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                padding: '0.6rem 1.25rem',
                background: '#111111',
                border: '3px solid #E63946',
                boxShadow: '5px 5px 0 #FFD60A',
                transform: 'rotate(1deg)',
                width: 'fit-content',
                marginTop: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', fontFamily: "'Oswald', sans-serif" }}>
                <span style={{ color: '#FFD60A', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LEETCODE
                </span>
                <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#F8F9FA' }}>
                  1972
                </span>
                <span style={{ fontSize: '0.9rem', color: '#F8F9FA', opacity: 0.7, fontWeight: '500' }}>
                  (KNIGHT)
                </span>
              </div>
              
              <span style={{ color: '#E63946', fontWeight: 'bold', fontSize: '1.2rem' }}>•</span>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', fontFamily: "'Oswald', sans-serif" }}>
                <span style={{ color: '#FFD60A', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  CODEFORCES
                </span>
                <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#F8F9FA' }}>
                  1276
                </span>
                <span style={{ fontSize: '0.9rem', color: '#F8F9FA', opacity: 0.7, fontWeight: '500' }}>
                  (PUPIL)
                </span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.75rem' }}
        >
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center"
          style={{ gap: '1rem', paddingTop: '2rem' }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E63946', opacity: 0.22 }} />
          <span
            className="font-heading uppercase text-xs tracking-[0.45em] font-bold"
            style={{
              padding: '0.95rem 1.5rem',
              backgroundColor: '#FFD60A',
              color: '#111',
              border: '2px solid #111',
            }}
          >
            AND ALWAYS LEARNING MORE
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E63946', opacity: 0.22 }} />
        </motion.div>
      </div>

      <div
        className="absolute hidden xl:block"
        style={{
          bottom: '4.5rem',
          left: '4rem',
          transform: 'rotate(-6deg)',
          background: '#FFD60A',
          color: '#111',
          border: '3px solid #111',
          boxShadow: '6px 6px 0 #E63946',
          padding: '1rem 2rem',
          fontFamily: 'Bangers, sans-serif',
          fontSize: '1.4rem',
        }}
      >
        LEARN • BUILD • REPEAT
      </div>

      <div
        className="absolute hidden lg:block"
        style={{
          top: '9rem',
          left: 0,
          width: '18rem',
          height: '2.2rem',
          background: 'linear-gradient(120deg, rgba(230,57,70,0.9), rgba(255,214,10,0.9))',
          transform: 'skew(-18deg)',
          opacity: 0.85,
        }}
      />
    </section>
  );
}

function SkillCard({
  cat,
  index,
}: {
  cat: { id: string; name: string; color: string; bgColor: string; skills: string[] };
  index: number;
}) {
  return (
    <motion.div
      variants={scaleIn}
      className="relative flex flex-col"
      style={{
        minHeight: '260px',
        padding: '2rem',
        backgroundColor: '#0f0f0f',
        border: '3px solid rgba(255,255,255,0.85)',
        boxShadow: `8px 8px 0 ${cat.color}`,
        overflow: 'hidden',
        transform:
        index % 2 === 0
          ? 'rotate(-0.5deg)'
          : 'rotate(0.4deg)',
      }}
      
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          background: `radial-gradient(circle at top left, ${cat.color} 0%, transparent 40%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '3.2rem',
              height: '3.2rem',
              display: 'grid',
              placeItems: 'center',
              backgroundColor: cat.color,
              color: '#111',
              fontWeight: 800,
              fontSize: '1.25rem',
              borderRadius: '0.5rem',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <div>

            <h3
              className="font-comic text-white"
              style={{ fontSize: '1.8rem', lineHeight: 1 }}
            >
              {cat.name}
            </h3>
          </div>
        </div>

      </div>

      <motion.ul
        variants={staggerContainer}
        className="flex flex-wrap"
        style={{ gap: '0.9rem', marginTop: 'auto', alignItems: 'flex-start' }}
        role="list"
        aria-label={`${cat.name} skills`}
      >
        {cat.skills.map((skill) => (
          <motion.li key={skill} variants={fadeInUp}>
            <motion.span
              className="block font-heading text-xs font-semibold uppercase cursor-default tracking-wide text-white/80"
              style={{
                border: `2px solid ${cat.color}`,
                boxShadow: `3px 3px 0 ${cat.color}`,
                backgroundColor: `${cat.color}10`,
                padding: '0.95rem 1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '8rem',
                whiteSpace: 'nowrap',
              }}
              whileHover={{
                backgroundColor: cat.color,
                color: '#111111',
                borderColor: cat.color,
                y: -1,
              }}
            >
              {skill}
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
