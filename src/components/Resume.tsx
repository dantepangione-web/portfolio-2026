"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle2, TerminalSquare, Github, ExternalLink, Mail, User, Download, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Resume() {
  const [activeTab, setActiveTab] = useState<"schule" | "uek">("schule");

  return (
    <section className="bg-[#050505] text-neutral-300 py-20 px-4 md:px-8 font-sans border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header mit Profilbild */}
        <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-900 shadow-[0_0_30px_rgba(16,185,129,0.2)] shrink-0">
            <Image src="/profile-pic.png" alt="Dante Pangione" width={128} height={128} className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
              <TerminalSquare className="text-emerald-500" size={32} />
              System Architecture & Career
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed text-lg text-center md:text-left">
              Erfolgreich abgeschlossener Informatiker Plattformentwickler EFZ mit grosser Leidenschaft für die Softwareentwicklung. 
              Mein Ziel: Fundiertes Infrastruktur-Wissen mit Fullstack- & AI-Skills zu kombinieren, um innovative und sichere Webanwendungen zu bauen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Experience, Projects & Human Layer */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-8">
                <Briefcase className="text-emerald-500" /> Execution Threads (Experience)
              </h3>

              <div className="space-y-12">
                {/* Lakeside IT */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-emerald-400 font-mono text-sm font-bold">04/2025 – 08/2026</span>
                  <h4 className="text-xl font-bold text-white mt-1">Informatiker Plattformentwickler EFZ</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-4">Lakeside IT</p>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Endpoint Management (Intune):</strong> Betreuung und Verwaltung via Intune Endpoint Administrator Management. Troubleshooting von Autopilot-Deployments, Policy-Design und Durchsetzung von MFA-Richtlinien (IPA-Fokus 2026).</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Network & Security Engineering:</strong> Implementation und Konfiguration von Fortinet & Sophos Firewalls (Vor-Ort-Inbetriebnahme von 0 auf 100) inkl. Site-to-Site VPNs, Static Routes und SIP-Telefonie-Portierungen.</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Prozess-Automatisierung:</strong> Prozessoptimierung durch Erstellung von Zapier Automations zur Eliminierung manueller administrativer Aufgaben (Verknüpfung von MS Forms mit Atera-Tickets inkl. Approval-Flows).</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">3rd Level Support & Troubleshooting:</strong> Analytische Fehlerbehebung bei komplexen Netzwerk-Infrastrukturen (Ping, Tracert, Firewall-Rules) sowie direkte Eskalations-Koordination mit ISP-Providern bei Leitungsausfällen.</span></li>
                  </ul>
                </motion.div>

                {/* KESO Assa Abloy */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-neutral-700 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-500 font-mono text-sm font-bold">08/2022 – 03/2025</span>
                  <h4 className="text-xl font-bold text-white mt-1">Informatiker Plattformentwickler EFZ</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-4">KESO Assa Abloy</p>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Netzwerk & Systemadministration:</strong> Arbeiten mit Cisco-Netzwerken, Verwaltung von Active Directory, DNS, DHCP und GPOs.</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Client & Endpoint Management:</strong> Verwaltung von 150+ Clients via Baramundi. Entwicklung von PowerShell-Skripten für automatisierte Software-Paketierungen (z.B. Dell Command Update) und systemweite OS-Sprachkonfigurationen.</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Server & Backup Operations:</strong> Virtualisierung und Systemadministration mit VMware vSphere. Vollumfängliche Betreuung von Veeam Backup inkl. Restore-Tests und Tape-Management (Weekly/Monthly/Yearly).</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">IT-Support & Knowledge Base:</strong> Eigenständige Durchführung des 1st & 2nd Level Supports für interne Mitarbeiter. Kontinuierliche Erweiterung der Firmen-Knowledge-Base durch detaillierte IT-Dokumentationen im Firmen-Wiki.</span></li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* 2. Projects Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Github className="text-emerald-500" /> Deployed Repositories (Projects)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://github.com/dp-engineering24/HarmonyOP-m241" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Harmony</h4>
                        <ExternalLink size={20} className="text-neutral-500 group-hover:text-emerald-400" />
                      </div>
                      <p className="text-neutral-400 text-sm mb-6">Module 241 OP. Independent engineering project demonstrating fullstack capabilities.</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-neutral-900 text-emerald-400 px-2 py-1 rounded border border-neutral-800">Development</span>
                    </div>
                  </div>
                </a>

                <a href="https://github.com/dantedev24/Netspark-v2" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Netspark v2</h4>
                        <ExternalLink size={20} className="text-neutral-500 group-hover:text-emerald-400" />
                      </div>
                      <p className="text-neutral-400 text-sm mb-6">Advanced iteration of the Netspark platform. Developed entirely independently.</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-neutral-900 text-emerald-400 px-2 py-1 rounded border border-neutral-800">Engineering</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* 3. Human Layer */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <User className="text-emerald-500" /> Human_Layer.config
              </h3>
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl">
                <div className="text-emerald-400 mb-2">$&gt; cat /etc/human/profile.json</div>
                <div className="text-neutral-300 space-y-2 pl-2 border-l-2 border-neutral-800">
                  <div><span className="text-blue-400">"languages"</span>: [</div>
                  <div className="pl-4 text-neutral-400">"Deutsch (Native)",</div>
                  <div className="pl-4 text-neutral-400">"Italienisch (Native)",</div>
                  <div className="pl-4 text-neutral-400">"Englisch (Advanced)",</div>
                  <div className="pl-4 text-neutral-400">"Französisch (Basic)"</div>
                  <div>],</div>
                  <div className="mt-3"><span className="text-purple-400">"hobbies"</span>: [</div>
                  <div className="pl-4 text-neutral-400">"Powerlifting (Fokus & Kraft)",</div>
                  <div className="pl-4 text-neutral-400">"Olympisches Ringen (Kampfsport)",</div>
                  <div className="pl-4 text-neutral-400">"Motorsport",</div>
                  <div className="pl-4 text-neutral-400">"AI & Software Engineering"</div>
                  <div>]</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Certs & Performance Logs */}
          <div className="space-y-16 mt-12 lg:mt-0">
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Award className="text-emerald-500" /> Licenses & Certs
              </h3>
              <div className="space-y-4">
                <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
                  <h4 className="font-bold text-emerald-400">Scrimba: Learn HTML & CSS</h4>
                  <p className="text-sm text-neutral-300 mt-1">Completed: Feb 25, 2026</p>
                  <p className="text-xs text-neutral-500 mt-2">120 Lessons • 5.7 Hours</p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg hover:border-emerald-500/30 transition-colors">
                  <h4 className="font-bold text-white">Scrimba Fullstack Developer</h4>
                  <p className="text-sm text-neutral-400">Frontend & Backend Engineering</p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg hover:border-emerald-500/30 transition-colors">
                  <h4 className="font-bold text-white">Google Professional Security</h4>
                  <p className="text-sm text-neutral-400">IT-Security & Cloud Defense</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics (UeK & Zeugnis) - WITH TOGGLE */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <GraduationCap className="text-emerald-500" /> Performance Logs
              </h3>
              
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl">
                
                {/* The Custom Toggle Switch */}
                <div className="flex gap-2 mb-6 bg-[#161616] p-1.5 rounded-lg border border-neutral-800 w-fit">
                  <button onClick={() => setActiveTab("schule")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === "schule" ? "bg-emerald-500 text-neutral-900 shadow-lg" : "text-neutral-500 hover:text-neutral-300"}`}>
                    TBZ / GIBZ (Schule)
                  </button>
                  <button onClick={() => setActiveTab("uek")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === "uek" ? "bg-emerald-500 text-neutral-900 shadow-lg" : "text-neutral-500 hover:text-neutral-300"}`}>
                    ZLI (ÜK)
                  </button>
                </div>

                {/* --- TAB 1: SCHULE --- */}
                {activeTab === "schule" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div>
                      <div className="text-emerald-400 mb-1">$&gt; sys.get_avg("IT_Modules_Sem_1-6")</div>
                      <div className="text-neutral-900 font-bold bg-emerald-500 inline-block px-2 py-0.5 rounded">Average: 5.1</div>
                    </div>

                    <div>
                      <div className="text-emerald-400 mb-2">$&gt; cat /var/log/grades_tbz.log</div>
                      <div className="bg-[#111] border border-neutral-800 rounded p-3 h-64 overflow-y-auto space-y-1 text-xs text-neutral-400">
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[117] IT- und Netzinfrastruktur</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[123] Serverdienste</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[162] Daten analysieren/modellieren</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[231] Datenschutz & Datensicherheit</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[122] Abläufe mit Scriptsprache</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[164] Datenbanken erstellen</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[319] Applikationen entwerfen</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[431] Aufträge selbstständig durchf.</span> <span className="text-yellow-400 font-bold">4.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[114] Codierungs-/Verschlüsselungsv.</span> <span className="text-emerald-400 font-bold">5.5</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[129] LAN-Komponenten</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[143] Backup- und Restore-Systeme</span> <span className="text-yellow-400 font-bold">4.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[346] Cloud Lösungen konzipieren</span> <span className="text-emerald-400 font-bold">6.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[141] Datenbanksystem in Betrieb</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[158] Software-Migration planen</span> <span className="text-emerald-400 font-bold">5.5</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[169] Services mit Containern</span> <span className="text-emerald-400 font-bold">5.5</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[254] Geschäftsprozesse beschreiben</span> <span className="text-emerald-400 font-bold">5.0</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[159] Directoryservices konfigurieren</span> <span className="text-emerald-400 font-bold">5.5</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[306] Kleinprojekte abwickeln</span> <span className="text-emerald-400 font-bold">5.5</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[145] Netzwerk betreiben & erweitern</span> <span className="text-emerald-400 font-bold">5.5</span></div>
                        <div className="flex justify-between hover:bg-neutral-800 px-1"><span className="text-neutral-300">[300] Plattformübergr. Dienste</span> <span className="text-yellow-400 font-bold">4.0</span></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* --- TAB 2: ÜK (ZLI) --- */}
                {activeTab === "uek" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="text-emerald-400 mb-2">$&gt; tail -f /var/log/zli_evaluations.log</div>
                    <div className="bg-[#111] border border-neutral-800 rounded p-4 h-64 overflow-y-auto space-y-6">
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-190] Virtualisierungsplattform</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Herr Pangione arbeitete äusserst engagiert. Die Aufträge setzte er spielend um und nutzte die Zeit, um Kolleg:innen zu unterstützen. Sein Verhalten und seine Leistungen sind herausragend."</p>
                      </div>
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-188] Services betreiben & überwachen</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Macht im Unterricht mit und löst die Aufgaben effizient und selbständig. Ist auf die Aufträge fokussiert."</p>
                      </div>
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-109] Public Cloud Services</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Herr Pangione hat lösungsorientiert die Aufträge erledigt."</p>
                      </div>
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-184] Netzwerksicherheit implementieren</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-500 italic text-xs">Exzellente Modulnote; volle Punktzahl im Kompetenznachweis.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Gemeinsamer Footer für beide Tabs */}
                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="text-emerald-400 mb-1">$&gt; sys.await("Final_QV_Grade")</div>
                  <div className="text-neutral-400 font-bold bg-neutral-800 inline-block px-2 py-0.5 rounded animate-pulse">Status: Pending (Summer 2026)</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer / Contact Section */}
        <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 font-mono text-sm">
            <span className="text-emerald-500">const</span> <span className="text-blue-400">status</span> = <span className="text-yellow-300">"Open to work"</span>;
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="/cv.pdf" download="Dante_Pangione_CV.pdf" className="flex items-center gap-2 text-neutral-900 bg-emerald-500 hover:bg-emerald-400 transition-colors text-sm font-bold px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Download size={16} /> Download CV
            </a>

            <a href="mailto:Dante.pangione@gmail.com" className="flex items-center gap-2 text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-mono border border-neutral-800 hover:border-emerald-500/50 bg-[#0a0a0a] px-4 py-2.5 rounded-lg">
              <Mail size={16} className="text-emerald-500" /> Email
            </a>
            
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-300 hover:text-[#0a66c2] transition-colors text-sm font-mono border border-neutral-800 hover:border-[#0a66c2]/50 bg-[#0a0a0a] px-4 py-2.5 rounded-lg">
              <Linkedin size={16} className="text-[#0a66c2]" /> LinkedIn
            </a>

            <a href="https://github.com/dantedev24" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors text-sm font-mono border border-neutral-800 hover:border-neutral-500/50 bg-[#0a0a0a] px-4 py-2.5 rounded-lg">
              <Github size={16} className="text-white" /> GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}