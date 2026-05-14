import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const contactLinks = [
    { id: 'gmail', name: 'Gmail', label: 'lakshyasaini.work12345@gmail.com', href: 'mailto:lakshyasaini.work12345@gmail.com', color: '#ea4335', icon: <FaEnvelope size={18} /> },
    { id: 'linkedin', name: 'LinkedIn', label: 'Connect professionally', href: 'https://www.linkedin.com/in/lakshya-saini-a1ba9b22b/', color: '#38bdf8', icon: <FaLinkedin size={18} /> },
    { id: 'github', name: 'GitHub', label: 'Explore repositories', href: 'https://github.com/Dataanomaly190', color: '#f1f5f9', icon: <FaGithub size={18} /> },
    // { id: 'leetcode', name: 'LeetCode', label: 'Data structures & algorithms', href: 'https://leetcode.com/', color: '#ffa116', icon: <SiLeetcode size={18} /> },
    // { id: 'hackerrank', name: 'HackerRank', label: 'Skill certifications', href: 'https://hackerrank.com/', color: '#00ea64', icon: <SiHackerrank size={18} /> },
    { id: 'codechef', name: 'CodeChef', label: 'Competitive programming', href: 'https://www.codechef.com/users/lakcode145', color: '#a78bfa', icon: <SiCodechef size={18} /> },
    // { id: 'discord', name: 'Discord', label: 'Let\'s chat live', href: 'https://discord.com/', color: '#5865f2', icon: <FaDiscord size={18} /> },
];

function ContactCard({ item, index }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.2 + index * 0.04)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px 20px', borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid rgba(255,255,255,0.06)`,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderColor: hovered ? item.color + '66' : 'rgba(255,255,255,0.06)',
                background: hovered ? `linear-gradient(135deg, ${item.color}12 0%, rgba(255,255,255,0.02) 100%)` : 'rgba(255,255,255,0.02)',
                boxShadow: hovered ? `0 12px 30px -10px ${item.color}30` : 'none',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)'
            }}
        >
            {/* Icon box */}
            <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: `${item.color}15`, border: `1px solid ${item.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: item.color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
                fontSize: item.badge ? '0.9rem' : '1rem', flexShrink: 0,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hovered ? 'scale(1.1)' : 'scale(1)'
            }}>
                {item.icon || item.badge}
            </div>

            {/* Texts */}
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: 1 }}>
                <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 600,
                    color: hovered ? '#f1f5f9' : '#e2e8f0', transition: 'color 0.3s',
                    marginBottom: '2px'
                }}>
                    {item.name}
                </span>
                <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '0.78rem',
                    color: '#64748b', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'
                }}>
                    {item.label}
                </span>
            </div>
        </motion.a>
    );
}

export default function Contact() {
    return (
        <section
            id="contact"
            style={{ position: 'relative', padding: '120px 24px', maxWidth: '1100px', margin: '0 auto', paddingBottom: '160px' }}
        >
            {/* Background glow */}
            <div style={{
                pointerEvents: 'none', position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '400px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)',
                filter: 'blur(60px)',
            }} />

            {/* Section label */}
            <motion.div {...fadeUp(0)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, rgba(167,139,250,0.4), transparent)' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#a78bfa', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    06 / contact
                </span>
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, rgba(167,139,250,0.4), transparent)' }} />
            </motion.div>

            {/* Heading */}
            <motion.h2 {...fadeUp(0.1)} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1,
                letterSpacing: '-0.02em', marginBottom: '24px', textAlign: 'center'
            }}>
                Let's Build Something{' '}
                <span style={{ background: 'linear-gradient(120deg, #a78bfa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Great
                </span>
            </motion.h2>

            <motion.p {...fadeUp(0.15)} style={{
                fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#94a3b8',
                marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px', textAlign: 'center', lineHeight: 1.6
            }}>
                I am actively exploring new full-time roles and collaborative ventures. Whether you're a recruiter looking for a dedicated software engineer, or a fellow developer wanting to talk code and algorithms, my inbox is always open!
            </motion.p>

            {/* Contact links grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                {contactLinks.map((item, index) => (
                    <ContactCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}
