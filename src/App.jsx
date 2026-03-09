import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle, 
  MessageSquare, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Workflow, 
  ShieldCheck, 
  Zap, 
  Award,
  Download,
  FileText
} from 'lucide-react';

const profile = Object.freeze({
  name: "Jennifer McKinley",
  title: "Multimodal AI Engineer & SDET Architect",
  summary: "Senior SDET with 10+ years of experience bridging DevOps, QA, and Multimodal AI. Currently architecting AI List Assist, an agentic inventory engine utilizing Gemini 1.5 Pro and Late Fusion architecture to transform unstructured visual data into production-grade e-commerce assets.",
  contact: Object.freeze({
    email: "jen.mckinley@gmail.com",
    linkedin: "https://linkedin.com/in/sqatester",
    portfolio: "https://jenr8ed.github.io/sqatester",
    github: "https://github.com/jenr8ed"
  })
});

const agenticFeatures = Object.freeze([
  Object.freeze({
    title: "Conversational Orchestration",
    description: "Implemented a state-machine based 'Agent' that identifies missing metadata and autonomously prompts users to resolve ambiguities.",
    tech: Object.freeze(["Python", "FastAPI", "Gemini 1.5"]),
    icon: <MessageSquare className="w-5 h-5" />
  }),
  Object.freeze({
    title: "Late Fusion Vision Pipeline",
    description: "Architected a multi-stage detection system combining Google Cloud Vision OCR with Gemini vision encoders for high-fidelity attribute extraction.",
    tech: Object.freeze(["Google Cloud Vision", "Multimodal AI"]),
    icon: <Layers className="w-5 h-5" />
  }),
  Object.freeze({
    title: "Production-Grade MLOps",
    description: "Deployed inference containers with 99.9% uptime using Docker and automated CI/CD for model deployment and validation.",
    tech: Object.freeze(["Docker", "Jenkins", "Pytest"]),
    icon: <Cpu className="w-5 h-5" />
  })
]);

const experience = [
  {
    company: "AI List Assist (Personal Project)",
    role: "Lead AI Engineer & Architect",
    period: "Nov 2025 - Present",
    bullets: [
      "Built a multimodal inventory intelligence engine using Gemini 1.5 Pro for automated marketplace listing generation.",
      "Developed a Decision Gate logic system to autonomously determine item profitability and listing recommendations.",
      "Integrated eBay Sell APIs (Inventory & Offer) for one-click agentic publishing."
    ]
  },
  {
    company: "Certent Inc.",
    role: "Lead QA Automation Engineer",
    period: "Sep 2013 - Sep 2016",
    bullets: [
      "Architected scalable Selenium-based automation frameworks using JavaScript, reducing regression cycles by 60%.",
      "Led a horizontal team of 6 engineers, establishing quality-driven roadmaps for enterprise financial SaaS.",
      "Implemented TeamCity CI/CD pipelines for 'test-early' validation of 12+ monthly releases."
    ]
  },
  {
    company: "Intel Corp",
    role: "Tester I - Product Validation",
    period: "Nov 2021 - Feb 2022",
    bullets: [
      "Executed WHQL/HLK hardware validation protocols for graphics drivers with 100% Microsoft compliance.",
      "Automated cross-platform test execution across CPU/GPU/NPU architectures using Python scripts.",
      "Identified and triaged over 100 critical firmware integration bugs before production release."
    ]
  }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('agentic');

  const certifications = [
    {
      name: \"Google IT Automation with Python Professional Certificate\",
      issuer: \"Google / Coursera\",
      icon: <CheckCircle className=\"w-5 h-5 text-green-500\" />
    },
    {
      name: \"Programming in HTML5 with JavaScript and CSS3\",
      issuer: \"Microsoft Certified Professional\",
      icon: <CheckCircle className=\"w-5 h-5 text-green-500\" />
    }
  ];

  return (
    <div className=\"min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8\">
      <div className=\"max-w-4xl mx-auto space-y-8\">
        
        {/* Header Section */}
        <header className=\"bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10\">
          <div className=\"flex flex-col md:flex-row justify-between items-start md:items-center gap-6\">
            <div>
              <h1 className=\"text-3xl md:text-4xl font-extrabold tracking-tight\">{profile.name}</h1>
              <div className=\"flex items-center gap-2 mt-2 text-blue-600 font-medium\">
                <Cpu size={20} />
                <span>{profile.title}</span>
              </div>
              <div className=\"flex flex-wrap gap-4 mt-4 text-slate-500\">
                <a href={profile.contact.linkedin} className=\"flex items-center gap-1 hover:text-blue-600 transition-colors\">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={profile.contact.github} className=\"flex items-center gap-1 hover:text-blue-600 transition-colors\">
                  <Github size={18} /> GitHub
                </a>
                <a href={`mailto:${profile.contact.email}`} className=\"flex items-center gap-1 hover:text-blue-600 transition-colors\">
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>
            <div className=\"flex flex-col gap-3 w-full md:w-auto\">
              <a 
                href={profile.contact.resume}
                className=\"bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200\"
              >
                <Download size={18} /> Download Resume
              </a>
              <div className=\"bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold border border-emerald-100 flex items-center justify-center gap-2\">
                <div className=\"w-2 h-2 bg-emerald-500 rounded-full animate-pulse\"></div>
                Open to Contract AI/ML Engineering
              </div>
            </div>
          </div>
        </header>

        {/* TL;DR Summary */}
        <section className=\"bg-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-100\">
          <div className=\"flex items-start gap-4\">
            <Layers className=\"w-10 h-10 mt-1 opacity-80\" />
            <p className=\"text-lg md:text-xl leading-relaxed font-medium\">
              {profile.summary}
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <nav className=\"bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex gap-1\">
          <button 
            onClick={() => setActiveTab('agentic')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'agentic' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Zap size={18} /> Agentic AI Prototypes
          </button>
          <button 
            onClick={() => setActiveTab('experience')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'experience' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <ShieldCheck size={18} /> SDET & DevOps Foundation
          </button>
          <button 
            onClick={() => setActiveTab('certifications')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'certifications' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Award size={18} /> Certifications
          </button>
        </nav>

        {/* Content Area */}
        <main className=\"animate-in fade-in duration-500\">
          {activeTab === 'agentic' ? (
            <div className=\"space-y-6\">
              <div className=\"grid md:grid-cols-2 gap-6\">
                {agenticFeatures.map((f, i) => (
                  <div key={i} className=\"bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group\">
                    <div className=\"bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors\">
                      {f.icon}
                    </div>
                    <div className=\"flex justify-between items-start\">
                      <h3 className=\"text-xl font-bold\">{f.title}</h3>
                      <a href={f.repo} className=\"text-slate-400 hover:text-blue-600\">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p className=\"text-slate-600 mt-2 mb-4 leading-relaxed\">{f.description}</p>
                    <div className=\"flex flex-wrap gap-2\">
                      {f.tech.map(t => (
                        <span key={t} className=\"text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded\">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className=\"bg-slate-900 rounded-2xl p-6 text-emerald-400 font-mono text-sm overflow-hidden border border-slate-800 shadow-2xl\">
                <div className=\"flex items-center gap-2 mb-4 border-b border-slate-800 pb-2 text-slate-500\">
                  <Terminal size={16} />
                  <span>Live Agent Log: ConversationOrchestrator</span>
                </div>
                <div className=\"space-y-1\">
                  <p className=\"text-slate-500\">[{new Date().toISOString()}] INFO: Initializing ItemValuation agent...</p>
                  <p><span className=\"text-emerald-500\">DETECTED:</span> Sony WH-1000XM4 (Confidence: 0.94)</p>
                  <p><span className=\"text-blue-400\">ANALYZING:</span> 90-day sold pricing data found.</p>
                  <p className=\"text-amber-400 animate-pulse\">AGENTIC QUERY: \"Is original packaging included?\"</p>
                  <p className=\"text-slate-500\">WAITING: User input required to finalize ListingDraft...</p>
                </div>
              </div>
            </div>
          ) : activeTab === 'experience' ? (
            <div className=\"space-y-6\">
              {experience.map((exp, i) => (
                <div key={i} className=\"bg-white p-8 rounded-2xl border border-slate-100 shadow-sm\">
                  <div className=\"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2\">
                    <div>
                      <h3 className=\"text-2xl font-bold\">{exp.role}</h3>
                      <p className=\"text-blue-600 font-bold text-lg\">{exp.company}</p>
                    </div>
                    <span className=\"bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-sm font-bold\">
                      {exp.period}
                    </span>
                  </div>
                  <ul className=\"space-y-4\">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className=\"flex items-start gap-3 text-slate-600 leading-relaxed\">
                        <div className=\"w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0\"></div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className=\"bg-white p-8 rounded-2xl border border-slate-100 shadow-sm grid md:grid-cols-2 gap-6\">
              {certifications.map((cert, i) => (
                <div key={i} className=\"flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100\">
                  <div className=\"bg-white p-3 rounded-lg shadow-sm\">
                    {cert.icon}
                  </div>
                  <div>
                    <p className=\"font-bold leading-tight\">{cert.name}</p>
                    <p className=\"text-slate-500 text-sm mt-1 font-medium\">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        <footer className=\"text-center py-10 border-t border-slate-200\">
          <p className=\"text-slate-400 text-sm font-medium\">
            © 2026 Jennifer McKinley. Based in Oakland, CA.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
