import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-[60px] px-6 overflow-hidden" style={{ gap: '0px' }}>

            {/* Radial background glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            {/* Dot grid pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff18 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Terminal window */}
            <motion.div
                {...fadeUp(0.2)}
                className="w-full max-w-[680px] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(6,182,212,0.12)]" style={{ marginBottom: '48px', marginTop: '50px' }}
            >
                {/* Terminal header */}
                <div className="h-[30px] w-full bg-[#111] border-b border-white/10 flex items-center gap-2" style={{ paddingLeft: '16px' }}>
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-[14px] font-mono text-gray-500 ml-3">~/portfolio</span>
                </div>
                {/* Terminal body */}
                <div className="h-[40px] bg-[#0a0a0a] px-6 py-4 flex justify-center items-center font-mono text-sm text-green-400">
                    <span className="text-gray-500 select-none">&gt;&nbsp;</span>
                    <ReactTyped
                        strings={['lakshya.init({ role: "SDE", stack: "MERN", status: "Ready for opportunities" })']}
                        typeSpeed={40}
                        backSpeed={30}
                        cursorChar="▋"
                        cursor
                    />
                </div>
            </motion.div>

            {/* Name heading */}
            <motion.h1
                {...fadeUp(0.4)}
                className="text-center font-extrabold leading-none tracking-tight text-white"
                style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
            >
                <span className="hero-name h-[150px]">Lakshya Saini</span>
            </motion.h1>

            {/* Role pills */}
            <motion.div
                {...fadeUp(0.6)}
                className="flex flex-wrap items-center justify-center gap-4" style={{ marginTop: '32px' }}
            >
                <span className="pill">
                    <span className="pill-dot" />
                    MERN Stack Developer
                </span>
                <span className="pill">
                    <span className="pill-dot" />
                    Systems &amp; Scale
                </span>
                <span className="pill pill-green">
                    <span className="w-2 h-2 rounded-full bg-green-500 blink-glow" />
                    Open to Opportunities
                </span>
            </motion.div>

            <motion.p
                {...fadeUp(0.7)}
                style={{
                    maxWidth: '660px',
                    textAlign: 'center',
                    fontSize: '1rem',
                    lineHeight: '1.9',
                    letterSpacing: '0.01em',
                    color: '#6b7280',
                    marginTop: '28px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                }}
            >
                I build modern web apps combining{' '}
                <span style={{ color: '#22d3ee', fontWeight: 500 }}>performance</span>,{' '}
                <span style={{ color: '#22d3ee', fontWeight: 500 }}>usability</span>, and clean design.
                Experienced in <span style={{ color: '#a3e635', fontWeight: 500 }}>React</span>,{' '}
                <span style={{ color: '#a3e635', fontWeight: 500 }}>Node.js</span> &amp; RESTful APIs —
                building scalable solutions for real-world problems. My work spans{' '}
                <span style={{ color: '#f9a8d4', fontWeight: 500 }}>data analytics</span>,{' '}
                <span style={{ color: '#f9a8d4', fontWeight: 500 }}>cloud computing</span>, and AI-driven tech,
                bringing both technical depth and analytical thinking to every project.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                {...fadeUp(0.8)}
                className="flex flex-wrap items-center justify-center gap-5" style={{ marginTop: '40px' }}
            >
                <motion.button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(6,182,212,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="cta-primary"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        letterSpacing: '0.05em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <span style={{ color: '#00f2fe', opacity: 0.9 }}>❯</span> Explore Projects
                </motion.button>
                <a href="/resume.pdf" download="Lakshya_Saini (Resume).pdf" style={{ textDecoration: 'none' }}>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(255,255,255,0.15)' }}
                        whileTap={{ scale: 0.97 }}
                        className="cta-ghost"
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            letterSpacing: '0.05em',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        <span style={{ color: '#a78bfa', opacity: 0.9 }}>↓</span> Download Resume
                    </motion.button>
                </a>
            </motion.div>

            {/* Scroll indicator */}
            {/* <motion.div
                {...fadeUp(1.2)}
                className="absolute bottom-8 flex flex-col items-center gap-2 text-gray-600"
            >
                <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-[1px] h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
                />
            </motion.div> */}
        </section>
    );
}
