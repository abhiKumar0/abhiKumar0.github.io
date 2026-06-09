import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative w-full p-3 lg:2 min-h-screen flex flex-col overflow-hidden bg-black"
      aria-label="Hero section"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05), transparent), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05), transparent)',
        padding: 'clamp(2rem, 2vw, 4rem)',
      }}
    >
      {/* Base texture layers */}
      <div className="absolute inset-0 halftone opacity-30 md:opacity-50 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-50 md:opacity-70 pointer-events-none" />
      <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />

      {/* Responsive top left halftone burst */}
      <div
        className="absolute -top-12 md:-top-10 -left-12 md:-left-10 w-40 h-40 md:w-72 md:h-72 halftone-red opacity-50 md:opacity-70 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
        }}
      />

      {/* Responsive left brush stroke */}
      <div
        className="absolute left-0 top-32 md:top-64 w-48 md:w-80 h-24 md:h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(230,57,70,.35), transparent)',
          transform: 'skew(-30deg)',
          filter: 'blur(2px)',
        }}
      />

      {/* Responsive right brush stroke */}
      <div
        className="absolute right-0 top-20 md:top-52 w-56 md:w-96 h-32 md:h-52 pointer-events-none"
        style={{
          background:
            'linear-gradient(-90deg, rgba(230,57,70,.25), transparent)',
          transform: 'skew(25deg)',
        }}
      />
      
      {/* Responsive corner triangle */}
      <div
        className="absolute top-0 right-0 w-0 h-0 pointer-events-none hidden md:block"
        style={{
          borderTop: '360px solid rgba(230,57,70,0.1)',
          borderLeft: '360px solid transparent',
        }}
        aria-hidden="true"
      />
      
      {/* Responsive left red rule */}
      <div
        className="absolute left-0 top-16 md:top-28 bottom-16 md:bottom-28 w-px md:w-[3px] pointer-events-none"
        style={{ backgroundColor: '#E63946' }}
        aria-hidden="true"
      />
      
      {/* Responsive bottom edge lines */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px md:h-[3px] pointer-events-none"
        style={{ backgroundColor: '#E63946' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-px md:bottom-[3px] left-0 w-20 md:w-40 h-px md:h-[2px] pointer-events-none"
        style={{ backgroundColor: '#FFD60A' }}
        aria-hidden="true"
      />

      {/* ── Content wrapper — top-anchored with explicit top padding ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16
                      grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-12
                      pt-20 sm:pt-28 md:pt-36 pb-12 md:pb-20 min-h-screen">

        {/* ── Left column: all text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start justify-center self-center w-full"
        >

          {/* 1. Issue badge
              — sits alone, room below before the giant name */}
          <motion.div variants={item} className="mb-6 sm:mb-8 md:mb-10 lg:mb-14">
            <span
              className="inline-block font-comic text-black text-xs sm:text-sm tracking-[0.22em] px-3 sm:px-4 py-2 rounded-sm"
              style={{
                backgroundColor: '#FFD60A',
                border: '2px solid #111111',
                boxShadow: '3px 3px 0 #E63946',
                padding: '0.5rem 1.25rem',
              }}
            >
              ISSUE #001 — PORTFOLIO
            </span>
          </motion.div>

          {/* 2. Name — the dominant typographic anchor
              — tightly leaded, pushes visually downward */}
          <motion.div variants={item} className="mb-4 sm:mb-6 md:mb-8">
            <h1
              className="font-comic grunge-text leading-[0.82] tracking-tight relative text-2xl"
              style={{
                fontSize: 'clamp(2.5rem, 12vw, 11.5rem)',
                textShadow: 'clamp(3px, 0.5vw, 8px) clamp(3px, 0.5vw, 8px) 0 #E63946, clamp(4px, 0.7vw, 12px) clamp(4px, 0.7vw, 12px) 0 rgba(0,0,0,.6)',
              }}
            >
              ABHISHEK
            </h1>
            <div
              className="absolute -top-6 sm:-top-8 left-12 sm:left-16 md:left-24 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 pointer-events-none"
            >
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px bg-yellow-400"
                  style={{
                    height: 'clamp(30px, 8vw, 60px)',
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 36}deg) translateY(clamp(-40px, -10vw, -80px))`,
                    opacity: 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* 3. Title strip
              — offset 1.5rem right to break the left edge monotony */}
          <motion.div variants={item} className="mb-6 sm:mb-8 md:mb-10 lg:mb-14 ml-0 md:ml-4 lg:ml-6">
            <div
              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm"
              style={{
                backgroundColor: '#E63946',
                border: 'clamp(2px, 0.3vw, 3px) solid #111111',
                boxShadow: 'clamp(3px, 0.5vw, 5px) clamp(3px, 0.5vw, 5px) 0 #FFD60A',
                padding: '0.2rem 1rem',
              }}
            >
              <span className="font-comic text-white text-xs sm:text-sm md:text-lg lg:text-2xl tracking-[0.12em]">
                SOFTWARE ENGINEER
              </span>
              <span
                className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rotate-45 flex-shrink-0 bg-yellow-400"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* 4. Tagline
              — constrained to 38ch for optimal line length (2–3 lines)
              — left-border pulls it back to the edge for rhythm contrast */}
          <motion.p
            variants={item}
            className="font-heading text-white/60 text-xs sm:text-sm md:text-base lg:text-[1.1rem] leading-relaxed sm:leading-[1.6] md:leading-[1.75] mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            style={{
              maxWidth: '38ch',
              borderLeft: 'clamp(2px, 0.3vw, 3px) solid #FFD60A',
              paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)',
              paddingTop: '1rem',
            }}
          >
            Building scalable backend systems, real-time applications,
            and modern web experiences.
          </motion.p>

          {/* 5. CTA buttons
              — slight right offset relative to tagline for zig-zag rhythm
              — row on desktop, column on mobile */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 md:mb-14 lg:mb-20 md:ml-2 lg:ml-4 w-full sm:w-auto"
            style={{ paddingTop: '1rem' }}
          >
            <motion.button
              onClick={() => scrollTo('#projects')}
              className="font-comic text-xs sm:text-sm text-black tracking-wide rounded-sm w-full sm:w-auto"
              style={{
                backgroundColor: '#FFD60A',
                border: 'clamp(2px, 0.3vw, 3px) solid #111111',
                boxShadow: 'clamp(3px, 0.5vw, 5px) clamp(3px, 0.5vw, 5px) 0 #E63946',
                padding: '0.9rem 1.75rem',
                margin: '0.25rem 0 0 0',
              }}
              whileHover={{ x: -2, y: -2, boxShadow: 'clamp(4px, 0.7vw, 7px) clamp(4px, 0.7vw, 7px) 0 #E63946' }}
              whileTap={{ x: 1, y: 1, boxShadow: 'clamp(1px, 0.2vw, 2px) clamp(1px, 0.2vw, 2px) 0 #E63946' }}
            >
              VIEW PROJECTS
            </motion.button>

            <motion.a
              href="/Resume.pdf"
              download
              className="font-comic text-xs sm:text-sm text-white tracking-wide inline-block text-center rounded-sm w-full sm:w-auto"
              style={{
                border: 'clamp(2px, 0.3vw, 3px) solid rgba(248,249,250,0.6)',
                boxShadow: 'clamp(3px, 0.5vw, 5px) clamp(3px, 0.5vw, 5px) 0 rgba(248,249,250,0.2)',
                padding: '0.9rem 1.75rem',
                margin: '0.25rem 0 0 0',
              }}
              whileHover={{ x: -2, y: -2, boxShadow: 'clamp(4px, 0.7vw, 7px) clamp(4px, 0.7vw, 7px) 0 rgba(248,249,250,0.4)' }}
              whileTap={{ x: 1, y: 1 }}
            >
              DOWNLOAD RESUME
            </motion.a>

            <motion.button
              onClick={() => scrollTo('#contact')}
              className="font-comic text-xs sm:text-sm text-white tracking-wide rounded-sm w-full sm:w-auto"
              style={{
                border: 'clamp(2px, 0.3vw, 3px) solid #E63946',
                boxShadow: 'clamp(3px, 0.5vw, 5px) clamp(3px, 0.5vw, 5px) 0 #E63946',
                padding: '0.9rem 1.75rem',
                margin: '0.25rem 0 0 0',
              }}
              whileHover={{ x: -2, y: -2, boxShadow: 'clamp(4px, 0.7vw, 7px) clamp(4px, 0.7vw, 7px) 0 #E63946' }}
              whileTap={{ x: 1, y: 1 }}
            >
              CONTACT ME
            </motion.button>
          </motion.div>

          {/* 6. Stats
              — separated from CTAs by a full-width hairline rule
              — the rule is the visual break that creates "two zones" in the hero */}
          <motion.div variants={item} className="w-full" style={{ margin: '1rem 0 0  0' }}>
            {/* Rule — clear separator between action zone and stats zone */}
            <div
              className="w-full h-px md:h-[2px] mb-4 sm:mb-6 md:mb-8"
              style={{ backgroundColor: 'rgba(248,249,250,0.1)' }}
              aria-hidden="true"
            />

            {/* Stats row
                — shifted left relative to buttons for asymmetric energy */}
            <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14 flex-wrap"
            style={{ marginTop: '1rem' }}>
              {[
                { value: '4+', label: 'Projects' },
                { value: '15+', label: 'Technologies' },
                { value: 'MCA', label: 'Degree' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1 sm:gap-1.5">
                  <span
                    className="font-comic text-lg sm:text-2xl md:text-[2.25rem] leading-none"
                    style={{ color: '#E63946' }}
                  >
                    {s.value}
                  </span>
                  <span className="font-heading text-[8px] sm:text-[10px] tracking-[0.2em] text-white/35 uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* ── Right column: ghost issue number ── */}
        <motion.div
          className="hidden lg:flex relative items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >

          {/* Responsive halftone sun */}
          <div
            className="absolute"
            style={{
              width: 'clamp(280px, 40vw, 520px)',
              height: 'clamp(280px, 40vw, 520px)',
              right: 'clamp(10px, 2vw, 20px)',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {/* Red circle background */}
            <div
              className="w-full h-full rounded-full"
              style={{
                background: '#E63946',
                boxShadow: 'clamp(7px, 2vw, 14px) clamp(7px, 2vw, 14px) 0 #FFD60A',
              }}
            />
            
            {/* Layer 1: Clipped image (masks the bottom portion inside the circle) */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src="/p.png"
                alt="Abhishek bottom"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[120%] object-contain origin-bottom pointer-events-none"
              />
            </div>

            {/* Layer 2: Unclipped image (allows top of head/hair to overflow the circle) */}
            <img
              src="/p.png"
              alt="Abhishek top"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[120%] object-contain origin-bottom pointer-events-none"
              style={{
                clipPath: 'inset(0 0 30% 0)',
              }}
            />
          </div>

          {/* Responsive halftone ring */}
          <div
            className="absolute rounded-full halftone-red"
            style={{
              width: 'clamp(350px, 50vw, 650px)',
              height: 'clamp(350px, 50vw, 650px)',
              right: 'clamp(-20px, -3vw, -30px)',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.6,
            }}
          />

          {/* Responsive skyline */}
          <div className="absolute bottom-4 md:bottom-8 right-0 flex items-end gap-2 md:gap-5">

            {[150, 250, 350, 240, 180].map((height, i) => (
              <div
                key={i}
                className="relative bg-black border border-md:border-2 border-white rounded-sm"
                style={{
                  height: `clamp(60px, ${height * 0.4}px, ${height}px)`,
                  width: i === 2 ? 'clamp(40px, 8vw, 80px)' : 'clamp(30px, 6vw, 60px)',
                  boxShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0 #FFD60A',
                }}
              >
                <div className="absolute top-2 md:top-5 left-1 md:left-2 right-1 md:right-2 h-1 md:h-2 bg-yellow-400" />
                <div className="absolute top-6 md:top-12 left-1 md:left-2 right-1 md:right-2 h-1 md:h-2 bg-yellow-400" />
              </div>
            ))}

          </div>

          {/* Responsive origin story sticker */}
          <div
            className="absolute bottom-12 md:bottom-24 right-4 md:right-8 rotate-[-8deg] hidden md:block"
            style={{
              background: '#FFD60A',
              color: '#111',
              border: 'clamp(2px, 0.3vw, 3px) solid #111',
              boxShadow: 'clamp(3px, 0.5vw, 5px) clamp(3px, 0.5vw, 5px) 0 #E63946',
              padding: 'clamp(8px, 1vw, 10px) clamp(14px, 2vw, 18px)',
              fontFamily: 'Bangers',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              borderRadius: '4px',
            }}
          >
            ORIGIN STORY!
          </div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="font-heading text-[7px] sm:text-[9px] tracking-[0.3em] text-white/25 uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-5 sm:h-7"
          style={{ backgroundColor: '#E63946' }}
          animate={{ scaleY: [1, 0.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Responsive bottom left label - hidden on mobile */}
      <div
        className="hidden xl:block absolute -bottom-10 -left-12 rotate-[-12deg] z-20"
      >
        <div
          style={{
            background: '#FFD60A',
            border: 'clamp(3px, 0.5vw, 4px) solid #111',
            boxShadow: 'clamp(5px, 1vw, 8px) clamp(5px, 1vw, 8px) 0 #E63946',
            padding: 'clamp(15px, 2vw, 20px) clamp(30px, 4vw, 40px)',
            fontFamily: 'Bangers',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            color: '#111',
            borderRadius: '4px',
            margin: '0 0 4rem 2rem',
          }}

          
        >
          CODE • DESIGN • DEPLOY
        </div>
      </div>

      {/* Responsive speech bubble - hidden on tablet and below */}
      <div className="hidden xl:block absolute bottom-10 right-10 z-20">
        <div className="speech-bubble px-6 md:px-8 py-4 md:py-6 rounded-md">
          <div className="font-comic text-2xl md:text-4xl leading-none text-black" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.25rem)' }}>
            CODE.
            <br />
            DESIGN.
            <br />
            DEPLOY.
            <br />
            REPEAT.
          </div>
        </div>
      </div>
    </section>
  );
}
