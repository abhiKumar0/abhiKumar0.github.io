import { motion } from 'framer-motion';
import { education } from '../data';
import { fadeInUp } from '../utils/animations';

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-visible"
      style={{
        backgroundColor: '#111111',
        padding: '5rem 0 4rem',
        minHeight: '100vh',
      }}
      aria-labelledby="education-heading"
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
        05
      </div>
      <div className="absolute inset-0 noise-overlay pointer-events-none" style={{ opacity: 0.25 }} />
      <div className="absolute inset-0 paper-texture pointer-events-none" style={{ opacity: 0.32 }} />
      <div className="absolute inset-0 action-lines pointer-events-none" style={{ opacity: 0.08 }} />

      <div
        className="absolute halftone-red pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: '22rem',
          height: '22rem',
          opacity: 0.45,
          maskImage: 'radial-gradient(circle at top left, black 35%, transparent 80%)',
        }}
      />

      <div
        className="absolute halftone-yellow pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          width: '24rem',
          height: '24rem',
          opacity: 0.38,
          maskImage: 'radial-gradient(circle at bottom right, black 35%, transparent 80%)',
        }}
      />

      <div
        className="absolute hidden lg:block"
        style={{
          top: '6rem',
          right: '4rem',
          width: '12rem',
          height: '0.5rem',
          backgroundColor: '#E63946',
          transform: 'skew(-18deg)',
          opacity: 0.8,
        }}
      />

      <div
        className="relative z-10"
        style={{
          width: 'min(1180px, calc(100% - 2rem))',
          marginInline: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.25rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.8rem 1.4rem',
              backgroundColor: '#E63946',
              color: '#111',
              transform: 'rotate(-2deg)',
              border: '3px solid #111',
              boxShadow: '6px 6px 0 #111',
              width: 'fit-content',
            }}
          >
            <span className="font-comic text-sm tracking-[0.35em] uppercase">CHAPTER 05</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <h2
              id="education-heading"
              className="font-comic text-white"
              style={{
                fontSize: 'clamp(3rem, 6.4vw, 5.2rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                textShadow: '8px 8px 0 #E63946',
              }}
            >
              ACADEMY ARC
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
                  fontSize: '1.15rem',
                }}
              >
                EDUCATION DOSSIER
              </span>

            </div>
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="flex flex-col"
          style={{ gap: '1.75rem', marginTop: '1.5rem' }}
        >
          {education.map((edu, idx) => {
            const isLight = idx % 2 === 0;
            const panelBg = isLight ? '#F8F9FA' : '#151515';
            const panelColor = isLight ? '#111111' : '#F8F9FA';
            const borderColor = isLight ? '#111111' : 'rgba(248,249,250,0.85)';
            const accentColor = isLight ? '#E63946' : '#FFD60A';
            const rotation = idx % 2 === 0 ? '-1.2deg' : '1.1deg';

            return (
              <div
                key={edu.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            width: '4rem',
                            height: '3px',
                            backgroundColor: accentColor,
                            boxShadow: `3px 3px 0 ${accentColor}`,
                          }}
                        />
                        <span
                          className="font-heading uppercase tracking-[0.35em]"
                          style={{ color: '#F8F9FA', fontSize: '0.75rem' }}
                        >
                          ACADEMIC CASE
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem',
                        }}
                      >
                        <span
                          className="font-heading uppercase tracking-[0.35em]"
                          style={{ color: 'rgba(248,249,250,0.72)', fontSize: '0.75rem' }}
                        >
                          {edu.duration} • {edu.status.toUpperCase()}
                        </span>
                        <p
                          className="font-heading"
                          style={{ color: 'rgba(248,249,250,0.65)', lineHeight: 1.8, maxWidth: '42rem' }}
                        >
                          Refer to the classified dossier below for a summary of the current academic mission and core focus areas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.article
                  variants={fadeInUp}
                  className="relative"
                  style={{
                    backgroundColor: panelBg,
                    border: `3px solid ${borderColor}`,
                    boxShadow: `8px 8px 0 ${accentColor}`,
                    padding: '1.75rem',
                    minHeight: '320px',
                    transform: `rotate(${rotation})`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '42px',
                    height: '42px',
                    background:
                      'linear-gradient(135deg, transparent 50%, rgba(0,0,0,.15) 50%)',
                  }}
                />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: accentColor,
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0.65rem 0.9rem',
                          backgroundColor: accentColor,
                          color: '#111111',
                          border: '2px solid #111111',
                          boxShadow: '3px 3px 0 #111111',
                          fontFamily: 'Bangers, sans-serif',
                          fontSize: '0.85rem',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                        }}
                      >
                        ACADEMIC LEVEL
                      </div>

                      <h3
                        className="font-comic"
                        style={{
                          color: panelColor,
                          fontSize: '2.25rem',
                          lineHeight: 0.95,
                          marginTop: '1rem',
                        }}
                      >
                        {edu.degree}
                      </h3>

                      <p
                        className="font-heading uppercase"
                        style={{ color: accentColor, letterSpacing: '0.18em', fontSize: '0.8rem', marginTop: '0.85rem' }}
                      >
                        {edu.institution}
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                      <div
                        style={{
                          padding: '0.6rem 0.85rem',
                          border: `2px dashed ${borderColor}`,
                          color: panelColor,
                          backgroundColor: panelBg,
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.18em',
                        }}
                      >
                        TRUSTED FILE
                      </div>
                      <div
                        style={{
                          width: '4rem',
                          height: '4rem',
                          display: 'grid',
                          placeItems: 'center',
                          backgroundColor: accentColor,
                          color: '#111111',
                          fontFamily: 'Bangers, sans-serif',
                          fontSize: '1.25rem',
                          boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                        }}
                      >
                        #{edu.id}
                      </div>
                    </div>
                  </div>

                  <p
                    className="font-heading"
                    style={{ color: panelColor, lineHeight: 1.8, marginBottom: '1.25rem', whiteSpace: 'pre-line' }}
                  >
                    {edu.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem' }}>
                    <span
                      className="font-heading uppercase tracking-wide"
                      style={{
                        color: panelColor,
                        border: `2px solid ${borderColor}`,
                        padding: '0.65rem 0.95rem',
                        backgroundColor: isLight ? 'rgba(17,17,17,0.04)' : 'rgba(255,255,255,0.06)',
                        boxShadow: `2px 2px 0 ${accentColor}`,
                      }}
                    >
                      Software Engineering
                    </span>
                    <span
                      className="font-heading uppercase tracking-wide"
                      style={{
                        color: panelColor,
                        border: `2px solid ${borderColor}`,
                        padding: '0.65rem 0.95rem',
                        backgroundColor: isLight ? 'rgba(17,17,17,0.04)' : 'rgba(255,255,255,0.06)',
                        boxShadow: `2px 2px 0 ${accentColor}`,
                      }}
                    >
                      Distributed Systems
                    </span>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: 'rgba(255,214,10,0.12)',
                      border: `2px solid ${accentColor}`,
                    }}
                    aria-hidden="true"
                  />
                </motion.article>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
