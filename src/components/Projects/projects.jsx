import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from './data/projects';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
});

/* ─────────────────────────── FILTER TABS ─────────────────────────── */
const filters = [
    { id: 'all', label: 'All', icon: '◎', color: '#06b6d4' },
    { id: 'Frontend', label: 'Frontend', icon: '</>', color: '#38bdf8' },
    { id: 'Full-Stack', label: 'Full-Stack', icon: '⚙', color: '#a78bfa' },
    { id: 'Experimental', label: 'Experimental', icon: '⬡', color: '#f472b6' },
];

/* ─────────────────────────── FILTER TAB COMPONENT ─────────────────────────── */
function FilterTab({ filter, isActive, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 18px', borderRadius: '10px',
                border: `1px solid ${isActive ? filter.color + '66' : 'rgba(255,255,255,0.07)'}`,
                background: isActive ? `${filter.color}15` : 'rgba(255,255,255,0.02)',
                cursor: 'pointer',
                transition: 'border-color 0.25s, background 0.25s',
                boxShadow: isActive ? `0 0 16px ${filter.color}33` : 'none',
            }}
        >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: filter.color }}>
                {filter.icon}
            </span>
            <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.82rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#f1f5f9' : '#64748b',
                transition: 'color 0.25s', whiteSpace: 'nowrap',
            }}>
                {filter.label}
            </span>
        </motion.button>
    );
}

/* ─────────────────────────── TABLEAU CARD ─────────────────────────── */
function TableauCard({ title, category, color, link, date }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.a
            href={link} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                textDecoration: 'none',
                display: 'flex', flexDirection: 'column',
                padding: '24px', borderRadius: '16px',
                border: `1px solid rgba(255,255,255,0.07)`,
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered ? `0 12px 24px ${color}15` : 'none',
                borderColor: hovered ? `${color}55` : 'rgba(255,255,255,0.07)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem', color,
                    background: `${color}15`,
                    padding: '4px 10px', borderRadius: '999px',
                    border: `1px solid ${color}44`,
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>
                    {category}
                </span>
                <FaExternalLinkAlt size={12} color={hovered ? color : '#64748b'} style={{ transition: 'color 0.3s' }} />
            </div>

            <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: '1.2rem',
                fontWeight: 600, color: '#f1f5f9', margin: '0 0 8px 0',
                lineHeight: 1.3
            }}>
                {title}
            </h3>

            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#64748b', marginBottom: '16px' }}>
                {date}
            </span>

            <div style={{ flex: 1 }} />

            <div style={{
                height: '3px', width: '100%', borderRadius: '2px',
                background: 'rgba(255,255,255,0.05)', overflow: 'hidden',
                marginTop: '16px'
            }}>
                <div style={{
                    height: '100%', width: hovered ? '100%' : '20%',
                    background: color, transition: 'width 0.4s ease-out'
                }} />
            </div>
        </motion.a>
    );
}

/* ─────────────────────────── SUB TILE (multi-project preview) ─────────────────────────── */
function SubTile({ sub, color }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            {/* Name badge + inline github icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem', color,
                    background: `${color}18`,
                    border: `1px solid ${color}55`,
                    padding: '3px 10px', borderRadius: '999px',
                    letterSpacing: '0.06em', fontWeight: 500,
                }}>
                    {sub.name}
                </span>
                {/* {sub.github && (
                    <a href={sub.github} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#475569', transition: 'color 0.2s', lineHeight: 1 }}
                        onMouseEnter={e => e.currentTarget.style.color = color}
                        onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                    >
                        <FaGithub size={11} />
                    </a>
                )} */}
            </div>

            {/* Image tile with independent hover overlay */}
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    position: 'relative',
                    borderRadius: '10px', overflow: 'hidden',
                    border: `1px solid ${color}40`,
                    background: `linear-gradient(135deg, ${color}0a 0%, rgba(255,255,255,0.03) 100%)`,
                    aspectRatio: '16 / 7',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                }}
            >
                {/* Sub-specific image */}
                {sub.image ? (
                    <img
                        src={sub.image}
                        alt={sub.name}
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                            transform: hovered ? 'scale(1.05)' : 'scale(1)',
                        }}
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                ) : (
                    <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6rem', color: '#475569', letterSpacing: '0.1em',
                    }}>
                        [ preview ]
                    </span>
                )}

                {/* Hover overlay — only when there's at least one link */}
                {(sub.github || sub.live || sub.video) && (
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'center', gap: '10px',
                        opacity: hovered ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: hovered ? 'auto' : 'none',
                    }}>
                        {sub.github && (
                            <a href={sub.github} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.72rem', color: '#f1f5f9',
                                    textDecoration: 'none',
                                    padding: '7px 16px', borderRadius: '8px',
                                    border: `1px solid ${color}66`,
                                    background: `${color}22`,
                                    transition: 'background 0.2s, border-color 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = `${color}44`;
                                    e.currentTarget.style.borderColor = color;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = `${color}22`;
                                    e.currentTarget.style.borderColor = `${color}66`;
                                }}
                            >
                                <FaGithub size={11} /> GitHub
                            </a>
                        )}
                        {sub.live && (
                            <a href={sub.live} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.72rem', color: '#f1f5f9',
                                    textDecoration: 'none',
                                    padding: '7px 16px', borderRadius: '8px',
                                    border: `1px solid ${color}66`,
                                    background: `${color}22`,
                                    transition: 'background 0.2s, border-color 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = `${color}44`;
                                    e.currentTarget.style.borderColor = color;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = `${color}22`;
                                    e.currentTarget.style.borderColor = `${color}66`;
                                }}
                            >
                                <FaExternalLinkAlt size={11} /> Live
                            </a>
                        )}
                        {sub.video && (
                            <a href={sub.video} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.72rem', color: '#f1f5f9',
                                    textDecoration: 'none',
                                    padding: '7px 16px', borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    background: 'rgba(255,255,255,0.06)',
                                    transition: 'background 0.2s, border-color 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                }}
                            >
                                <FaPlayCircle size={11} /> Video
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────── PROJECT CARD ─────────────────────────── */
function ProjectCard({ project, color }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            layout
            style={{
                borderRadius: '16px',
                border: `1px solid rgba(255,255,255,0.07)`,
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                overflow: 'hidden',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '44';
                e.currentTarget.style.boxShadow = `0 0 28px ${color}18`;
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div className="project-card-inner" style={{ display: 'flex', gap: '0' }}>

                {/* ── LEFT 70% ── */}
                <div style={{ flex: '0 0 70%', padding: '32px 36px', minWidth: 0 }}>

                    {/* Badges row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                        <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.68rem', color,
                            background: `${color}18`,
                            padding: '2px 10px', borderRadius: '999px',
                            border: `1px solid ${color}55`,
                        }}>
                            {project.type}
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#475569' }}>
                            {project.year}
                        </span>
                        <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.62rem', color: '#334155',
                            marginLeft: 'auto',
                            background: 'rgba(255,255,255,0.04)',
                            padding: '2px 8px', borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            {project.status}
                        </span>
                    </div>

                    {/* Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <h3 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1.3rem', fontWeight: 700,
                            color: '#f1f5f9', margin: 0,
                            letterSpacing: '-0.01em',
                        }}>
                            {project.name}
                        </h3>
                        {project.isPortfolio && (
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.65rem', color: '#22c55e', fontWeight: 600,
                                letterSpacing: '0.06em',
                                padding: '3px 10px', borderRadius: '999px',
                                border: '1px solid rgba(34,197,94,0.35)',
                                background: 'rgba(34,197,94,0.08)',
                            }}>
                                <span className="blink-glow" style={{
                                    width: '7px', height: '7px', borderRadius: '50%',
                                    background: '#22c55e',
                                    display: 'inline-block', flexShrink: 0,
                                }} />
                                Live
                            </span>
                        )}
                    </div>

                    {/* Tagline */}
                    <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.85rem', color: '#64748b',
                        lineHeight: 1.75, margin: '10px 0 0',
                    }}>
                        {project.tagline}
                    </p>

                    {/* Divider */}
                    <div style={{ height: '1px', background: `linear-gradient(to right, ${color}33, transparent)`, margin: '20px 0' }} />

                    {/* Key Features */}
                    <p style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem', color: '#475569',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        marginBottom: '12px',
                    }}>
                        Key Features
                    </p>
                    <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                        {project.features.map((f, i) => (
                            <li key={i} style={{
                                display: 'flex', alignItems: 'flex-start', gap: '10px',
                                listStyle: 'none', fontFamily: "'Inter', sans-serif",
                                fontSize: '0.83rem', color: '#94a3b8', lineHeight: 1.65,
                            }}>
                                <span style={{ color, fontSize: '0.4rem', marginTop: '7px', flexShrink: 0 }}>●</span>
                                {f}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <p style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem', color: '#475569',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        marginBottom: '12px',
                    }}>
                        Tech Stack
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                        {project.stack.map(t => (
                            <span key={t} style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.68rem',
                                color: '#e2e8f0',
                                background: `${color}18`,
                                border: `1px solid ${color}55`,
                                padding: '3px 12px', borderRadius: '999px',
                            }}>
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                        {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '7px',
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.78rem', color: '#64748b',
                                    textDecoration: 'none', transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = color}
                                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                            >
                                <FaGithub size={15} /> GitHub
                            </a>
                        )}
                        {project.links?.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '7px',
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.78rem', color: '#64748b',
                                    textDecoration: 'none', transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = color}
                                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                            >
                                <FaExternalLinkAlt size={13} /> Live Demo
                            </a>
                        )}
                        {project.links?.video && (
                            <a href={project.links.video} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '7px',
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.78rem', color: '#64748b',
                                    textDecoration: 'none', transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = color}
                                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                            >
                                <FaPlayCircle size={15} /> Video Demo
                            </a>
                        )}
                    </div> */}
                </div>
                {/* ── END LEFT 70% ── */}

                {/* ── RIGHT 30% — Preview ── */}
                <div style={{
                    flex: '0 0 30%', minWidth: 0,
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    padding: '24px 24px 24px 0',
                }}>
                    {project.subprojects ? (
                        /* ── Multi-preview stack ── */
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {project.subprojects.map((sub, i) => (
                                <SubTile key={i} sub={sub} color={color} />
                            ))}
                        </div>
                    ) : (
                        /* ── Single preview with hover overlay ── */
                        <div
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                                position: 'relative', width: '100%',
                                borderRadius: '14px', overflow: 'hidden',
                                border: `1px solid ${color}40`,
                                background: 'rgba(255,255,255,0.02)',
                                aspectRatio: '4 / 5',
                                boxShadow: `0 0 24px ${color}12`,
                                cursor: 'pointer',
                            }}
                        >
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        transition: 'transform 0.4s ease',
                                        transform: hovered ? 'scale(1.05)' : 'scale(1)',
                                    }}
                                    onError={e => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            ) : null}
                            <div style={{
                                display: project.image ? 'none' : 'flex',
                                width: '100%', height: '100%',
                                flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center', gap: '8px',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.72rem', color: '#334155',
                                textAlign: 'center', padding: '16px',
                                background: `linear-gradient(135deg, ${color}08 0%, rgba(255,255,255,0.02) 100%)`,
                            }}>
                                <div style={{ fontSize: '1.4rem', opacity: 0.3 }}>⬡</div>
                                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: '#475569' }}>[ no preview ]</span>
                            </div>
                            {/* Hover overlay */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center', gap: '12px',
                                opacity: hovered ? 1 : 0,
                                transition: 'opacity 0.35s ease',
                                pointerEvents: hovered ? 'auto' : 'none',
                            }}>
                                {project.isPortfolio ? (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: '0.8rem', color: '#22c55e',
                                            fontWeight: 600, letterSpacing: '0.05em',
                                            padding: '8px 20px', borderRadius: '999px',
                                            border: '1px solid rgba(34,197,94,0.45)',
                                            background: 'rgba(34,197,94,0.1)',
                                        }}>
                                            <span style={{
                                                width: '8px', height: '8px', borderRadius: '50%',
                                                background: '#22c55e',
                                                boxShadow: '0 0 6px #22c55e',
                                                animation: 'pulse 1.6s infinite',
                                                display: 'inline-block',
                                                flexShrink: 0,
                                            }} />
                                            Online
                                        </div>
                                    </a>
                                ) : project.links?.live ? (
                                    <div className='flex flex-row gap-2'>
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '7px',
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.74rem', color: '#f1f5f9',
                                                textDecoration: 'none',
                                                padding: '8px 18px', borderRadius: '8px',
                                                border: `1px solid ${color}66`,
                                                background: `${color}22`,
                                                transition: 'background 0.2s, border-color 0.2s',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = `${color}44`;
                                                e.currentTarget.style.borderColor = color;
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = `${color}22`;
                                                e.currentTarget.style.borderColor = `${color}66`;
                                            }}
                                        >
                                            <FaGithub size={12} /> GitHub
                                        </a>
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '7px',
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.74rem', color: '#f1f5f9',
                                                textDecoration: 'none',
                                                padding: '8px 18px', borderRadius: '8px',
                                                border: `1px solid ${color}66`,
                                                background: `${color}22`,
                                                transition: 'background 0.2s, border-color 0.2s',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = `${color}44`;
                                                e.currentTarget.style.borderColor = color;
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = `${color}22`;
                                                e.currentTarget.style.borderColor = `${color}66`;
                                            }}
                                        >
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                    </div>
                                ) :
                                    (
                                        <div>
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '7px',
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: '0.74rem', color: '#f1f5f9',
                                                    textDecoration: 'none',
                                                    padding: '8px 18px', borderRadius: '8px',
                                                    border: `1px solid ${color}66`,
                                                    background: `${color}22`,
                                                    transition: 'background 0.2s, border-color 0.2s',
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.background = `${color}44`;
                                                    e.currentTarget.style.borderColor = color;
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.background = `${color}22`;
                                                    e.currentTarget.style.borderColor = `${color}66`;
                                                }}
                                            >
                                                <FaGithub size={12} /> GitHub
                                            </a>
                                        </div>
                                    )}
                                {project.links?.video && (
                                    <a href={project.links.video} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '7px',
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: '0.74rem', color: '#f1f5f9',
                                            textDecoration: 'none',
                                            padding: '8px 18px', borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            background: 'rgba(255,255,255,0.06)',
                                            transition: 'background 0.2s, border-color 0.2s',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        }}
                                    >
                                        <FaPlayCircle size={13} /> Video Demo
                                    </a>
                                )}
                                {!project.links?.live && !project.links?.github && !project.links?.video && (
                                    <span style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: '0.7rem', color: '#64748b',
                                    }}>
                                        Preview
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {/* ── END RIGHT 30% ── */}

            </div>
            {/* ── END project-card-inner ── */}

            <style>{`
        @media (max-width: 768px) {
          .project-card-inner { flex-direction: column !important; }
          .project-card-inner > div:first-child { flex: 1 1 auto !important; }
          .project-card-inner > div:last-child { flex: 1 1 auto !important; padding: 0 24px 24px !important; }
        }
      `}</style>
        </motion.div>
    );
}

/* ─────────────────────────── MAIN SECTION ─────────────────────────── */
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    // Sync state with URL hash on mount and hash change
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#projects/')) {
                const route = hash.replace('#projects/', '').toLowerCase();
                const matchedFilter = filters.find(f =>
                    f.label.toLowerCase().replace(/[^a-z0-9]/g, '') === route.replace(/[^a-z0-9]/g, '')
                );
                if (matchedFilter) {
                    setActiveFilter(matchedFilter.id);
                }
            }
        };

        handleHashChange(); // Check on mount
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Update URL when filter is clicked
    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId);
        const filterObj = filters.find(f => f.id === filterId);
        if (filterObj) {
            const route = filterObj.label.toLowerCase().replace(/[^a-z0-9]/g, '');
            window.history.pushState(null, '', `#projects/${route}`);
        }
    };

    const filtered = activeFilter === 'all'
        ? [...projects].sort((a, b) => parseInt(a.year) - parseInt(b.year))
        : projects.filter(p => p.tier === activeFilter).sort((a, b) => parseInt(a.year) - parseInt(b.year));

    return (
        <section
            id="projects"
            style={{ position: 'relative', padding: '120px 24px', maxWidth: '1100px', margin: '0 auto' }}
        >
            {/* Background glow */}
            <div style={{
                pointerEvents: 'none', position: 'absolute', top: '8%', left: '-100px',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
                filter: 'blur(60px)',
            }} />

            {/* Section label */}
            <motion.div {...fadeUp(0)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#06b6d4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    04 / projects
                </span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
            </motion.div>

            {/* Heading */}
            <motion.h2 {...fadeUp(0.1)} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1,
                letterSpacing: '-0.02em', marginBottom: '12px',
            }}>
                Featured{' '}
                <span style={{ background: 'linear-gradient(120deg, #06b6d4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Work
                </span>
            </motion.h2>
            <motion.p {...fadeUp(0.15)} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#475569', marginBottom: '48px', maxWidth: '700px', lineHeight: 1.5 }}>
                A selection of projects spanning full-stack, data science, AI, and cloud engineering.{' '}
                <span style={{ color: '#06b6d4', display: 'block', marginTop: '6px', fontSize: '0.85rem' }}>
                    Click on any project image to explore its source code repository or live interactive demo.
                </span>
            </motion.p>

            {/* Filter tabs */}
            <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                {filters.map(f => (
                    <FilterTab
                        key={f.id}
                        filter={f}
                        isActive={activeFilter === f.id}
                        onClick={() => handleFilterClick(f.id)}
                    />
                ))}
                <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem', color: '#334155',
                    display: 'flex', alignItems: 'center',
                    marginLeft: 'auto',
                }}>
                    {filtered.length}+ project{filtered.length !== 1 ? 's' : ''}
                </span>
            </motion.div>

            {/* Project cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', overflow: 'hidden' }}>
                <AnimatePresence mode="popLayout">
                    {filtered.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            color={project.color}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* ─────────────────────────── TABLEAU DASHBOARDS SECTION ─────────────────────────── */}
            <motion.div {...fadeUp(0.3)} style={{ marginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#f59e0b', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                        data visualization on tableau dashboards
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(245,158,11,0.4), transparent)' }} />
                </div>

                <h2 style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                    fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1,
                    letterSpacing: '-0.02em', marginBottom: '12px',
                }}>
                    Tableau{' '}
                    <span style={{ background: 'linear-gradient(120deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Dashboards
                    </span>
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#475569', marginBottom: '40px', maxWidth: '600px' }}>
                    Interactive business intelligence dashboards and data visualizations designed to uncover actionable insights.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {/* Replace these placeholders with your actual Tableau projects! */}
                    <TableauCard
                        title="Happiness Index Dashboard - 2015"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#f59e0b"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/HappinessIndex2015-DashBoard/DashBoard"
                    />
                    <TableauCard
                        title="Happiness Index Dashboard - 2016"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#ef4444"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/HappinessIndex2016-DashBoard/DashBoard"
                    />
                    <TableauCard
                        title="Happiness Index Dashboard - 2017"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#3b82f6"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/HappinessIndex2017-DashBoard/Dashboard"
                    />
                    <TableauCard
                        title="Happiness Index Dashboard - 2018"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#10b981"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/HappinessIndex2018-DashBoard/Dashboard"
                    />
                    <TableauCard
                        title="Happiness Index Dashboard - 2019"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#8b5cf6"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/HappinessIndex2019-DashBoard/Dashboard"
                    />
                    <TableauCard
                        title="World Cup Dashboard"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#ec4899"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/WorldCup-Dashboard_17709289223340/DashBoard"
                    />
                    <TableauCard
                        title="World Cup Matches Dashboard"
                        category="Data Analytics & Statistics"
                        date="2026"
                        color="#06b6d4"
                        link="https://public.tableau.com/app/profile/lakshya.saini3766/viz/WorldCupMatches-DashBoard/Dashboard"
                    />
                </div>
            </motion.div>
        </section>
    );
}