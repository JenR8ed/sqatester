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
  Zap
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('agentic');

  const profile = {
    name: "Jennifer McKinley",
    title: "Multimodal AI Engineer & SDET Architect",
    summary: "Senior SDET with 10+ years of experience bridging DevOps, QA, and Multimodal AI. Currently architecting AI List Assist, an agentic inventory engine utilizing Gemini 1.5 Pro and Late Fusion architecture to transform unstructured visual data into production-grade e-commerce assets.",
    contact: {
      email: "jen.mckinley@gmail.com",
      linkedin: "https://linkedin.com/in/sqatester",
      portfolio: "https://jenr8ed.github.io/sqatester",
      github: "https://github.com/jenr8ed"
    }
  };

  const agenticFeatures = [
    {
      title: "Conversational Orchestration",
      description: "Implemented a state-machine based 'Agent' that identifies missing metadata and autonomously prompts users to resolve ambiguities.",
      tech: ["Python", "FastAPI", "Gemini 1.5"],
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "Late Fusion Vision Pipeline",
      description: "Architected a multi-stage detection system combining Google Cloud Vision OCR with Gemini vision encoders for high-fidelity attribute extraction.",
      tech: ["Google Cloud Vision", "Multimodal AI"],
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Production-Grade MLOps",
      description: "Deployed inference containers with 99.9% uptime using Docker and automated CI/CD for model deployment and validation.",
      tech: ["Docker", "Jenkins", "Pytest"],
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  const experience = [
    {
      company: "AI List Assist (Personal Project)",
      role: "Lead AI Engineer & Architect",
      period: "Nov 2025 – Present",
      bullets: [
        "Built a multimodal inventory intelligence engine using Gemini 1.5 Pro for automated marketplace listing generation.",
        "Developed a Decision Gate logic system to autonomously determine item profitability and listing recommendations.",
        "Integrated eBay Sell APIs (Inventory & Offer) for one-click agentic publishing."
      ]
    },
    {
      company: "Certent Inc.",
      role: "Lead QA Automation Engineer",
      period: "Sep 2013 – Sep 2016",
      bullets: [
        "Architected scalable Selenium-based automation frameworks using JavaScript, reducing regression cycles by 60%.",
        "Led a horizontal team of 6 engineers, establishing quality-driven roadmaps for enterprise financial SaaS.",
        "Implemented TeamCity CI/CD pipelines for 'test-early' validation of 12+ monthly releases."
      ]
    },
    {
      company: "Intel Corp",
      role: "Tester I – Product Validation",
      period: "Nov 2021 – Feb 2022",
      bullets: [
        "Executed WHQL/HLK hardware validation protocols for graphics drivers with 100% Microsoft compliance.",
        "Automated cross-platform test execution across CPU/GPU/NPU architectures using Python scripts.",
        "Identified and triaged over 100 critical firmware integration bugs before production release."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
            <p className="text-xl font-medium text-blue-600 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> {profile.title}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={profile.contact.linkedin} className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              <a href={profile.contact.github} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition"><Github className="w-4 h-4"/> GitHub</a>
              <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition"><Mail className="w-4 h-4"/> Email</a>
            </div>
          </div>
          <div className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-sm font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to Contract AI/ML Engineering
          </div>
        </header>

        {/* TL;DR Summary */}
        <section className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <Workflow className="w-8 h-8 flex-shrink-0 text-blue-200" />
            <div>
              <p className="text-lg leading-relaxed font-medium">
                {profile.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => setActiveTab('agentic')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'agentic' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Zap className="w-4 h-4" /> Agentic AI Prototypes
          </button>
          <button 
            onClick={() => setActiveTab('experience')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'experience' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <ShieldCheck className="w-4 h-4" /> SDET & DevOps Foundation
          </button>
        </div>

        {/* Content Area */}
        <main className="transition-all duration-300">
          {activeTab === 'agentic' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {agenticFeatures.map((f, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-900 text-white rounded-2xl p-8 overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" /> Live Agent Log: ConversationOrchestrator
                  </h3>
                  <div className="font-mono text-sm space-y-2 bg-black/40 p-4 rounded-lg border border-slate-700">
                    <p className="text-slate-500">[{new Date().toISOString()}] INFO: Initializing ItemValuation agent...</p>
                    <p className="text-emerald-400">DETECTED: Sony WH-1000XM4 (Confidence: 0.94)</p>
                    <p className="text-blue-400">ANALYZING: 90-day sold pricing data found.</p>
                    <p className="text-amber-400">AGENTIC QUERY: "Is original packaging included?"</p>
                    <p className="text-slate-500">WAITING: User input required to finalize ListingDraft...</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Workflow className="w-48 h-48" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full h-fit">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600 leading-relaxed text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-400 text-sm border-t border-slate-200">
          <p>© 2026 Jennifer McKinley. Generated via your preferred agentic assistant.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;