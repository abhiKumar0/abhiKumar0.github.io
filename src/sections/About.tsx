import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const traits = [
  { icon: '⚙️', label: 'Backend Dev', desc: 'Robust APIs and distributed services' },
  { icon: '🧩', label: 'System Design', desc: 'Scalable, fault-tolerant architecture' },
  { icon: '⚡', label: 'Real-Time Systems', desc: 'WebSockets, WebRTC, live data pipelines' },
  { icon: '🧠', label: 'Problem Solver', desc: 'DSA-first thinking, clean code output' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: '#0d0d0d', padding: 'clamp(2rem, 2vw, 4rem)' }}
      aria-labelledby="about-heading"
    >

      <div
        className="absolute -top-10 -left-10 w-72 h-72 halftone-red opacity-70 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
        }}
      />

      <div
        className="absolute top-32 right-0 w-72 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(-90deg, rgba(230,57,70,.25), transparent)',
          transform: 'skew(-25deg)',
        }}
      />
      <div className="absolute inset-0 halftone-red opacity-30 pointer-events-none" />

      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="absolute inset-0 paper-texture opacity-40 pointer-events-none" />


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
        02
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20" style={{ marginBottom: '2rem' }}>
          <div
            className="inline-block mb-4 px-3 py-1"
            style={{
              background: '#E63946',
              color: '#111',
              transform: 'rotate(-2deg)',
              padding: '0.25rem 1.25rem',
              marginBottom: '1rem',
            }}
          >
            <span className="font-comic text-sm tracking-wider">
              CHAPTER 02
            </span>
          </div>

          <h2
            className="font-comic text-white leading-[0.85]"
            style={{
              fontSize: 'clamp(4rem, 9vw, 8rem)',
              textShadow: '6px 6px 0 #E63946',
            }}
          >
            ORIGIN STORY
          </h2>
        </div>
        <div className="flex flex-col items-start mb-10">

          <div
            style={{
              background: '#FFD60A',
              color: '#111',
              padding: '1rem 1.5rem',
              border: '3px solid #111',
              boxShadow: '5px 5px 0 #E63946',
              transform: 'rotate(-1deg)',
              marginBottom: '1.5rem',
            }}
          >
            <span className="font-comic text-3xl">
              WHO IS THIS ENGINEER?
            </span>
          </div>

        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: bio & statement ── */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-12 text-left"
          >
            {/* Bio paragraphs */}
            <div className="flex flex-col gap-5 font-heading text-white/70 text-lg md:text-xl leading-[1.95] max-w-[48ch]">
              <p>
                Hey — I'm <strong className="text-white font-bold">Abhishek</strong>, an MCA student with a
                relentless focus on building backend software that scales. Not just writing code —
                engineering systems.
              </p>
              <p>
                My obsession started with one question: how do large systems handle millions of
                concurrent requests without breaking? That curiosity became my craft.
              </p>
            </div>

            {/* Quote block — indented right for rhythm contrast */}
            <div
              className="relative max-w-xl my-4"
              style={{
                background: '#F8F9FA',
                color: '#111111',
                border: '3px solid #111111',
                boxShadow: '8px 8px 0 #E63946',
                padding: '3.5rem 3rem',
              }}
            >
              <span
                className="absolute left-6 top-3 font-comic text-6xl"
                style={{ color: '#E63946' }}
              >
                ❝
              </span>

              <p className="font-comic text-4xl leading-tight uppercase">
                Readable Code.
                <br />
                Resilient Systems.
                <br />
                Solutions Built To Last.
              </p>

              <span
                className="absolute right-6 bottom-2 font-comic text-6xl"
                style={{ color: '#E63946' }}
              >
                ❞
              </span>
            </div>

            {/* Status inline */}
            <div className="flex items-center gap-3 mt-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" aria-hidden="true" />
              <p className="font-heading text-white/45 text-xs tracking-[0.18em] uppercase font-semibold">
                Pursuing MCA · Open to internships & full-time roles
              </p>
            </div>
          </motion.div>

          {/* ── Right: traits & interests ── */}
          <div className="flex flex-col gap-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-10"
            >
              <div className="mb-6">
                <span
                  className="font-comic text-3xl lg:text-4xl"
                  style={{
                    background: '#E63946',
                    color: '#111',
                    padding: '0.75rem 1.5rem',
                    display: 'inline-block',
                    transform: 'rotate(-2deg)',
                  }}
                >
                  ABILITIES
                </span>
              </div>
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  variants={fadeInUp}
                  className="
                    relative
                    flex
                    items-start
                    gap-7
                    p-64
                    bg-black
                    border-2
                    border-white/20
                    hover:border-[#FFD60A]
                    transition-all
                    "
                  style={{
                    boxShadow: '6px 6px 0 rgba(230,57,70,.25)',
                    padding: '1rem 2rem',
                  }}
                >
                  <div className="text-5xl flex-shrink-0 pt-1" aria-hidden="true">

                    {trait.icon}
                  </div>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-[#E63946] text-sm font-bold tracking-widest uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-heading tracking-wider uppercase text-white text-lg font-bold">
                        {trait.label}
                      </h3>
                    </div>
                    <p className="font-heading text-white/45 text-base leading-relaxed mt-1">
                      {trait.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests list */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="pt-8"
            >
              <p
                className="font-heading text-lg tracking-widest mb-7 font-bold uppercase"
                style={{ color: '#E63946', paddingBottom: '0.5rem' }}
              >
                DEEP INTERESTS
              </p>
              <div className="flex flex-wrap gap-4">
                {['Distributed Systems', 'Microservices', 'System Design', 'DSA'].map((tag) => (
                  <span
                    key={tag}
                    className="
                      font-heading
                      text-sm
                      text-white
                      px-6
                      py-3.5
                      tracking-wide
                      uppercase
                      transition-transform
                      hover:-translate-y-1
                    "
                    style={{
                      border: '2px solid #FFD60A',
                      background: 'rgba(255,214,10,0.05)',
                      boxShadow: '3px 3px 0 #E63946',
                      padding: '0.3rem 1.3rem',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 w-80 h-80 halftone-yellow opacity-50 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
        }}
      />

      <div
        className="absolute bottom-32 left-0 w-64 h-28 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,214,10,.15), transparent)',
          transform: 'skew(20deg)',
        }}
      />
    </section>
  );
}
