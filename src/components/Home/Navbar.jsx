import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('Home');
    const isManualClick = useRef(false);

    /* ── Glassmorphism on scroll ── */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ── ScrollSpy: auto-highlight active section ── */
    useEffect(() => {
        const handleSpy = () => {
            if (isManualClick.current) return;

            // If scrolled to absolute bottom, activate the last link
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                setActive(navLinks[navLinks.length - 1]);
                return;
            }

            // Find the section that is closest to the center/top of the screen
            let currentActive = active;
            let minDistance = Infinity;

            navLinks.forEach((link) => {
                const el = document.getElementById(link.toLowerCase());
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Distance from the top third of the viewport
                    const distance = Math.abs(rect.top - window.innerHeight / 3);

                    // If the section top is above the bottom of viewport and bottom is below top of viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        if (distance < minDistance) {
                            minDistance = distance;
                            currentActive = link;
                        }
                    }
                }
            });

            if (currentActive !== active) {
                setActive(currentActive);
            }
        };

        window.addEventListener('scroll', handleSpy, { passive: true });
        handleSpy(); // Initial check

        return () => window.removeEventListener('scroll', handleSpy);
    }, [active]);

    /* ── Manual click: scroll + lock observer for 800ms ── */
    const handleClick = (link) => {
        setActive(link);
        isManualClick.current = true;

        const el = document.getElementById(link.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Release lock after scroll settles
        setTimeout(() => {
            isManualClick.current = false;
        }, 800);
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center transition-all duration-500 ${scrolled
                ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]'
                : 'bg-transparent border-b border-white/5'
                }`}
        >
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2 cursor-pointer select-none"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleClick('Home')}
                >
                    <span className="text-2xl font-bold font-mono">
                        <span className="text-cyan-400">{'{'}</span>
                        <span className="text-white">LS</span>
                        <span className="text-cyan-400">{'}'}</span>
                    </span>
                    <span className="w-2 h-2 bg-green-500 rounded-full blink-glow" />
                </motion.div>

                {/* Nav Links */}
                <div className="flex items-center" style={{ gap: '40px' }}>
                    {navLinks.map((link) => (
                        <motion.span
                            key={link}
                            onClick={() => handleClick(link)}
                            className={`relative text-sm font-mono cursor-pointer transition-colors duration-200 ${active === link ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                                }`}
                            whileHover={{ y: -1 }}
                        >
                            {link}
                            {active === link && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full"
                                />
                            )}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}