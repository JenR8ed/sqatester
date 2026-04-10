import React, { useState } from 'react';
import { Cpu, Linkedin, Github, Mail, Workflow, Zap, ShieldCheck, Award, Terminal, CheckCircle } from 'lucide-react';

const profile = Object.freeze({
  name: "Jennifer McKinley",
  title: "Multimodal AI Engineer & SDET Architect",
  summary: "Senior SDET with 10+ years of experience bridging DevOps, QA, and Multimodal AI. Currently architecting AI List Assist, an agentic inventory engine utilizing Gemini 1.5 Pro and Late Fusion architecture to transform unstructured visual data into production-grade e-commerce assets.",
  contact: Object.freeze({
    email: "jen.mckinley@gmail.com",
        linkedin: "https://linkedin.com/in/jenr8ed-ai",
    portfolio: "https://jenr8ed.github.io/sqatester",
    github: "https://github.com/jenr8ed"
  })
});

const agenticFeatures = Object.freeze([
  Object.freeze({
    title: "Conversational Orchestration",
    description: "Implemented a state-machine based 'Agent' that identifies missing metadata and autonomously prompts users to resolve ambiguities.",
    tech: Object.freeze(["Python", "FastAPI", "Gemini 1.5"])
  }),
  Object.freeze({
    title: "Late Fusion Vision Pipeline",
    description: "Architected a multi-stage detection system combining Google Cloud Vision OCR with Gemini vision encoders for high-fidelity attribute extraction.",
    tech: Object.freeze(["Google Cloud Vision", "Multimodal AI"])
  }),
  Object.freeze({
    title: "Production-Grade MLOps",
    description: "Deployed inference containers with 99.9% uptime using Docker and automated CI/CD for model deployment and validation.",
    tech: Object.freeze(["Docker", "Jenkins", "Pytest"])
  })
]);

const experience = Object.freeze([
  Object.freeze({
    company: "AI List Assist (Personal Project)",
    role: "Lead AI Engineer & Architect",
    period: "Nov 2025 - Present",
    bullets: Object.freeze([
      "Built a multimodal inventory intelligence engine using Gemini 1.5 Pro for automated marketplace listing generation.",
      "Developed a Decision Gate logic system to autonomously determine item profitability and listing recommendations.",
      "Integrated eBay Sell APIs (Inventory & Offer) for one-click agentic publishing."
    ])
  }),
  Object.freeze({
    company: "Certent Inc.",
    role: "Lead QA Automation Engineer",
    period: "Sep 2013 - Sep 2016",
    bullets: Object.freeze([
      "Architected scalable Selenium-based automation frameworks using JavaScript, reducing regression cycles by 60%.",
      "Led a horizontal team of 6 engineers, establishing quality-driven roadmaps for enterprise financial SaaS.",
      "Implemented TeamCity CI/CD pipelines for 'test-early' validation of 12+ monthly releases."
    ])
  }),
  Object.freeze({
    company: "Intel Corp",
    role: "Tester I - Product Validation",
    period: "Nov 2021 - Feb 2022",
    bullets: Object.freeze([
      "Executed WHQL/HLK hardware validation protocols for graphics drivers with 100% Microsoft compliance.",
      "Automated cross-platform test execution across CPU/GPU/NPU architectures using Python scripts.",
      "Identified and triaged over 100 critical firmware integration bugs before production release."
    ])
  })
]);

const certifications = Object.freeze([
  Object.freeze({
    name: "Google IT Automation with Python Professional Certificate",
    issuer: "Google / Coursera"
  }),
  Object.freeze({
    name: "Programming in HTML5 with JavaScript and CSS3",
    issuer: "Microsoft Certified Professional"
  })
]);

const App = () => {
  const [activeTab, setActiveTab] = useState('agentic');


  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-4 md:p-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-600/10 rounded-full mix-blend-screen filter blur-[128px] opacity-70 animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Header Section */}
        <header className="bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">{profile.name}</h1>
            <p className="text-xl font-medium text-rose-500 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> {profile.title}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={profile.contact.linkedin} className="flex items-center gap-1 text-sm text-zinc-400 hover:text-rose-500 transition"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              <a href={profile.contact.github} className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition"><Github className="w-4 h-4"/> GitHub</a>
              <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-1 text-sm text-zinc-400 hover:text-rose-500 transition"><Mail className="w-4 h-4"/> Email</a>
            </div>
          </div>
          <div className="px-4 py-2 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-sm font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.7)]"></span>
            Open to Contract AI/ML Engineering
          </div>
        </header>

        {/* TL;DR Summary */}
        <section className="bg-gradient-to-r from-rose-900/40 to-zinc-900/60 backdrop-blur-md border border-rose-500/20 text-white rounded-2xl p-8 shadow-2xl relative z-10">
          <div className="flex items-start gap-4">
            <Workflow className="w-8 h-8 flex-shrink-0 text-rose-400" />
            <div>
              <p className="text-lg leading-relaxed font-medium text-zinc-200">
                {profile.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="flex bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/5 shadow-inner relative z-10">
          <button 
            onClick={() => setActiveTab('agentic')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'agentic' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
          >
            <Zap className="w-4 h-4" /> Agentic AI Prototypes
          </button>
          <button 
            onClick={() => setActiveTab('experience')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'experience' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
          >
            <ShieldCheck className="w-4 h-4" /> SDET & DevOps Foundation
          </button>
          <button 
            onClick={() => setActiveTab('certifications')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'certifications' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
          >
            <Award className="w-4 h-4" /> Certifications
          </button>
        </div>

        {/* Content Area */}
        <main className="transition-all duration-300">
          {activeTab === 'agentic' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {agenticFeatures.map((f, i) => (
                  <div key={i} className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:border-rose-500/50 hover:bg-white/5 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-rose-500/10 text-rose-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(225,29,72,0.6)] transition-all duration-300">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-zinc-100 mb-2">{f.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-black/50 border border-white/5 text-zinc-300 rounded text-[10px] font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 text-zinc-300 rounded-2xl p-8 overflow-hidden relative shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-100">
                    <Terminal className="w-5 h-5 text-rose-500 drop-shadow-[0_0_5px_rgba(244,63,94,0.8)]" /> Live Agent Log: ConversationOrchestrator
                  </h3>
                  <div className="font-mono text-sm space-y-2 bg-black/80 p-4 rounded-lg border border-white/5 shadow-inner">
                    <p className="text-zinc-400">[{new Date().toISOString()}] INFO: Initializing ItemValuation agent...</p>
                    <p className="text-rose-400">DETECTED: Sony WH-1000XM4 (Confidence: 0.94)</p>
                    <p className="text-rose-400">ANALYZING: 90-day sold pricing data found.</p>
                    <p className="text-rose-300">AGENTIC QUERY: "Is original packaging included?"</p>
                    <p className="text-zinc-400">WAITING: User input required to finalize ListingDraft...</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Workflow className="w-48 h-48 text-rose-500/20" />
                </div>
              </div>
            </div>
          ) : activeTab === 'experience' ? (
          <>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-lg hover:bg-white/5 hover:border-rose-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                      <p className="text-rose-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm font-bold text-zinc-400 bg-black/50 border border-white/5 px-3 py-1 rounded-full h-fit">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-zinc-400 leading-relaxed text-sm">
                        <CheckCircle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0 drop-shadow-[0_0_3px_rgba(244,63,94,0.5)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-10 pb-20 border-t border-primary/10">
              <span className="text-primary/50">visitor@jenr8ed:~$</span>
              <span className="cursor animate-blink"></span>
            </div>
                      </>
          ) : (
            <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
              <iframe
                src="/sqatester/certifications.html"
                title="Certifications"
                className="w-full"
                sandbox="allow-scripts"
                style={{ height: '80vh', border: 'none' }}
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-zinc-600 text-sm border-t border-white/10 relative z-10">
          <p>2026 Jennifer McKinley. Generated via your preferred agentic assistant.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
