import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

const highlights = [
  {
    id: 'fullstack',
    icon: '⬡',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.25)',
    title: 'Full-Stack Development',
    tag: 'MERN · REST · React',
    bullets: [
      'MERN stack architecture and REST API systems',
      'Interactive frontends using React and Next.js',
      'State management with Redux and scalable component design',
    ],
  },
  {
    id: 'perf',
    icon: '◈',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.25)',
    title: 'Performance Engineering',
    tag: 'Optimization · Latency · Scale',
    bullets: [
      'Code refactoring for maintainability and modularity',
      'Algorithmic complexity reduction and query optimization',
      'Parallel API orchestration and efficient data handling',
    ],
  },
  {
    id: 'data',
    icon: '◉',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.25)',
    title: 'Data & Machine Learning',
    tag: 'Python · Scikit-learn · Streamlit',
    bullets: [
      'Data analysis pipelines using Pandas and NumPy',
      'Statistical modeling and predictive analysis with Scikit-learn',
      'Interactive dashboards using Streamlit and visualization libs',
    ],
  },
  {
    id: 'ai',
    icon: '⬢',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.25)',
    title: 'AI & Computer Vision',
    tag: 'TensorFlow · OpenCV · DeepFace',
    bullets: [
      'Facial recognition systems using OpenCV and DeepFace',
      'AI agents with local LLM integration',
      'Model experimentation using TensorFlow and Keras',
    ],
  },
  {
    id: 'cloud',
    icon: '⬟',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.25)',
    title: 'Cloud & DevOps',
    tag: 'AWS · Docker · Kubernetes',
    bullets: [
      'CI/CD pipelines using the AWS DevOps stack',
      'Infrastructure via EC2, S3, IAM, CodeCommit, CodeBuild, CodeDeploy',
      'Containerization with Docker and orchestration via Kubernetes',
    ],
  },
];

const techStack = [
  { label: 'React', color: '#61dafb' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'Node.js', color: '#6cc24a' },
  { label: 'MongoDB', color: '#4db33d' },
  { label: 'Python', color: '#f7cc42' },
  { label: 'TensorFlow', color: '#ff8c00' },
  { label: 'AWS', color: '#ff9900' },
  { label: 'Docker', color: '#2496ed' },
];

function HighlightCard({ item, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      style={{
        border: `1px solid ${isOpen ? item.color + '55' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '12px',
        background: isOpen
          ? 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)'
          : 'rgba(255,255,255,0.02)',
        boxShadow: isOpen ? `0 0 24px ${item.glow}` : 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Card header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px' }}>
        <span
          style={{
            fontSize: '1.15rem',
            color: item.color,
            lineHeight: 1,
            filter: isOpen ? `drop-shadow(0 0 6px ${item.color})` : 'none',
            transition: 'filter 0.3s',
          }}
        >
          {item.icon}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            margin: 0,
            fontSize: '0.88rem',
            fontWeight: 600,
            color: isOpen ? '#f1f5f9' : '#cbd5e1',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.01em',
            transition: 'color 0.3s',
          }}>
            {item.title}
          </p>
          <p style={{
            margin: '2px 0 0',
            fontSize: '0.7rem',
            color: item.color,
            fontFamily: "'JetBrains Mono', monospace",
            opacity: 0.75,
          }}>
            {item.tag}
          </p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: '#64748b', fontSize: '1.1rem', userSelect: 'none' }}
        >
          +
        </motion.span>
      </div>

      {/* Expandable bullets */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <ul style={{ margin: 0, padding: '0 18px 16px 44px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.bullets.map((b, i) => (
                <li key={i} style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  fontFamily: "'Inter', sans-serif",
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <span style={{ color: item.color, marginTop: '5px', fontSize: '0.45rem', flexShrink: 0 }}>●</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function About() {
  const [openId, setOpenId] = useState('fullstack');
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="about"
      style={{ position: 'relative', padding: '120px 24px', maxWidth: '1100px', margin: '0 auto' }}
    >
      {/* Background glow accent */}
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: '10%',
        right: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Section label */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.72rem',
          color: '#06b6d4',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}>
          01 / about
        </span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
      </motion.div>

      {/* Two-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: '64px',
        alignItems: 'start',
      }} className="about-grid">

        {/* ── LEFT: Bio ── */}
        <div>
          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            lineHeight: 1.1,
            marginBottom: '32px',
            letterSpacing: '-0.02em',
          }}>
            About{' '}
            <span style={{
              background: 'linear-gradient(120deg, #06b6d4, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Me
            </span>
          </motion.h2>

          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              'Full-stack developer specializing in the MERN stack, building scalable web applications and performance-optimized systems. Experienced in developing responsive interfaces using React, Next.js, Tailwind CSS, Bootstrap, Redux, and Three.js, alongside backend services with Node.js, Express, MongoDB, and SQL.',
              'Engineering work focuses on code enhancement, algorithmic complexity reduction, API efficiency, and latency optimization — including systems that orchestrate parallel API calls and manage structured data workflows.',
              'Projects extend into data analytics and machine learning using Python, Pandas, NumPy, Matplotlib, Scikit-learn, and Streamlit, as well as AI and computer vision systems using TensorFlow, Keras, OpenCV, and DeepFace.',
              'Applications are deployed using AWS cloud infrastructure, Docker containers, Kubernetes orchestration, and CI/CD pipelines — ensuring scalable and maintainable delivery environments.',
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                lineHeight: 1.85,
                color: '#64748b',
                margin: 0,
              }}>
                {para}
              </p>
            ))}
          </motion.div>

          {/* Tech pills */}
          <motion.div {...fadeUp(0.35)} style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techStack.map((t) => (
              <span key={t.label} style={{
                padding: '5px 14px',
                borderRadius: '999px',
                border: `1px solid ${t.color}33`,
                background: `${t.color}0d`,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: t.color,
                letterSpacing: '0.04em',
              }}>
                {t.label}
              </span>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div {...fadeUp(0.45)} style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { value: '15+', label: 'Projects Shipped' },
              { value: '3+', label: 'Domains Covered' },
              { value: '100+', label: 'Problems Solved' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'rgba(255,255,255,0.02)', padding: '20px 16px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#06b6d4', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </p>
                <p style={{ margin: '4px 0 0', fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Engineering Highlights ── */}
        <div>
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '24px' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#475569',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              Engineering Highlights
            </p>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#e2e8f0',
              margin: '8px 0 0',
              letterSpacing: '-0.01em',
            }}>
              What I Build &amp; How
            </h3>
          </motion.div>

          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {highlights.map((item, i) => (
              <motion.div key={item.id} {...fadeUp(0.2 + i * 0.07)}>
                <HighlightCard
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}