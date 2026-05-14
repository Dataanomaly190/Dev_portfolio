import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Certificates from "./data/certificate";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const certificates = Certificates.map((_, i) => ({
    id: i + 1,
    title: Certificates[i].title,
    issuer: Certificates[i].issuer,
    date: Certificates[i].date,
    image: Certificates[i].image,
    color: ["#38bdf8", "#a78bfa", "#10b981", "#f472b6", "#06b6d4", "#f59e0b"][i % 6],
}));

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section
            id="certifications"
            style={{ position: 'relative', padding: '120px 24px', maxWidth: '1100px', margin: '0 auto' }}
        >
            {/* Background glow */}
            <div style={{
                pointerEvents: 'none', position: 'absolute', top: '8%', right: '-100px',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
                filter: 'blur(60px)',
            }} />

            {/* Section label */}
            <motion.div {...fadeUp(0)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#06b6d4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    05 / certifications
                </span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
            </motion.div>

            {/* Heading */}
            <motion.h2 {...fadeUp(0.1)} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1,
                letterSpacing: '-0.02em', marginBottom: '12px',
            }}>
                Professional{' '}
                <span style={{ background: 'linear-gradient(120deg, #38bdf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Credentials
                </span>
            </motion.h2>
            <motion.p {...fadeUp(0.15)} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#475569', marginBottom: '48px', maxWidth: '500px' }}>
                Continuous learning and specialized training in modern software engineering and data science.
            </motion.p>

            {/* Certifications Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        {...fadeUp(0.2 + (index * 0.05))}
                        whileHover={{ y: -8 }}
                        style={{
                            borderRadius: '16px',
                            border: `1px solid rgba(255,255,255,0.07)`,
                            background: 'rgba(255,255,255,0.02)',
                            transition: 'border-color 0.3s, box-shadow 0.3s',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = cert.color + '44';
                            e.currentTarget.style.boxShadow = `0 10px 30px -10px ${cert.color}20`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Image Placeholder */}
                        <div
                            onClick={() => cert.image && setSelectedCert(cert)}
                            style={{
                                width: '100%',
                                aspectRatio: '4/3',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                background: `linear-gradient(135deg, ${cert.color}0a 0%, rgba(255,255,255,0.02) 100%)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: cert.image ? 'pointer' : 'default'
                            }}
                        >
                            {cert.image ? (
                                typeof cert.image === 'string' && cert.image.endsWith('.pdf') ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: cert.color }}>
                                        <span style={{ fontSize: '2.5rem' }}>📄</span>
                                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', fontWeight: 600 }}>PDF Document</span>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#64748b' }}>Click to view clear overlay</span>
                                    </div>
                                ) : (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                )
                            ) : (
                                <div style={{
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                                    color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
                                }}>
                                    <div style={{ fontSize: '1.5rem', opacity: 0.3, color: cert.color }}>⬡</div>
                                    <span style={{ letterSpacing: '0.1em' }}>[ insert image ]</span>
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.65rem', color: cert.color,
                                marginBottom: '8px', display: 'block'
                            }}>
                                {cert.date}
                            </span>
                            <h3
                                onClick={() => cert.image && setSelectedCert(cert)}
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '1.1rem', fontWeight: 600,
                                    color: '#f1f5f9', margin: '0 0 6px 0',
                                    lineHeight: 1.3,
                                    cursor: cert.image ? 'pointer' : 'default',
                                    textDecoration: cert.image ? 'underline' : 'none',
                                    textUnderlineOffset: '4px',
                                    textDecorationColor: cert.image ? cert.color + '55' : 'transparent'
                                }}
                            >
                                {cert.title}
                            </h3>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.85rem', color: '#64748b',
                                margin: 0
                            }}>
                                {cert.issuer}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedCert(null)}
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                            background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)',
                            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '24px', cursor: 'pointer'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                            onClick={e => e.stopPropagation()} // Clicking inside modal content keeps it open
                            style={{
                                position: 'relative',
                                maxWidth: '950px', width: '100%',
                                background: '#0f172a', borderRadius: '16px',
                                border: `1px solid ${selectedCert.color}55`,
                                boxShadow: `0 0 50px ${selectedCert.color}25`,
                                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                                cursor: 'default'
                            }}
                        >
                            {/* Top bar */}
                            <div style={{
                                padding: '14px 24px', background: 'rgba(255,255,255,0.03)',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>
                                    {selectedCert.title}
                                </span>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    style={{
                                        background: 'transparent', border: 'none', color: '#94a3b8',
                                        fontSize: '1.2rem', cursor: 'pointer', padding: '4px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Content preview */}
                            <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)', height: '70vh', overflow: 'hidden' }}>
                                {typeof selectedCert.image === 'string' && selectedCert.image.endsWith('.pdf') ? (
                                    <iframe
                                        src={selectedCert.image}
                                        title={selectedCert.title}
                                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                                    />
                                ) : (
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                    />
                                )}
                            </div>

                            {/* Footer info */}
                            <div style={{ padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: '#64748b' }}>
                                <span>Issued by: <strong style={{ color: selectedCert.color }}>{selectedCert.issuer}</strong></span>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{selectedCert.date}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
