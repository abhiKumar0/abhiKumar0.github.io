import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState('#hero');

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = navItems.map((item) => item.href);
    const handleScroll = () => {
      const offset = Math.max(120, window.innerHeight * 0.15);
      const scrollPosition = window.scrollY + offset;
      const current = sections
        .map((section) => {
          const el = document.querySelector(section);
          if (!el) return null;
          return { section, top: (el as HTMLElement).offsetTop };
        })
        .filter(Boolean)
        .filter((item) => item!.top <= scrollPosition)
        .pop()?.section;

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? 'rgba(17,17,17,0.92)'
            : 'rgba(17,17,17,0.55)',

          borderBottom: '1px solid rgba(230,57,70,0.2)',

          backdropFilter: 'blur(12px)',
        }}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="relative flex items-end"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
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
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-2" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 font-heading text-[13px] tracking-[0.18em] uppercase ${activeSection === item.href ? 'text-white' : 'text-white/75'} group`}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">{item.label}</span>

                  <span
                    className={`absolute left-3 right-3 bottom-0 h-0.5 transition-transform duration-300 ${activeSection === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    style={{ backgroundColor: '#FFD60A' }}
                  />

                  
                </motion.button>
              </li>
            ))}

            <li className="mx-3">
              <div
                className="h-6 w-px"
                style={{ backgroundColor: 'rgba(248,249,250,.25)' }}
              />
            </li>

            <li>
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                className="flex items-center justify-center"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    background: '#FFD60A',
                    border: '2px solid #111',
                    boxShadow: '3px 3px 0 #E63946',
                    clipPath:
                      'polygon(50% 0%, 61% 35%, 100% 35%, 68% 57%, 80% 100%, 50% 72%, 20% 100%, 32% 57%, 0% 35%, 39% 35%)',
                  }}
                >
                  <span className="text-black text-sm">⚡</span>
                </div>
              </motion.div>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden px-4 py-2 font-comic text-black"
            style={{
              background: '#FFD60A',
              border: '2px solid #111',
              boxShadow: '3px 3px 0 #E63946',
            }}
          >
            MENU
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ backgroundColor: '#111111', borderLeft: '4px solid #E63946' }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="halftone absolute inset-0 opacity-40 pointer-events-none" />
            <ul className="flex flex-col gap-6 text-center" role="list">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="font-comic text-4xl text-white hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
