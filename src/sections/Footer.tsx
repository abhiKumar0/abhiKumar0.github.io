import { motion } from 'framer-motion';
import { contactLinks } from '../data';

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: '#0a0a0a', borderTop: '3px solid #E63946', overflow: 'visible', padding: '3rem 0' }}
      role="contentinfo"
    >
      <div className="absolute halftone pointer-events-none" style={{ inset: 0, opacity: 0.12 }} />

      {/* decorative corner accent */}
      <div style={{ position: 'absolute', top: -18, left: 12, transform: 'rotate(-6deg)', background: '#E63946', color: '#111', padding: '0.35rem 0.6rem', border: '3px solid #111', boxShadow: '6px 6px 0 #111', fontFamily: 'Bangers, sans-serif' }}>END</div>

      <div className="relative z-10" style={{ width: 'min(1180px, calc(100% - 2rem))', marginInline: 'auto', padding: '0 0' }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.25rem', alignItems: 'center' }}>

          {/* Left — logo */}
          <div className="flex flex-col" style={{ gap: '0.25rem' }}>
            <span className="font-comic text-xl text-white">
              <span
                className="font-comic text-3xl leading-none"
                style={{
                  color: '#E63946',
                  textShadow: '2px 2px 0 rgba(0,0,0,.4)',
                }}
              >
                ABHI
              </span>

              <span
                className="font-comic text-3xl leading-none text-white"
                style={{
                  textShadow: '2px 2px 0 rgba(230,57,70,.5)',
                }}
              >
                SHEK
              </span>

              <span
                className="font-heading text-[11px] ml-1 mb-1 tracking-[0.18em]"
                style={{ color: '#FFD60A' }}
              >
                DEV
              </span>
            </span>
            <p className="font-heading text-[11px]" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.18em' }}>
              © {new Date().getFullYear()} Abhishek. All rights reserved.
            </p>
          </div>
            
          <div></div>

          {/* Right — links + back-to-top */}
          <div className="flex" style={{ alignItems: 'center', justifyContent: 'flex-start', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {contactLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  className="font-heading text-[11px] tracking-widest uppercase"
                  whileHover={{ y: -2 }}
                  style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                  aria-label={link.label}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div style={{ width: '1px', height: '1rem', backgroundColor: 'rgba(255,255,255,0.08)' }} aria-hidden="true" />

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center"
              style={{ width: '2.25rem', height: '2.25rem', border: '2px solid #E63946', color: '#E63946', background: 'transparent' }}
              whileHover={{ backgroundColor: '#E63946', color: '#111111', y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom line */}
        <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E63946', opacity: 0.15 }} />
          <div style={{ width: '6px', height: '6px', transform: 'rotate(45deg)', backgroundColor: '#FFD60A' }} />
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E63946', opacity: 0.15 }} />
        </div>
      </div>
    </footer>
  );
}
