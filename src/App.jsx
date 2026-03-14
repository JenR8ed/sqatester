import React, { useState, useEffect } from 'react';

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
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeString(`${hours}:${minutes}:${seconds}`);
    };
    const intervalId = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-background-dark font-mono text-primary min-h-screen relative overflow-x-hidden crt-flicker-layer dark">
      <div className="fixed inset-0 crt-overlay"></div>
      <div className="fixed inset-0 scanline-effect"></div>
      <div className="moving-scanline"></div>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-terminal-black group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">

          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 py-4 md:px-10 lg:px-40 bg-terminal-black/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-6 terminal-text-glow">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <h2 className="text-primary text-lg font-bold leading-tight tracking-tight font-display uppercase italic">JenR8ed_Terminal</h2>
            </div>
            <div className="hidden lg:flex items-center gap-4 font-mono text-[10px] xl:text-xs">
              <div className="flex items-center gap-1">
                <span className="text-primary/40">[</span>
                <span className="text-primary terminal-text-glow uppercase tracking-wider">Uptime: UP 10y 02d 14h</span>
                <span className="text-primary/40">]</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-primary/40">[</span>
                <span className="text-primary terminal-text-glow font-bold clock-update" id="live-clock">{timeString}</span>
                <span className="text-primary/40">]</span>
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <nav className="hidden md:flex items-center gap-9">
                <a className="text-primary/70 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#whoami">whoami</a>
                <a className="text-primary/70 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#man">man</a>
                <a className="text-primary/70 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#projects">projects</a>
                <a className="text-primary/70 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#experience">experience</a>
                <a className="text-primary/70 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#certifications">certifications</a>
                <a className="text-primary/70 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#contact">contact</a>
              </nav>
              <a href="#contact" className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded bg-primary text-background-dark text-xs font-black uppercase leading-normal tracking-widest px-4 h-9 hover:bg-white transition-all">
                <span>EXECUTE</span>
              </a>
            </div>
          </header>

          <main className="px-6 md:px-10 lg:px-40 py-10 flex flex-col gap-12 max-w-[1200px] mx-auto w-full">
            <div className="clear-wipe-effect flex flex-col gap-12">

              <section className="flex flex-col gap-6" id="whoami">
                <div className="flex items-center gap-2">
                  <span className="text-primary/50">visitor@jenr8ed:~$</span>
                  <h1 className="text-primary text-2xl md:text-3xl font-bold terminal-text-glow">whoami</h1>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 md:p-10 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-9xl">person_search</span>
                  </div>
                  <div className="relative z-10 flex flex-col gap-4">
                    <h2 className="text-primary text-3xl md:text-5xl font-black leading-tight font-display">{profile.name}</h2>
                    <p className="text-primary/90 text-lg md:text-xl max-w-2xl leading-relaxed">
                      {profile.title}. {profile.summary}
                    </p>
                    <div className="mt-4 flex gap-4">
                      <a href="#contact" className="bg-primary text-background-dark px-6 py-3 rounded font-bold uppercase text-sm tracking-widest hover:brightness-110">INITIALIZE_CONTACT</a>
                      <a href={profile.contact.portfolio} className="border border-primary text-primary px-6 py-3 rounded font-bold uppercase text-sm tracking-widest hover:bg-primary/10 text-center">GET_RESUME.EXE</a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-4" id="man">
                <div className="flex items-center gap-2">
                  <span className="text-primary/50">visitor@jenr8ed:~$</span>
                  <h2 className="text-primary text-xl font-bold terminal-text-glow">man jennifer</h2>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 md:p-8 rounded font-mono text-xs md:text-sm leading-relaxed overflow-x-auto relative">
                  <div className="flex justify-between mb-8 text-primary font-bold uppercase tracking-widest opacity-80">
                    <span>JENNIFER(1)</span>
                    <span>Manual Programmer's Manual</span>
                    <span>JENNIFER(1)</span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-primary font-black mb-2 terminal-text-glow">NAME</h3>
                      <p className="pl-8 text-primary/90">{profile.name} - {profile.title}</p>
                    </div>
                    <div>
                      <h3 className="text-primary font-black mb-2 terminal-text-glow">SYNOPSIS</h3>
                      <p className="pl-8 text-primary/90 font-bold">jennifer <span className="font-normal">[--ai] [--python] [--sdet] [--qa]</span></p>
                    </div>
                    <div>
                      <h3 className="text-primary font-black mb-2 terminal-text-glow">DESCRIPTION</h3>
                      <p className="pl-8 text-primary/90 text-justify">
                        {profile.summary}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-primary font-black mb-2 terminal-text-glow">OPTIONS</h3>
                      <div className="pl-8 flex flex-col gap-2">
                        <div className="flex gap-4">
                          <span className="text-primary font-bold min-w-[100px]">--github</span>
                          <a href={profile.contact.github} className="text-primary/90 hover:underline">{profile.contact.github}</a>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-primary font-bold min-w-[100px]">--linkedin</span>
                          <a href={profile.contact.linkedin} className="text-primary/90 hover:underline">{profile.contact.linkedin}</a>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-primary font-bold min-w-[100px]">--email</span>
                          <a href={`mailto:${profile.contact.email}`} className="text-primary/90 hover:underline">{profile.contact.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 text-center text-primary/40 text-[10px]">
                    JenR8ed OS 1.2.0 - 2026
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-4" id="projects">
                <div className="flex items-center gap-2">
                  <span className="text-primary/50">visitor@jenr8ed:~$</span>
                  <h2 className="text-primary text-xl font-bold terminal-text-glow">ls -la ./agentic_features</h2>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                  <div className="flex flex-col gap-6">
                    {agenticFeatures.map((f, i) => (
                      <div key={i} className="flex flex-col gap-2 border-l-2 border-primary/20 pl-4">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold text-lg">{f.title}</span>
                        </div>
                        <p className="text-primary/80 text-sm leading-relaxed">{f.description}</p>
                        <div className="flex gap-2 text-[10px] mt-1">
                           <span className="text-primary/50">Tech:</span>
                           {f.tech.map(t => (
                              <span key={t} className="text-background-dark bg-primary/80 px-1 font-bold">{t}</span>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-4" id="experience">
                <div className="flex items-center gap-2">
                  <span className="text-primary/50">visitor@jenr8ed:~$</span>
                  <h2 className="text-primary text-xl font-bold terminal-text-glow">cat experience.log</h2>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                   <div className="flex flex-col gap-8">
                    {experience.map((exp, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2 border-b border-primary/20 pb-2">
                          <span className="text-primary font-bold text-lg terminal-text-glow">{exp.company} // {exp.role}</span>
                          <span className="text-primary/60 text-xs">[{exp.period}]</span>
                        </div>
                        <ul className="flex flex-col gap-2">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-primary/80 text-sm">
                              <span className="text-primary mt-1">&gt;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-4" id="certifications">
                <div className="flex items-center gap-2">
                  <span className="text-primary/50">visitor@jenr8ed:~$</span>
                  <h2 className="text-primary text-xl font-bold terminal-text-glow">df -h ./certifications</h2>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded font-mono text-[10px] md:text-sm overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="text-primary font-bold border-b border-primary/20">
                        <th className="py-2 pr-4">Certification</th>
                        <th className="py-2 px-4">Issuer</th>
                        <th className="py-2 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-primary/80">
                      {certifications.map((cert, i) => (
                        <tr key={i} className="hover:bg-primary/5 transition-colors border-b border-primary/10">
                          <td className="py-3 pr-4 font-bold">{cert.name}</td>
                          <td className="py-3 px-4">{cert.issuer}</td>
                          <td className="py-3 px-4 text-primary">VALIDATED</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="flex flex-col gap-4" id="contact">
                <div className="flex items-center gap-2">
                  <span className="text-primary/50">visitor@jenr8ed:~$</span>
                  <h2 className="text-primary text-xl font-bold terminal-text-glow">ssh jennifer@contact.me</h2>
                </div>
                <div className="flex flex-col gap-6 mt-4 border-l-2 border-primary/20 pl-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-primary/90">The authenticity of host contact.me can't be established.</p>
                    <p className="text-primary/90">ECDSA key fingerprint is SHA256:7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8.</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="whitespace-nowrap">Are you sure you want to continue connecting (yes/no)? [yes]</label>
                      <input autoFocus className="terminal-input w-24 border-b border-primary/30 bg-transparent text-primary outline-none ring-0" placeholder="yes" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-primary/70 italic text-sm">Warning: Permanently added 'contact.me' (ECDSA) to the list of known hosts.</p>
                    <div className="flex flex-col gap-2">
                      <label className="text-primary font-bold" htmlFor="message-field">Message:</label>
                      <textarea className="bg-primary/5 border border-primary/20 rounded p-4 text-primary font-mono focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none w-full max-w-2xl" id="message-field" placeholder="Type your inquiry here..." rows="4"></textarea>
                    </div>
                    <div>
                      <a href={`mailto:${profile.contact.email}`} className="inline-block bg-primary text-background-dark px-6 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">SUBMIT_PAYLOAD</a>
                    </div>
                  </div>
                </div>
              </section>

            </div>
            <div className="flex items-center gap-2 pt-10 pb-20 border-t border-primary/10">
              <span className="text-primary/50">visitor@jenr8ed:~$</span>
              <span className="cursor animate-blink"></span>
            </div>
          </main>

          <footer className="fixed bottom-0 left-0 w-full bg-primary/10 backdrop-blur-sm border-t border-primary/20 px-4 py-1 flex justify-between text-[10px] text-primary/60 font-mono z-40">
            <div className="flex gap-4">
              <span>UTF-8</span>
              <span>PYTHON 3.11</span>
            </div>
            <div className="flex gap-4">
              <span>JENR8ED_OS v1.2.0</span>
              <span>STATUS: ENCRYPTED_ACCESS</span>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default App;
