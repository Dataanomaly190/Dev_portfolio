import { useState } from 'react';
import { motion } from 'framer-motion';

// IDE / Editor
import { VscVscode } from 'react-icons/vsc';
import { SiIntellijidea, SiPycharm, SiJupyter, SiAnaconda } from 'react-icons/si';

// Version Control / Collab / Cloud
import { FaGitAlt, FaGithub, FaLinux, FaDocker, FaFigma, FaAws, FaPython } from 'react-icons/fa';

// DB / API / DevOps
import { SiPostman, SiMongodb, SiKubernetes, SiFramer, SiUbuntu, SiFedora, SiKalilinux } from 'react-icons/si';

// Generic / fallback
import { MdBuild, MdCloud, MdAccountTree, MdDraw, MdBarChart } from 'react-icons/md';
import { TbBrandOpenai } from 'react-icons/tb';
import { BsTerminalFill } from 'react-icons/bs';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

/* ─────────────────────────── SKILL CATEGORIES ─────────────────────────── */
const categories = [
  {
    id: 'languages', label: 'Languages', icon: '{ }', color: '#06b6d4',
    skills: [
      { name: 'JavaScript', level: 90 }, { name: 'TypeScript', level: 60 },
      { name: 'Python', level: 70 }, { name: 'Java', level: 50 },
      { name: 'C / C++', level: 80 }, { name: 'SQL', level: 50 },
      { name: 'Bash', level: 60 },
    ],
  },
  {
    id: 'frontend', label: 'Frontend', icon: '</ >', color: '#38bdf8',
    skills: [
      { name: 'React', level: 90 }, { name: 'Next.js', level: 80 },
      { name: 'Redux', level: 70 }, { name: 'Three.js', level: 60 },
      { name: 'Tailwind CSS', level: 80 }, { name: 'Bootstrap', level: 80 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    id: 'backend', label: 'Backend', icon: '⚙', color: '#a78bfa',
    skills: [
      { name: 'Node.js', level: 80 }, { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 60 }, { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 60 }, { name: 'Redis', level: 50 },
      { name: 'Socket.io', level: 60 },
    ],
  },
  {
    id: 'data', label: 'Data & ML', icon: '∑', color: '#34d399',
    skills: [
      { name: 'Pandas', level: 70 }, { name: 'NumPy', level: 70 },
      { name: 'Scikit-learn', level: 50 }, { name: 'Matplotlib', level: 60 },
      { name: 'Streamlit', level: 80 }, { name: 'Seaborn', level: 30 },
      { name: 'Tableau', level: 80 },
    ],
  },
  {
    id: 'ai', label: 'AI / CV', icon: '⬡', color: '#f472b6',
    skills: [
      { name: 'TensorFlow', level: 70 }, { name: 'Keras', level: 20 },
      { name: 'OpenCV', level: 40 }, { name: 'DeepFace', level: 40 },
      { name: 'LangChain', level: 30 }, { name: 'LangGraph', level: 30 },
      { name: 'Ollama', level: 60 },
    ],
  },
  {
    id: 'cloud', label: 'Cloud & DevOps', icon: '☁', color: '#fbbf24',
    skills: [
      { name: 'AWS (EC2/S3/IAM)', level: 80 }, { name: 'Docker', level: 70 },
      { name: 'Kubernetes', level: 70 }, { name: 'CI/CD Pipelines', level: 70 },
      { name: 'CodeDeploy/Build', level: 70 }, { name: 'Linux / Ubuntu', level: 80 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
];

/* ─────────────────────────── SDE TOOLS ─────────────────────────── */
const tools = [
  // Row 1 — Editors / IDEs
  { name: 'VS Code', Icon: VscVscode, color: '#007acc' },
  { name: 'Cursor', Icon: BsTerminalFill, color: '#9b59b6' },
  { name: 'IntelliJ IDEA', Icon: SiIntellijidea, color: '#fe315d' },
  { name: 'PyCharm', Icon: SiPycharm, color: '#21d789' },
  { name: 'Spyder', Icon: FaPython, color: '#ff4444' },
  // Row 2 — Notebooks / Env
  { name: 'Jupyter', Icon: SiJupyter, color: '#f37626' },
  { name: 'Anaconda', Icon: SiAnaconda, color: '#44a833' },
  { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#4db33d' },
  { name: 'Ollama', Icon: TbBrandOpenai, color: '#e2e8f0' },
  // Row 3 — VCS / DevOps
  { name: 'Git', Icon: FaGitAlt, color: '#f05032' },
  { name: 'GitHub', Icon: FaGithub, color: '#e2e8f0' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ed' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326ce5' },
  { name: 'AWS', Icon: FaAws, color: '#ff9900' },
  // Row 4 — OS
  { name: 'Linux', Icon: FaLinux, color: '#fcc624' },
  { name: 'Ubuntu', Icon: SiUbuntu, color: '#e95420' },
  { name: 'Fedora', Icon: SiFedora, color: '#3c6eb4' },
  { name: 'Kali Linux', Icon: SiKalilinux, color: '#557c94' },
  { name: 'Google Stitch', Icon: MdCloud, color: '#4285f4' },
  // Row 5 — Design / Viz / AI
  { name: 'Figma', Icon: FaFigma, color: '#f24e1e' },
  { name: 'Framer', Icon: SiFramer, color: '#0055ff' },
  { name: 'Tableau', Icon: MdBarChart, color: '#1f77b4' },
  { name: 'LangChain', Icon: MdAccountTree, color: '#1c7a5a' },
  { name: 'Dia / Draw', Icon: MdDraw, color: '#5e81ac' },
];

/* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */
function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '14px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
          {name}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color, opacity: 0.8 }}>
          {level}%
        </span>
      </div>
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.1, ease: 'easeOut' }}
          style={{
            height: '100%', borderRadius: '999px',
            background: `linear-gradient(to right, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}55`,
          }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ cat, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 18px', borderRadius: '10px',
        border: `1px solid ${isActive ? cat.color + '66' : 'rgba(255,255,255,0.07)'}`,
        background: isActive ? `${cat.color}15` : 'rgba(255,255,255,0.02)',
        cursor: 'pointer', transition: 'border-color 0.25s, background 0.25s',
        boxShadow: isActive ? `0 0 16px ${cat.color}33` : 'none',
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: cat.color }}>
        {cat.icon}
      </span>
      <span style={{
        fontFamily: "'Inter', sans-serif", fontSize: '0.82rem',
        fontWeight: isActive ? 600 : 400,
        color: isActive ? '#f1f5f9' : '#64748b',
        transition: 'color 0.25s', whiteSpace: 'nowrap',
      }}>
        {cat.label}
      </span>
    </motion.button>
  );
}

function ToolCard({ tool, delay }) {
  const { Icon, name, color } = tool;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, scale: 1.04 }}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '12px',
        padding: '24px 12px',
        borderRadius: '14px',
        border: `1px solid rgba(255,255,255,0.07)`,
        background: 'rgba(255,255,255,0.02)',
        cursor: 'default',
        transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
        aspectRatio: '1 / 1',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color + '55';
        e.currentTarget.style.boxShadow = `0 0 20px ${color}22`;
        e.currentTarget.style.background = `${color}0d`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
      }}
    >
      <Icon style={{ fontSize: '2.4rem', color, flexShrink: 0, filter: `drop-shadow(0 0 8px ${color}55)` }} />
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 500,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 1.3,
        letterSpacing: '0.01em',
      }}>
        {name}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────── MAIN ─────────────────────────── */
export default function Skills() {
  const [activeId, setActiveId] = useState('languages');
  const activeCat = categories.find((c) => c.id === activeId);

  return (
    <section
      id="skills"
      style={{ position: 'relative', padding: '120px 24px', maxWidth: '1100px', margin: '0 auto' }}
    >
      {/* Background glow */}
      <div style={{
        pointerEvents: 'none', position: 'absolute', top: '5%', left: '-80px',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Section label */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#06b6d4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          02 / skills
        </span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
      </motion.div>

      {/* Heading */}
      <motion.h2 {...fadeUp(0.1)} style={{
        fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1,
        letterSpacing: '-0.02em', marginBottom: '12px',
      }}>
        Tech{' '}
        <span style={{ background: 'linear-gradient(120deg, #06b6d4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Stack
        </span>
      </motion.h2>
      <motion.p {...fadeUp(0.15)} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#475569', marginBottom: '48px', maxWidth: '500px' }}>
        Technologies and tools I use to build, analyse, and ship production systems.
      </motion.p>

      {/* Category tabs */}
      <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} isActive={activeId === cat.id} onClick={() => setActiveId(cat.id)} />
        ))}
      </motion.div>

      {/* Skill bars panel */}
      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          padding: '32px', borderRadius: '16px',
          border: `1px solid ${activeCat.color}25`,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          boxShadow: `0 0 40px ${activeCat.color}12`,
          marginBottom: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', color: activeCat.color, filter: `drop-shadow(0 0 6px ${activeCat.color})` }}>
            {activeCat.icon}
          </span>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>
            {activeCat.label}
          </h3>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: activeCat.color,
            background: `${activeCat.color}18`, padding: '2px 10px', borderRadius: '999px',
            border: `1px solid ${activeCat.color}33`, marginLeft: 'auto',
          }}>
            {activeCat.skills.length} skills
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0 48px' }}>
          {activeCat.skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} color={activeCat.color} delay={i * 0.06} />
          ))}
        </div>
      </motion.div>

      {/* ── SDE Toolbox ── */}
      <motion.div {...fadeUp(0.25)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#475569', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            SDE Toolbox
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#334155' }}>
            {tools.length} tools
          </span>
        </div>

        {/* 5-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '14px',
        }}>
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} delay={i * 0.04} />
          ))}
        </div>
      </motion.div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #skills .tool-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #skills .tool-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
