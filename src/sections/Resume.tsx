import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../utils/animations';

const highlights = [
  { label: 'Focus', value: 'Full-Stack Engineering' },
  { label: 'Degree', value: 'MCA — 2024–Present' },
  { label: 'Stack', value: 'Java, Next.js, MERN, SpringBoot' },
  { label: 'Achievement', value: 'LeetCode 1972 · CF 1276' },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-visible"
      style={{ backgroundColor: '#111111', padding: '5rem 0 4rem', minHeight: '100vh' }}
      aria-labelledby="resume-heading"
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
        06
      </div>

      <div className="absolute inset-0 noise-overlay pointer-events-none" style={{ opacity: 0.22 }} />
      <div className="absolute inset-0 paper-texture pointer-events-none" style={{ opacity: 0.3 }} />
      <div className="absolute inset-0 action-lines pointer-events-none" style={{ opacity: 0.08 }} />

      <div
        className="absolute halftone-red pointer-events-none"
        style={{
          top: '2rem',
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
          bottom: '2rem',
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

      <div className="relative z-10" style={{ width: 'min(1180px, calc(100% - 2rem))', marginInline: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.45rem', backgroundColor: '#E63946', color: '#111', transform: 'rotate(-2deg)', border: '3px solid #111', boxShadow: '6px 6px 0 #111', width: 'fit-content' }}>
            <span className="font-comic text-sm tracking-[0.35em] uppercase">CHAPTER 06</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <h2 id="resume-heading" className="font-comic text-white" style={{ fontSize: 'clamp(3rem,7.2vw,6rem)', lineHeight: 0.9, textShadow: '8px 8px 0 #E63946' }}>
              THE DOSSIER
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <span className="font-comic" style={{ padding: '1rem 1.6rem', backgroundColor: '#FFD60A', color: '#111', border: '3px solid #111', boxShadow: '6px 6px 0 #E63946', transform: 'rotate(-2deg)', width: 'fit-content', fontSize: '1rem' }}>
                Official record
              </span>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.75rem', marginTop: '2rem', alignItems: 'start' }}>
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="font-heading text-white/60" style={{ lineHeight: 1.75 }}>
              A compact dossier for Abhishek's engineering profile. Download the full resume to review projects, skills, and education in greater detail.
            </p>

            <div style={{ border: '3px solid rgba(248,249,250,0.12)', marginTop: '1.5rem', overflow: 'hidden' }}>
              {highlights.map((h, index) => (
                <div key={h.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.95rem 1rem', backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(248,249,250,0.06)' }}>
                  <span className="font-heading text-xs tracking-widest" style={{ color: '#E63946' }}>{h.label.toUpperCase()}</span>
                  <span className="font-heading text-white/75" style={{ textAlign: 'right' }}>{h.value}</span>
                </div>
              ))}
            </div>

            <motion.a href="/Resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', marginTop: '1.4rem', padding: '0.95rem 1.2rem', backgroundColor: '#FFD60A', color: '#111', border: '3px solid #111', boxShadow: '5px 5px 0 #E63946', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none' }} whileHover={{ x: -2, y: -2 }} aria-label="Download resume PDF">
              <DownloadIcon />
              <span className="font-heading" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>DOWNLOAD RESUME PDF</span>
            </motion.a>

            <div style={{ marginTop: '0.75rem', color: 'rgba(248,249,250,0.25)', fontSize: '0.8rem' }}>
              This preview is based on the actual Resume.
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div style={{ border: '3px solid rgba(248,249,250,0.18)', boxShadow: '8px 8px 0 #E63946', overflow: 'hidden', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.95rem 1rem', backgroundColor: '#E63946', borderBottom: '3px solid #111' }}>
                <span className="font-comic text-white tracking-widest">ABHI — RESUME</span>
                <span style={{ padding: '0.55rem 0.8rem', backgroundColor: '#FFD60A', color: '#111', border: '2px solid #111', fontSize: '0.75rem', fontWeight: 700 }}>PDF</span>
              </div>

              <div style={{ backgroundColor: '#171717', padding: '0.75rem' }}>
                <div style={{ backgroundColor: '#F8F9FA', padding: '1rem', position: 'relative', overflow: 'hidden' }}>
                  <div className="absolute halftone-yellow pointer-events-none" style={{ top: '0.5rem', right: '0.5rem', width: '10rem', height: '10rem', opacity: 0.12, maskImage: 'radial-gradient(circle at top right, black 35%, transparent 75%)' }} />
                  <div style={{ borderBottom: '2px solid #E63946', paddingBottom: '0.65rem', marginBottom: '0.75rem' }}>
                    <div className="font-comic" style={{ color: '#111111', fontSize: '2.15rem' }}>ABHI</div>
                    <div className="font-heading text-xs" style={{ color: '#6b7280', marginTop: '0.3rem' }}>Software Engineer · MCA Student · Real-Time Systems</div>
                  </div>

                  <div style={{ marginBottom: '0.85rem' }}>
                    <div className="font-heading text-[9px] font-bold tracking-widest uppercase" style={{ color: '#E63946', marginBottom: '0.45rem' }}>EDUCATION</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>MCA, MNNIT Allahabad — 2024–Present</span>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>CPI: 8.36 (Till 4th Sem)</span>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>B.Sc. Mathematics, Allahabad State University — 2020–2024</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '0.85rem' }}>
                    <div className="font-heading text-[9px] font-bold tracking-widest uppercase" style={{ color: '#E63946', marginBottom: '0.45rem' }}>PROJECTS</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>ChatFusion — real-time communication platform using WebRTC, Socket.IO, Supabase, Redis, and Prisma.</span>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>BarsVsBars — MERN rap battle platform with JWT auth, Cloudinary media storage, and Socket.IO voting.</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '0.85rem' }}>
                    <div className="font-heading text-[9px] font-bold tracking-widest uppercase" style={{ color: '#E63946', marginBottom: '0.45rem' }}>SKILLS</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Java', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Socket.IO', 'WebRTC', 'Redis', 'Prisma', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className="font-heading uppercase" style={{ color: '#111111', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '0.85rem' }}>
                    <div className="font-heading text-[9px] font-bold tracking-widest uppercase" style={{ color: '#E63946', marginBottom: '0.45rem' }}>ACHIEVEMENTS</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>LeetCode Max Rating: 1972</span>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>Codeforces Max Rating: 1276</span>
                      <span className="font-heading" style={{ color: '#111111', fontSize: '0.8rem' }}>Rank 198, LeetCode Biweekly Contest 180</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1rem', backgroundColor: '#141414', borderTop: '2px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-heading" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>Updated · 2026</span>
                  <span className="font-heading" style={{ color: '#FFD60A', fontSize: '0.9rem' }}>CLASSIFIED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
