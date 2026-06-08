import { motion } from 'framer-motion';
import { contactLinks } from '../data';
import { staggerContainer, scaleIn, fadeInUp } from '../utils/animations';

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const iconMap = { email: EmailIcon, github: GitHubIcon, linkedin: LinkedInIcon };

const cardStyles: Record<string, { bg: string; border: string; shadow: string; fg: string }> = {
  '#E63946': { bg: '#E63946', border: '#E63946', shadow: '#FFD60A', fg: '#fff' },
  '#F8F9FA': { bg: '#F8F9FA', border: '#111111', shadow: '#E63946', fg: '#111111' },
  '#4CC9F0': { bg: '#4CC9F0', border: '#4CC9F0', shadow: '#E63946', fg: '#111111' },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-visible"
      style={{ backgroundColor: '#111111', padding: '5rem 0 4rem', minHeight: '100vh' }}
      aria-labelledby="contact-heading"
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
        07
      </div>

      <div className="absolute inset-0 noise-overlay pointer-events-none" style={{ opacity: 0.25 }} />
      <div className="absolute inset-0 paper-texture pointer-events-none" style={{ opacity: 0.32 }} />
      <div className="absolute inset-0 action-lines pointer-events-none" style={{ opacity: 0.08 }} />

      <div
        className="absolute halftone-red pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: '20rem',
          height: '20rem',
          opacity: 0.45,
          maskImage: 'radial-gradient(circle at top left, black 35%, transparent 80%)',
        }}
      />

      <div
        className="absolute halftone-yellow pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          width: '22rem',
          height: '22rem',
          opacity: 0.38,
          maskImage: 'radial-gradient(circle at bottom right, black 35%, transparent 80%)',
        }}
      />

      <div
        className="absolute hidden lg:block"
        style={{
          top: '5rem',
          right: '3rem',
          width: '14rem',
          height: '0.5rem',
          backgroundColor: '#FFD60A',
          transform: 'skew(-18deg)',
          opacity: 0.85,
        }}
      />

      <div
        className="relative z-10"
        style={{
          width: 'min(1180px, calc(100% - 2rem))',
          marginInline: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.85rem 1.4rem',
              backgroundColor: '#E63946',
              color: '#111',
              transform: 'rotate(-2deg)',
              border: '3px solid #111',
              boxShadow: '6px 6px 0 #111',
              width: 'fit-content',
            }}
          >
            <span className="font-comic text-sm tracking-[0.35em] uppercase">CHAPTER 07</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h2
              id="contact-heading"
              className="font-comic text-white"
              style={{
                fontSize: 'clamp(3rem, 7.2vw, 6rem)',
                lineHeight: 0.9,
                textShadow: '8px 8px 0 #E63946',
              }}
            >
              SIGNAL BOOST
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <span
                className="font-comic"
                style={{
                  padding: '1rem 1.6rem',
                  backgroundColor: '#FFD60A',
                  color: '#111',
                  border: '3px solid #111',
                  boxShadow: '6px 6px 0 #E63946',
                  transform: 'rotate(-2deg)',
                  width: 'fit-content',
                  fontSize: '1rem',
                }}
              >
                LET'S CONNECT
              </span>

              <span
                className="font-heading uppercase tracking-[0.35em]"
                style={{
                  padding: '0.85rem 1.2rem',
                  backgroundColor: '#111111',
                  color: '#F8F9FA',
                  border: '2px solid rgba(248,249,250,0.2)',
                  boxShadow: '3px 3px 0 rgba(255,255,255,0.04)',
                  letterSpacing: '0.18em',
                }}
              >
                COMMUNICATIONS GRID
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.75rem', marginTop: '2rem', alignItems: 'start' }}>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="font-heading text-white/70" style={{ lineHeight: 1.7, maxWidth: '48rem' }}>
              Ready to pick up the signal? Use one of the contacts below to connect, collaborate, or just say hi. This is the official comms panel for the portfolio.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem', padding: '0.9rem 1rem', backgroundColor: '#FFD60A', border: '3px solid #111', boxShadow: '5px 5px 0 #E63946' }}>
              <span style={{ width: '0.65rem', height: '0.65rem', borderRadius: '9999px', backgroundColor: '#16a34a', display: 'inline-block' }} aria-hidden />
              <span className="font-heading" style={{ color: '#111', fontWeight: 700 }}>ONLINE AND AVAILABLE</span>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div className="font-heading text-xs uppercase" style={{ color: 'rgba(255,255,255,0.32)', letterSpacing: '0.16em', marginBottom: '0.5rem' }}>
                BEST TIME
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
                {['Morning', 'Afternoon', 'Weekdays'].map((tag) => (
                  <span key={tag} className="font-heading" style={{ padding: '0.55rem 0.8rem', border: '1.5px solid rgba(248,249,250,0.14)', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactLinks.map((link, index) => {
                const Icon = iconMap[link.icon];
                const s = cardStyles[link.color] ?? { bg: '#1c1c1c', border: '#fff', shadow: '#fff', fg: '#fff' };
                const cornerColor = index % 2 === 0 ? '#E63946' : '#FFD60A';

                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    variants={scaleIn}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.2rem',
                      backgroundColor: s.bg,
                      border: `3px solid ${s.border}`,
                      boxShadow: `6px 6px 0 ${s.shadow}`,
                      color: s.fg,
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    whileHover={{ x: -3, y: -3, boxShadow: `9px 9px 0 ${s.shadow}`, transition: { duration: 0.14 } }}
                    whileTap={{ x: 1, y: 1 }}
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4rem', height: '4rem', backgroundColor: cornerColor, opacity: 0.08, pointerEvents: 'none' }} />
                    <div style={{ width: '3rem', height: '3rem', display: 'grid', placeItems: 'center', backgroundColor: s.fg === '#111111' ? 'rgba(17,17,17,0.15)' : 'rgba(255,255,255,0.08)', zIndex: 1 }}>
                      <Icon />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, zIndex: 1 }}>
                      <span className="font-heading" style={{ letterSpacing: '0.18em' }}>{link.label.toUpperCase()}</span>
                      <span className="font-heading" style={{ fontSize: '0.85rem', color: `${link.color === '#F8F9FA' ? '#1f1f1f' : 'rgba(255,255,255,0.75)'}`, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.value}</span>
                    </div>

                    <motion.span style={{ marginLeft: 'auto', fontFamily: 'Bangers, sans-serif', fontSize: '1.25rem', opacity: 0.45, zIndex: 1 }} animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} aria-hidden>
                      →
                    </motion.span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
