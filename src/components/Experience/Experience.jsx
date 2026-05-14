import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const experiences = [
  {
    id: 'sde',
    year: '2024 – 2025',
    role: 'Software Developer',
    type: 'Project-based Frontend & Backend Development',
    company: 'Independent / Remote',
    period: 'Jul 2024 – Dec 2025',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.2)',
    icon: '⬡',
    tag: 'Full-Stack',
    description:
      'Contributed to multiple software projects involving both frontend interfaces and backend modules depending on system requirements and project scope.',
    contributions: [
      'Developed responsive UI components using React, Next.js, Tailwind CSS, Bootstrap, and Redux.',
      'Implemented backend services and REST APIs using Node.js and Express.',
      'Integrated external services and handled parallel API requests and structured data workflows.',
      'Improved code maintainability through refactoring, modular architecture, and cleaner logic structures.',
      'Assisted in debugging, feature implementation, and performance optimization across application modules.',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Tailwind CSS', 'Redux', 'Git'],
  },
  {
    id: 'devops',
    year: '2023',
    role: 'DevOps Intern',
    type: 'Cloud & Deployment Engineering',
    company: 'Learn and Build',
    period: 'Jul 2023 – Aug 2023',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.2)',
    icon: '☁',
    tag: 'Cloud & DevOps',
    description:
      'Worked on cloud infrastructure and automated deployment pipelines for web applications.',
    contributions: [
      'Built CI/CD pipelines using AWS DevOps services.',
      'Deployed applications using AWS EC2, S3, IAM, CodeCommit, CodeBuild, and CodeDeploy.',
      'Containerized applications using Docker and explored orchestration with Kubernetes.',
      'Hosted a web application on a cloud-based infrastructure environment.',
    ],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'CI/CD'],
  },
  {
    id: 'data',
    year: '2022',
    role: 'Data Engineering Intern',
    type: 'Data Pipelines & Analytics',
    company: 'Learn and Build',
    period: 'Jul 2022 – Aug 2022',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.2)',
    icon: '∑',
    tag: 'Data & ML',
    description:
      "Worked on data processing pipelines and analytical workflows using Python's data science ecosystem.",
    contributions: [
      'Analyzed structured datasets using Pandas and NumPy in Jupyter Notebook.',
      'Created statistical visualizations using Matplotlib.',
      'Developed an interactive analytical dashboard using Streamlit to present dataset insights and visual reports.',
      'Organized datasets through structured preprocessing and exploratory analysis techniques.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Jupyter Notebook'],
  },
];

function ExperienceCard({ exp, index, isActive, onClick }) {
  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.12)}
      style={{ display: 'flex', gap: '0', position: 'relative' }}
    >
      {/* ── Timeline spine ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '28px', flexShrink: 0 }}>
        {/* Year badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: exp.color,
            background: `${exp.color}15`,
            border: `1px solid ${exp.color}44`,
            padding: '4px 10px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
            letterSpacing: '0.04em',
            marginBottom: '12px',
          }}
        >
          {exp.year}
        </motion.div>

        {/* Dot */}
        <motion.div
          animate={isActive ? { scale: [1, 1.3, 1], boxShadow: [`0 0 0px ${exp.color}`, `0 0 16px ${exp.color}`, `0 0 6px ${exp.color}`] } : {}}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '14px', height: '14px', borderRadius: '50%',
            background: isActive ? exp.color : 'transparent',
            border: `2px solid ${isActive ? exp.color : '#334155'}`,
            boxShadow: isActive ? `0 0 10px ${exp.color}` : 'none',
            transition: 'border-color 0.3s, background 0.3s',
            flexShrink: 0,
            zIndex: 1,
          }}
        />

        {/* Vertical line (not on last item) */}
        {index < experiences.length - 1 && (
          <div style={{
            width: '2px',
            flex: 1,
            minHeight: '60px',
            background: `linear-gradient(to bottom, ${exp.color}44, rgba(255,255,255,0.04))`,
            marginTop: '8px',
          }} />
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        onClick={onClick}
        whileHover={{ y: -2 }}
        style={{
          flex: 1,
          marginBottom: index < experiences.length - 1 ? '32px' : 0,
          padding: '28px 32px',
          borderRadius: '16px',
          border: `1px solid ${isActive ? exp.color + '55' : 'rgba(255,255,255,0.07)'}`,
          background: isActive
            ? `linear-gradient(135deg, ${exp.color}0d 0%, rgba(255,255,255,0.02) 100%)`
            : 'rgba(255,255,255,0.02)',
          boxShadow: isActive ? `0 0 32px ${exp.glow}` : 'none',
          cursor: 'pointer',
          transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
        }}
      >
        {/* Card top row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '10px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                color: exp.color,
                background: `${exp.color}18`,
                padding: '2px 10px',
                borderRadius: '999px',
                border: `1px solid ${exp.color}33`,
              }}>
                {exp.tag}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#475569' }}>
                {exp.period}
              </span>
            </div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#f1f5f9',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              {exp.role}
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              color: exp.color,
              margin: '4px 0 0',
              opacity: 0.8,
            }}>
              {exp.type} · {exp.company}
            </p>
          </div>

          {/* Expand toggle */}
          <motion.div
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              width: '28px', height: '28px', borderRadius: '8px',
              border: `1px solid ${isActive ? exp.color + '55' : 'rgba(255,255,255,0.1)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: isActive ? exp.color : '#475569',
              fontSize: '1.1rem', flexShrink: 0, transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            +
          </motion.div>
        </div>

        {/* Description (always visible) */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.85rem',
          color: '#64748b',
          lineHeight: 1.75,
          margin: '12px 0 0',
        }}>
          {exp.description}
        </p>

        {/* Expandable section */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '20px' }}>
                {/* Divider */}
                <div style={{ height: '1px', background: `linear-gradient(to right, ${exp.color}33, transparent)`, marginBottom: '20px' }} />

                {/* Key Contributions */}
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem',
                  color: '#475569',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  Key Contributions
                </p>
                <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.contributions.map((c, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '10px',
                        listStyle: 'none', fontFamily: "'Inter', sans-serif",
                        fontSize: '0.83rem', color: '#94a3b8', lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: exp.color, fontSize: '0.4rem', marginTop: '7px', flexShrink: 0 }}>●</span>
                      {c}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tech.map((t) => (
                    <span key={t} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem',
                      color: exp.color,
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}30`,
                      padding: '3px 12px',
                      borderRadius: '999px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState('sde');
  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section
      id="experience"
      style={{ position: 'relative', padding: '120px 24px', maxWidth: '1100px', margin: '0 auto' }}
    >
      {/* Background glow */}
      <div style={{
        pointerEvents: 'none', position: 'absolute', top: '15%', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Section label */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#06b6d4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          03 / experience
        </span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
      </motion.div>

      {/* Heading */}
      <motion.h2 {...fadeUp(0.1)} style={{
        fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1,
        letterSpacing: '-0.02em', marginBottom: '12px',
      }}>
        Work{' '}
        <span style={{ background: 'linear-gradient(120deg, #06b6d4, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Experience
        </span>
      </motion.h2>
      <motion.p {...fadeUp(0.15)} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#475569', marginBottom: '64px', maxWidth: '500px' }}>
        Hands-on roles spanning full-stack development, cloud infrastructure, and data engineering.
      </motion.p>

      {/* Timeline */}
      <div>
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            index={i}
            isActive={activeId === exp.id}
            onClick={() => toggle(exp.id)}
          />
        ))}
      </div>
    </section>
  );
}
