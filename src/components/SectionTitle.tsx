import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface SectionTitleProps {
  issue: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  id?: string;
}

export default function SectionTitle({ issue, title, subtitle, align = 'left', id }: SectionTitleProps) {
  const centered = align === 'center';

  return (
    <motion.div
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Issue tag */}
      <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
        <span
          className="font-comic text-black text-[11px] tracking-[0.22em] px-3 py-1.5 flex-shrink-0"
          style={{ backgroundColor: '#E63946', border: '2px solid #111111' }}
        >
          {issue}
        </span>
        <div className="h-px w-16 bg-white/10 flex-shrink-0" />
      </div>

      {/* Main title — the headline of the section */}
      <h2
        id={id}
        className="font-comic text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-white leading-[0.9]"
      >
        {title}
      </h2>

      {/* Subtitle — breathing room below the title */}
      {subtitle && (
        <p className="mt-4 font-heading text-[11px] tracking-[0.22em] text-white/35 uppercase">
          {subtitle}
        </p>
      )}

      {/* Yellow rule — separates heading from body content */}
      <div
        className={`mt-6 h-[3px] w-14 ${centered ? 'mx-auto' : ''}`}
        style={{ backgroundColor: '#FFD60A' }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
