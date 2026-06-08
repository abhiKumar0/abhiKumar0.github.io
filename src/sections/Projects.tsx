import { motion } from 'framer-motion';
import { projects } from '../data';
import { staggerContainer, panelReveal } from '../utils/animations';

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-visible"
            style={{
                backgroundColor: '#111111',
                padding: '5rem 0 4rem',
                minHeight: '100vh',
            }}
            aria-labelledby="projects-heading"
        >
            <div className="absolute noise-overlay pointer-events-none" style={{ inset: 0, opacity: 0.25 }} />

            <div className="absolute paper-texture pointer-events-none" style={{ inset: 0, opacity: 0.35 }} />

            <div className="absolute action-lines pointer-events-none" style={{ inset: 0, opacity: 0.08 }} />

            <div
                className="absolute halftone-red pointer-events-none"
                style={{
                    top: 0,
                    left: 0,
                    width: '22rem',
                    height: '22rem',
                    opacity: 0.5,
                    maskImage: 'radial-gradient(circle at top left, black 35%, transparent 80%)',
                }}
            />

            <div
                className="absolute halftone-yellow pointer-events-none"
                style={{
                    bottom: 0,
                    right: 0,
                    width: '26rem',
                    height: '26rem',
                    opacity: 0.38,
                    maskImage: 'radial-gradient(circle at bottom right, black 35%, transparent 80%)',
                }}
            />

            <div
                className="absolute hidden lg:block"
                style={{
                    top: '4.5rem',
                    left: 0,
                    width: '18rem',
                    height: '2.2rem',
                    background: 'linear-gradient(120deg, rgba(230,57,70,0.9), rgba(255,214,10,0.9))',
                    transform: 'skew(-18deg)',
                    opacity: 0.85,
                }}
            />

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
                04
            </div>

            <div
                className="relative z-10"
                style={{
                    width: 'min(1400px, calc(100% - 3rem))',
                    marginInline: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
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
                        <span className="font-comic text-sm tracking-[0.35em] uppercase">
                            CHAPTER 04
                        </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h2
                            id="projects-heading"
                            className="font-comic text-white"
                            style={{
                                fontSize: 'clamp(4rem, 9vw, 8rem)',
                                lineHeight: 0.9,
                                letterSpacing: '-0.04em',
                                textShadow: '8px 8px 0 #E63946',
                            }}
                        >
                            CASE FILES
                        </h2>

                        <span
                            className="font-comic"
                            style={{
                                display: 'inline-flex',
                                padding: '1rem 1.6rem',
                                backgroundColor: '#FFD60A',
                                color: '#111',
                                border: '3px solid #111',
                                boxShadow: '6px 6px 0 #E63946',
                                transform: 'rotate(-2deg)',
                                fontSize: '1.4rem',
                                width: 'fit-content',
                            }}
                        >
                            FEATURED BUILDS
                        </span>
                    </div>

                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{ gap: '1.75rem', marginTop: '0.75rem' }}
                >
                    {projects.map((project, idx) => {
                        const colors = ['#FFD60A', '#F8F9FA', '#E63946', '#111111'];
                        const cardColor = colors[idx % colors.length];
                        const rotations = [-1.5, 1.2, -0.9, 1.3];

                        const isLightBg = cardColor === '#FFD60A' || cardColor === '#F8F9FA';
                        const textPrimary = isLightBg ? '#111111' : '#F8F9FA';
                        const textSecondary = isLightBg ? 'rgba(17,17,17,0.75)' : 'rgba(248,249,250,0.75)';
                        const borderColor = isLightBg ? '#111111' : 'rgba(248,249,250,0.9)';
                        const shadowColor = isLightBg ? '#E63946' : '#FFD60A';
                        const pillBg = isLightBg ? 'rgba(17,17,17,0.08)' : 'rgba(255,255,255,0.12)';
                        const pillBorder = isLightBg ? 'rgba(17,17,17,0.3)' : 'rgba(248,249,250,0.3)';
                        const accentColor = isLightBg ? '#E63946' : '#FFD60A';
                        const accentBarColor = idx % 2 === 0 ? '#E63946' : '#FFD60A';

                        return (
                            <motion.article
                                key={project.id}
                                variants={panelReveal}
                                className="relative flex flex-col overflow-hidden"
                                style={{
                                    backgroundColor: cardColor,
                                    border: `3px solid ${borderColor}`,
                                    boxShadow: `8px 8px 0 ${shadowColor}`,
                                    transform: `rotate(${rotations[idx % rotations.length]}deg)`,
                                    minHeight: '520px',
                                }}
                                whileHover={{
                                    x: -3,
                                    y: -3,
                                    boxShadow: `12px 12px 0 ${shadowColor}`,
                                    transition: { duration: 0.16 },
                                }}
                                aria-label={`Project: ${project.title}`}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        backgroundColor: accentBarColor,
                                        opacity: 0.6,
                                    }}
                                />
                                <div
                                    className="flex items-center justify-between"
                                    style={{
                                        padding: '1.2rem 1.4rem',
                                        backgroundColor: isLightBg ? 'rgba(17,17,17,0.08)' : 'rgba(255,255,255,0.08)',
                                        borderBottom: `3px solid ${borderColor}`,
                                    }}
                                >
                                    <span className="font-comic tracking-widest" style={{
                                        color: accentColor,
                                        fontSize: '1.1rem',
                                    }}>
                                        ISSUE {project.issue}
                                    </span>
                                    <span
                                        className="font-heading text-[10px] font-bold tracking-widest uppercase"
                                        style={{
                                            padding: '0.75rem 0.95rem',
                                            backgroundColor: accentColor,
                                            color: '#111111',
                                            border: `2px solid ${borderColor}`,
                                        }}
                                    >
                                        {project.tech[0]}
                                    </span>
                                </div>

                                <div
                                    className="flex flex-col flex-1"
                                    style={{
                                        padding: '1.75rem',
                                        gap: '1.25rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        <p
                                            className="font-heading uppercase tracking-[0.35em] text-[0.7rem]"
                                            style={{ color: textSecondary }}
                                        >
                                            PROJECT OVERVIEW
                                        </p>
                                        <h3
                                            className="font-comic leading-tight"
                                            style={{ color: textPrimary, fontSize: 'clamp(2rem, 2.5vw, 3.2rem)' }}
                                        >
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p
                                        className="font-heading text-sm leading-relaxed"
                                        style={{ color: textSecondary, flex: 1 }}
                                    >
                                        {project.description}
                                    </p>

                                    <ul
                                        className="flex flex-wrap"
                                        role="list"
                                        aria-label="Technologies"
                                        style={{ gap: '0.8rem' }}
                                    >
                                        {project.tech.map((t) => (
                                            <li
                                                key={t}
                                                className="font-heading text-[11px] font-semibold tracking-wide uppercase"
                                                style={{
                                                    color: textPrimary,
                                                    border: `2px solid ${pillBorder}`,
                                                    backgroundColor: pillBg,
                                                    padding: '0.7rem 0.95rem',
                                                    display: 'inline-flex',
                                                    boxShadow: `2px 2px 0 ${borderColor}`,
                                                }}
                                            >
                                                {t}
                                            </li>
                                        ))}
                                    </ul>

                                    <div
                                        className="flex flex-col sm:flex-row"
                                        style={{
                                            gap: '0.9rem',
                                            paddingTop: '0.5rem',
                                            width: '100%',
                                            marginTop: 'auto',
                                        }}
                                    >
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-heading tracking-wider uppercase text-xs inline-flex items-center justify-center gap-2"
                                            style={{
                                                backgroundColor: accentColor,
                                                color: '#111111',
                                                border: `2px solid ${borderColor}`,
                                                boxShadow: `3px 3px 0 ${shadowColor}`,
                                                padding: '0.85rem 1rem',
                                                width: '100%',
                                                textDecoration: 'none',
                                            }}
                                            whileHover={{ x: -1, y: -1 }}
                                            whileTap={{ x: 1, y: 1 }}
                                            aria-label={`View ${project.title} on GitHub`}
                                        >
                                            <GithubIcon />
                                            GITHUB
                                        </motion.a>

                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-heading tracking-wider uppercase text-xs inline-flex items-center justify-center gap-2"
                                            style={{
                                                color: textPrimary,
                                                border: `2px solid ${borderColor}`,
                                                padding: '0.85rem 1rem',
                                                width: '100%',
                                                backgroundColor: 'transparent',
                                                textDecoration: 'none',
                                                boxShadow: `3px 3px 0 ${borderColor}`,
                                            }}
                                            whileHover={{ x: -1, y: -1 }}
                                            whileTap={{ x: 1, y: 1 }}
                                            aria-label={`View live demo of ${project.title}`}
                                        >
                                            <LinkIcon />
                                            LIVE DEMO
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center"
                    style={{ marginTop: '2rem' }}
                >
                    <motion.a
                        href="https://github.com/abhiKumar0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading tracking-wider uppercase text-sm inline-flex items-center gap-3"
                        style={{
                            color: '#F8F9FA',
                            border: '3px solid rgba(248,249,250,0.4)',
                            boxShadow: '4px 4px 0 #E63946',
                            padding: '1rem 1.6rem',
                            textDecoration: 'none',
                        }}
                        whileHover={{
                            borderColor: '#F8F9FA',
                            boxShadow: '6px 6px 0 #E63946',
                            x: -2,
                            y: -2,
                        }}
                    >
                        MORE ON GITHUB <span aria-hidden="true">→</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

function GithubIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkIcon() {
    return (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}
