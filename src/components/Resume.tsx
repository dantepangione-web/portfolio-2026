"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle2, TerminalSquare, Github, ExternalLink, Mail, User, Download, Linkedin, Globe, Users, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Resume() {
  const [activeTab, setActiveTab] = useState<"schule" | "uek">("schule");
  const [lang, setLang] = useState<"de" | "en">("de");

  return (
    <section className="bg-[#050505] text-neutral-300 py-20 px-4 md:px-8 font-sans border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="bg-[#161616] border border-neutral-800 rounded-lg p-1 flex gap-1 items-center shadow-lg">
            <Globe size={14} className="text-neutral-500 ml-2 mr-1" />
            <button onClick={() => setLang("de")} className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "de" ? "bg-emerald-500 text-neutral-900 shadow-md" : "text-neutral-500 hover:text-neutral-300"}`}>
              DE
            </button>
            <button onClick={() => setLang("en")} className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "en" ? "bg-emerald-500 text-neutral-900 shadow-md" : "text-neutral-500 hover:text-neutral-300"}`}>
              EN
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-900 shadow-[0_0_30px_rgba(16,185,129,0.2)] shrink-0">
            <Image src="/profile-pic.png" alt="Dante Pangione" width={128} height={128} className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
              <TerminalSquare className="text-emerald-500" size={32} />
              {lang === "de" ? "System Architecture & Career" : "System Architecture & Career"}
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed text-lg text-center md:text-left">
              {lang === "de" 
                ? "Erfolgreich abgeschlossener Informatiker Plattformentwickler EFZ mit grosser Leidenschaft für die Softwareentwicklung. Mein Ziel: Fundiertes Infrastruktur-Wissen mit Fullstack- & AI-Skills zu kombinieren, um innovative und sichere Webanwendungen zu bauen."
                : "Successfully graduated IT Platform Engineer (EFZ) with a strong passion for software development. My goal: Combining profound infrastructure knowledge with Fullstack & AI skills to build innovative, secure web applications."
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Experience, Education, Projects */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-8">
                <Briefcase className="text-emerald-500" /> {lang === "de" ? "Execution Threads (Berufserfahrung)" : "Execution Threads (Experience)"}
              </h3>

              <div className="space-y-12">
                {/* Lakeside IT */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-emerald-400 font-mono text-sm font-bold">04/2025 – 08/2026</span>
                  <h4 className="text-xl font-bold text-white mt-1">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : "IT Platform Engineer EFZ"}</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-4">Lakeside IT</p>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Endpoint Management (Intune):</strong> {lang === "de" ? "Betreuung und Verwaltung via Intune Endpoint Administrator Management. Troubleshooting von Autopilot-Deployments und Durchsetzung von MFA-Richtlinien." : "Administration via Intune Endpoint Management. Troubleshooting Autopilot deployments, policy design, and MFA enforcement."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Network & Security Engineering:</strong> {lang === "de" ? "Implementation von Fortinet & Sophos Firewalls (0 auf 100) inkl. Site-to-Site VPNs, Static Routes und SIP-Portierungen." : "Implementation of Fortinet & Sophos Firewalls (from scratch) incl. Site-to-Site VPNs, static routes, and SIP telephony porting."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">{lang === "de" ? "Prozess-Automatisierung:" : "Process Automation:"}</strong> {lang === "de" ? "Erstellung von Zapier Automations zur Eliminierung manueller Aufgaben (MS Forms zu Atera-Tickets inkl. Approval-Flows)." : "Creation of Zapier automations to eliminate manual tasks (linking MS Forms to Atera tickets incl. approval flows)."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">3rd Level Support:</strong> {lang === "de" ? "Analytische Fehlerbehebung bei komplexen Netzwerk-Infrastrukturen sowie Eskalations-Koordination mit Providern bei Ausfällen." : "Analytical troubleshooting of complex network infrastructures and escalation coordination with ISPs during outages."}</span></li>
                  </ul>
                </motion.div>

                {/* KESO Assa Abloy */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-neutral-700 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-500 font-mono text-sm font-bold">08/2022 – 03/2025</span>
                  <h4 className="text-xl font-bold text-white mt-1">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : "IT Platform Engineer EFZ"}</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-4">KESO Assa Abloy</p>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">{lang === "de" ? "Netzwerk & Systemadministration:" : "Network & Systems Administration:"}</strong> {lang === "de" ? "Arbeiten mit Cisco-Netzwerken, Verwaltung von Active Directory, DNS, DHCP und GPOs." : "Working with Cisco networks, managing Active Directory, DNS, DHCP, and GPOs."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Client & Endpoint Management:</strong> {lang === "de" ? "Verwaltung von 150+ Clients via Baramundi. PowerShell-Skripte für Software-Paketierungen (Dell Command) und OS-Sprachkonfigurationen." : "Managing 150+ clients via Baramundi. PowerShell scripting for automated software packaging (Dell Command) and OS language config."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Server & Backup Operations:</strong> {lang === "de" ? "Virtualisierung mit VMware vSphere. Betreuung von Veeam Backup inkl. Restore-Tests und Tape-Management." : "Virtualization with VMware vSphere. Full management of Veeam Backup incl. restore tests and tape management."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">IT-Support & Knowledge Base:</strong> {lang === "de" ? "1st & 2nd Level Support für interne Mitarbeiter. Erweiterung der Firmen-Knowledge-Base im Wiki." : "1st & 2nd Level Support for internal staff. Continuous expansion of the company knowledge base in the corporate Wiki."}</span></li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* 2. Education Section - TIMELINE STYLE */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-8">
                <BookOpen className="text-emerald-500" /> {lang === "de" ? "Base Boot Sequence (Ausbildung)" : "Base Boot Sequence (Education)"}
              </h3>
              
              <div className="space-y-12">
                {/* GIBZ */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-emerald-400 font-mono text-sm font-bold">2025 – 2026</span>
                  <h4 className="text-xl font-bold text-white mt-1">Gewerblich-industrielles Bildungszentrum Zug (GIBZ)</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-2">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : "IT Platform Engineer EFZ"}</p>
                  <p className="text-neutral-500 text-sm">{lang === "de" ? "6., 7. und 8. Semester (Abschlussjahr)" : "6th, 7th and 8th Semester (Graduation Year)"}</p>
                </motion.div>

                {/* TBZ */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-neutral-700 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-500 font-mono text-sm font-bold">2022 – 2025</span>
                  <h4 className="text-xl font-bold text-white mt-1">Technische Berufsschule Zürich (TBZ)</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-2">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : "IT Platform Engineer EFZ"}</p>
                  <p className="text-neutral-500 text-sm">{lang === "de" ? "1. bis 5. Semester" : "1st to 5th Semester"}</p>
                </motion.div>

                {/* Sekundarschule */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-transparent">
                  <div className="absolute w-4 h-4 bg-neutral-800 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-600 font-mono text-sm font-bold">2019 – 2022</span>
                  <h4 className="text-lg font-bold text-neutral-400 mt-1">{lang === "de" ? "Sekundarschule, Sek 1 March Siebnen" : "Secondary School, Sek 1 March Siebnen"}</h4>
                  <p className="text-neutral-600 text-sm mt-1">{lang === "de" ? "Allgemeinbildender Schulabschluss" : "General Education Qualification"}</p>
                </motion.div>
              </div>
            </div>

            {/* 3. Projects Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Github className="text-emerald-500" /> {lang === "de" ? "Deployed Repositories (Projekte)" : "Deployed Repositories (Projects)"}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://github.com/dp-engineering24/HarmonyOP-m241" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Harmony</h4>
                        <ExternalLink size={20} className="text-neutral-500 group-hover:text-emerald-400" />
                      </div>
                      <p className="text-neutral-400 text-sm mb-6">{lang === "de" ? "Modul 241 OP. Unabhängiges Engineering-Projekt, das Fullstack-Fähigkeiten demonstriert." : "Module 241 OP. Independent engineering project demonstrating fullstack capabilities."}</p>
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
                      <p className="text-neutral-400 text-sm mb-6">{lang === "de" ? "Fortgeschrittene Iteration der Netspark-Plattform. Komplett eigenständig entwickelt." : "Advanced iteration of the Netspark platform. Developed entirely independently."}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-neutral-900 text-emerald-400 px-2 py-1 rounded border border-neutral-800">Engineering</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Certs, Performance Logs, References & Human Layer */}
          <div className="space-y-16 mt-12 lg:mt-0">
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Award className="text-emerald-500" /> {lang === "de" ? "Lizenzen & Zertifikate" : "Licenses & Certs"}
              </h3>
              <div className="space-y-4">
                <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
                  <h4 className="font-bold text-emerald-400">Scrimba: Learn HTML & CSS</h4>
                  <p className="text-sm text-neutral-300 mt-1">{lang === "de" ? "Abgeschlossen: Feb 25, 2026" : "Completed: Feb 25, 2026"}</p>
                  <p className="text-xs text-neutral-500 mt-2">{lang === "de" ? "120 Lektionen • 5.7 Stunden" : "120 Lessons • 5.7 Hours"}</p>
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

            {/* Performance Metrics */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <GraduationCap className="text-emerald-500" /> {lang === "de" ? "Leistungsnachweise (Noten)" : "Performance Logs"}
              </h3>
              
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl">
                <div className="flex gap-2 mb-6 bg-[#161616] p-1.5 rounded-lg border border-neutral-800 w-fit">
                  <button onClick={() => setActiveTab("schule")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === "schule" ? "bg-emerald-500 text-neutral-900 shadow-lg" : "text-neutral-500 hover:text-neutral-300"}`}>
                    {lang === "de" ? "Schule (TBZ/GIBZ)" : "School (TBZ/GIBZ)"}
                  </button>
                  <button onClick={() => setActiveTab("uek")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === "uek" ? "bg-emerald-500 text-neutral-900 shadow-lg" : "text-neutral-500 hover:text-neutral-300"}`}>
                    {lang === "de" ? "ÜK (ZLI)" : "Courses (ZLI)"}
                  </button>
                </div>

                {activeTab === "schule" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div>
                      <div className="text-emerald-400 mb-1">$&gt; sys.get_avg("IT_Modules_Sem_1-6")</div>
                      <div className="text-neutral-900 font-bold bg-emerald-500 inline-block px-2 py-0.5 rounded">{lang === "de" ? "Durchschnitt: 5.1" : "Average: 5.1"}</div>
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

                {activeTab === "uek" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="text-emerald-400 mb-2">$&gt; tail -f /var/log/zli_evaluations.log</div>
                    <div className="bg-[#111] border border-neutral-800 rounded p-4 h-96 overflow-y-auto space-y-6">
                      
                      {/* UeK 190 */}
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-190] Virtualisierungsplattform</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Herr Pangione arbeitete äusserst engagiert an den Lerninhalten. Die Aufträge setzte er spielend um und nutzte die Zeit, um Kolleg:innen zu unterstützen. Sein Verhalten und seine Leistungen sind herausragend."</p>
                      </div>
                      
                      {/* UeK 188 */}
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-188] Services betreiben & überwachen</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Macht im Unterricht mit und löst die Aufgaben effizient und selbständig. Ist auf die Aufträge fokussiert."</p>
                      </div>

                      {/* UeK 184 */}
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-184] Netzwerksicherheit implementieren</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Ausführung der Aufträge über den Erwartungen. Exzellente Modulnote."</p>
                      </div>
                      
                      {/* UeK 109 */}
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-109] Public Cloud Services</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Herr Pangione hat lösungsorientiert die Aufträge erledigt."</p>
                      </div>

                      {/* UeK 187 */}
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-187] ICT-Arbeitsplatz & OS</span><span className="text-blue-400 font-bold text-xs bg-blue-950 px-1.5 py-0.5 rounded">5.0</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Arbeitet selbständig und zuverlässig; ist sehr hilfsbereit; ist im Unterricht sehr präsent -> weiter so."</p>
                      </div>
                      
                      {/* UeK 185 */}
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-185] Sicherheitsmassnahmen KMU IT</span><span className="text-blue-400 font-bold text-xs bg-blue-950 px-1.5 py-0.5 rounded">5.0</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Interessierter und engagierter Teilnehmer. Hat sich mit der Kursthematik auseinandergesetzt und die Übungen sorgfältig bearbeitet."</p>
                      </div>

                      {/* UeK 106 */}
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-106] Datenbanken abfragen & warten</span><span className="text-blue-400 font-bold text-xs bg-blue-950 px-1.5 py-0.5 rounded">5.0</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Hat durch Beteiligung positiv zum Lernumfeld beigetragen. Aufgaben gewissenhaft erledigt und anderen Teilnehmern bei Fragen und Problemen geholfen."</p>
                      </div>

                    </div>
                  </motion.div>
                )}

                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="text-emerald-400 mb-1">$&gt; sys.await("Final_QV_Grade")</div>
                  <div className="text-neutral-400 font-bold bg-neutral-800 inline-block px-2 py-0.5 rounded animate-pulse">Status: Pending (Summer 2026)</div>
                </div>
              </div>
            </div>

            {/* NEW: References Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Users className="text-emerald-500" /> sys.get_references()
              </h3>
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl relative overflow-hidden">
                <div className="text-emerald-400 mb-4">$&gt; fetch --auth /admin/contacts</div>
                
                {/* Locked / Upcoming Feature State */}
                <div className="flex flex-col items-center justify-center py-6 text-center z-10 relative">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 mb-3">
                    <Users className="text-neutral-500" size={20} />
                  </div>
                  <h4 className="text-neutral-300 font-bold mb-1">{lang === "de" ? "Referenzen werden geladen..." : "Loading References..."}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed max-w-[200px]">
                    {lang === "de" 
                      ? "Feature upcoming: Verschlüsselte Referenzdaten werden bald freigeschaltet." 
                      : "Feature upcoming: Encrypted reference data will be unlocked soon."}
                  </p>
                  <div className="mt-4 px-3 py-1 bg-emerald-500/10 border border-emerald-900/50 text-emerald-500 text-xs rounded animate-pulse">
                    Status: Encrypted
                  </div>
                </div>

                {/* Background matrix effect to make it look cool */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(10,10,10,0.8)_80%)] pointer-events-none"></div>
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
                  <div className="pl-4 text-neutral-400">"Powerlifting ({lang === "de" ? "Fokus & Kraft" : "Focus & Strength"})",</div>
                  <div className="pl-4 text-neutral-400">"Olympisches Ringen ({lang === "de" ? "Kampfsport" : "Martial Arts"})",</div>
                  <div className="pl-4 text-neutral-400">"Motorsport",</div>
                  <div className="pl-4 text-neutral-400">"AI & Software Engineering"</div>
                  <div>]</div>
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
              <Download size={16} /> {lang === "de" ? "CV Herunterladen" : "Download CV"}
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