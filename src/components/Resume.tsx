"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle2, TerminalSquare, Github, ExternalLink, Mail, User, Download, Linkedin, Users, BookOpen, Bot, Cpu, Zap } from "lucide-react";

export default function Resume({ lang }: { lang: "de" | "en" | "it" }) {
  const [activeTab, setActiveTab] = useState<"schule" | "uek">("schule");

  return (
    <section className="bg-[#050505] text-neutral-300 py-20 px-4 md:px-8 font-sans border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* ASCII Profile Image Replacement */}
          <div className="w-32 h-32 rounded-lg border border-emerald-900 bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] shrink-0 overflow-hidden relative group">
            <pre className="text-emerald-500 font-bold text-[10px] leading-[10px] font-mono group-hover:scale-110 transition-transform duration-500">
{`   _______
  |.-----.|
  ||>_   ||
  ||_____||
  '-------'
   [=====] `}
            </pre>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/20 pointer-events-none"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
              <TerminalSquare className="text-emerald-500" size={32} />
              {lang === "de" ? "Systemarchitektur & Karriere" : lang === "en" ? "System Architecture & Career" : "Architettura di Sistema & Carriera"}
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed text-lg text-center md:text-left">
              {lang === "de" && "Erfolgreich abgeschlossener Informatiker Plattformentwickler EFZ mit grosser Leidenschaft für die Softwareentwicklung. Mein Ziel: Fundiertes Infrastruktur-Wissen mit Fullstack- & AI-Skills zu kombinieren, um innovative und sichere Webanwendungen zu bauen."}
              {lang === "en" && "Successfully graduated IT Platform Engineer (EFZ) with a strong passion for software development. My goal: Combining profound infrastructure knowledge with Fullstack & AI skills to build innovative, secure web applications."}
              {lang === "it" && "Ingegnere di Piattaforma IT (EFZ) diplomato con successo, con una forte passione per lo sviluppo di software. Il mio obiettivo: Combinare profonde conoscenze infrastrutturali con competenze Fullstack & AI per creare applicazioni web innovative e sicure."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Experience, Education, Projects */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-8">
                <Briefcase className="text-emerald-500" /> 
                {lang === "de" ? "Execution Threads (Berufserfahrung)" : lang === "en" ? "Execution Threads (Experience)" : "Thread di Esecuzione (Esperienza)"}
              </h3>

              <div className="space-y-12">
                {/* Lakeside IT */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-emerald-400 font-mono text-sm font-bold">04/2025 – 08/2026</span>
                  <h4 className="text-xl font-bold text-white mt-1">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : lang === "en" ? "IT Platform Engineer EFZ" : "Ingegnere di Piattaforma EFZ"}</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-4">Lakeside IT</p>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Endpoint Management (Intune):</strong> 
                      {lang === "de" ? " Betreuung und Verwaltung via Intune. Troubleshooting von Autopilot-Deployments und Durchsetzung von MFA-Richtlinien." 
                      : lang === "en" ? " Administration via Intune. Troubleshooting Autopilot deployments, policy design, and MFA enforcement." 
                      : " Amministrazione tramite Intune. Risoluzione dei problemi nei deployment di Autopilot, policy design e applicazione dell'MFA."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Network & Security Engineering:</strong> 
                      {lang === "de" ? " Implementation von Fortinet & Sophos Firewalls (0 auf 100) inkl. Site-to-Site VPNs, Static Routes und SIP-Portierungen." 
                      : lang === "en" ? " Implementation of Fortinet & Sophos Firewalls (from scratch) incl. Site-to-Site VPNs, static routes, and SIP telephony porting." 
                      : " Implementazione di firewall Fortinet e Sophos (da 0 a 100) inclusi VPN Site-to-Site, percorsi statici e porting di telefonia SIP."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">{lang === "de" ? "Prozess-Automatisierung:" : lang === "en" ? "Process Automation:" : "Automazione dei Processi:"}</strong> 
                      {lang === "de" ? " Erstellung von Zapier Automations zur Eliminierung manueller Aufgaben (MS Forms zu Atera-Tickets inkl. Approval-Flows)." 
                      : lang === "en" ? " Creation of Zapier automations to eliminate manual tasks (linking MS Forms to Atera tickets incl. approval flows)." 
                      : " Creazione di automazioni Zapier per eliminare attività manuali (collegamento da MS Forms a ticket Atera, inclusi flussi di approvazione)."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">3rd Level Support:</strong> 
                      {lang === "de" ? " Analytische Fehlerbehebung bei komplexen Netzwerk-Infrastrukturen sowie Eskalations-Koordination mit Providern bei Ausfällen." 
                      : lang === "en" ? " Analytical troubleshooting of complex network infrastructures and escalation coordination with ISPs during outages." 
                      : " Risoluzione analitica dei problemi su infrastrutture di rete complesse e coordinamento delle escalation con i provider in caso di disservizi."}</span></li>
                  </ul>
                </motion.div>

                {/* KESO Assa Abloy */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-neutral-700 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-500 font-mono text-sm font-bold">08/2022 – 03/2025</span>
                  <h4 className="text-xl font-bold text-white mt-1">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : lang === "en" ? "IT Platform Engineer EFZ" : "Ingegnere di Piattaforma EFZ"}</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-4">KESO Assa Abloy</p>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">{lang === "de" ? "Netzwerk & Systemadministration:" : lang === "en" ? "Network & Systems Administration:" : "Amministrazione di Rete e Sistemi:"}</strong> 
                      {lang === "de" ? " Arbeiten mit Cisco-Netzwerken, Verwaltung von Active Directory, DNS, DHCP und GPOs." 
                      : lang === "en" ? " Working with Cisco networks, managing Active Directory, DNS, DHCP, and GPOs." 
                      : " Lavoro con reti Cisco, gestione di Active Directory, DNS, DHCP e GPO."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Client & Endpoint Management:</strong> 
                      {lang === "de" ? " Verwaltung von 150+ Clients via Baramundi. PowerShell-Skripte für Software-Paketierungen (Dell Command) und OS-Sprachkonfigurationen." 
                      : lang === "en" ? " Managing 150+ clients via Baramundi. PowerShell scripting for automated software packaging (Dell Command) and OS language config." 
                      : " Gestione di oltre 150 client tramite Baramundi. Scripting PowerShell per pacchettizzazione software automatizzata (Dell Command) e configurazione della lingua dell'OS."}</span></li>
                    <li className="flex gap-2 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span><strong className="text-white">Server & Backup Operations:</strong> 
                      {lang === "de" ? " Virtualisierung mit VMware vSphere. Betreuung von Veeam Backup inkl. Restore-Tests und Tape-Management." 
                      : lang === "en" ? " Virtualization with VMware vSphere. Full management of Veeam Backup incl. restore tests and tape management." 
                      : " Virtualizzazione con VMware vSphere. Gestione completa di Veeam Backup, inclusi test di ripristino e gestione dei nastri."}</span></li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* 2. Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-8">
                <BookOpen className="text-emerald-500" /> 
                {lang === "de" ? "Base Boot Sequence (Ausbildung)" : lang === "en" ? "Base Boot Sequence (Education)" : "Sequenza di Avvio (Istruzione)"}
              </h3>
              
              <div className="space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-emerald-400 font-mono text-sm font-bold">2025 – 2026</span>
                  <h4 className="text-xl font-bold text-white mt-1">Gewerblich-industrielles Bildungszentrum Zug (GIBZ)</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-2">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : lang === "en" ? "IT Platform Engineer EFZ" : "Ingegnere di Piattaforma EFZ"}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-emerald-900/50">
                  <div className="absolute w-4 h-4 bg-neutral-700 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-500 font-mono text-sm font-bold">2022 – 2025</span>
                  <h4 className="text-xl font-bold text-white mt-1">Technische Berufsschule Zürich (TBZ)</h4>
                  <p className="text-neutral-400 font-mono text-sm mb-2">{lang === "de" ? "Informatiker Plattformentwickler EFZ" : lang === "en" ? "IT Platform Engineer EFZ" : "Ingegnere di Piattaforma EFZ"}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l-2 border-transparent">
                  <div className="absolute w-4 h-4 bg-neutral-800 rounded-full -left-[9px] top-1"></div>
                  <span className="text-neutral-600 font-mono text-sm font-bold">2019 – 2022</span>
                  <h4 className="text-lg font-bold text-neutral-400 mt-1">{lang === "de" ? "Sekundarschule, Sek 1 March Siebnen" : lang === "en" ? "Secondary School, Sek 1 March Siebnen" : "Scuola Secondaria, Sek 1 March Siebnen"}</h4>
                </motion.div>
              </div>
            </div>

            {/* 3. Projects Section - GOOGLE TARGETED */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Github className="text-emerald-500" /> 
                {lang === "de" ? "Deployed Repositories (Projekte)" : lang === "en" ? "Deployed Repositories (Projects)" : "Repository Distribuiti (Progetti)"}
              </h3>
              
              <div className="space-y-6">
                
                {/* NETSPARK V2 */}
                <a href="https://github.com/dantedev24/Netspark-v2" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400"/> Netspark v2
                      </h4>
                      <ExternalLink size={20} className="text-neutral-500 group-hover:text-emerald-400" />
                    </div>
                    <div className="text-neutral-400 text-sm mb-4 leading-relaxed space-y-2">
                      <p><strong className="text-neutral-200">{lang === "de" ? "Problem:" : lang === "en" ? "Problem:" : "Problema:"}</strong> {lang === "de" ? "Manuelle Lead-Generierung ist langsam und klassisches Scraping wird oft blockiert." : lang === "en" ? "Manual lead generation is slow, and traditional social media scraping is constantly blocked." : "La generazione manuale di lead è lenta e il web scraping tradizionale viene costantemente bloccato."}</p>
                      <p><strong className="text-neutral-200">{lang === "de" ? "Lösung:" : lang === "en" ? "Solution:" : "Soluzione:"}</strong> {lang === "de" ? "Ein B2B SaaS, das Echtzeit-Suchindizes (Serper API) mit Google Gemini 2.5 Flash als autonomen SDR kombiniert, um Leads zu entdecken, zu qualifizieren (0-100 Score) und personalisierte Outreach-DMs zu entwerfen." : lang === "en" ? "A B2B SaaS combining real-time search indexing (Serper API) with Google Gemini 2.5 Flash acting as an autonomous SDR to discover, qualify (0-100 score), and draft personalized outreach DMs." : "Un SaaS B2B che combina l'indicizzazione in tempo reale con Google Gemini 2.5 Flash come SDR autonomo per scoprire, qualificare (0-100) e redigere messaggi personalizzati."}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-neutral-900 text-white px-2 py-1 rounded border border-neutral-800">Next.js 16</span>
                      <span className="text-xs bg-neutral-900 text-[#8E75B2] px-2 py-1 rounded border border-neutral-800">Gemini 2.5 Flash</span>
                      <span className="text-xs bg-neutral-900 text-green-400 px-2 py-1 rounded border border-neutral-800">Supabase</span>
                      <span className="text-xs bg-neutral-900 text-cyan-400 px-2 py-1 rounded border border-neutral-800">Vercel AI SDK</span>
                    </div>
                  </div>
                </a>

                {/* AI LEAD QUALIFICATION (VA) */}
                <div className="bg-emerald-950/10 border border-emerald-900/50 p-6 rounded-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      <Bot size={20} className="text-emerald-500"/> AI Lead Qualification (VA)
                    </h4>
                    {/* UPCOMING GIT REPO TAG FIXED */}
                    <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded border border-emerald-800 font-mono">Upcoming git repo</span>
                  </div>
                  <div className="text-neutral-400 text-sm mb-4 leading-relaxed space-y-2 relative z-10">
                    <p><strong className="text-neutral-200">{lang === "de" ? "Problem:" : lang === "en" ? "Problem:" : "Problema:"}</strong> {lang === "de" ? "Hoher manueller Aufwand bei der Recherche und Erstbewertung von B2B-Kunden." : lang === "en" ? "High manual effort in researching and initial screening of inbound B2B prospects." : "Elevato sforzo manuale nella ricerca e nello screening iniziale dei prospect B2B."}</p>
                    <p><strong className="text-neutral-200">{lang === "de" ? "Lösung:" : lang === "en" ? "Solution:" : "Soluzione:"}</strong> {lang === "de" ? "Multi-Agenten-System in n8n. Webhook triggert eine Perplexity API Recherche (Tech Stack, Pain Points). Ein LLM-Agent strukturiert die Daten (JSON), bewertet die Reife (Score) und routet den Lead automatisch in Google Sheets & CRM." : lang === "en" ? "Multi-agent system built in n8n. Webhook triggers Perplexity API research (tech stack, pain points). An LLM agent structures data (JSON), scores business maturity, and auto-routes leads to Google Sheets & CRM." : "Sistema multi-agente in n8n. Webhook attiva ricerca Perplexity (tech stack, problemi). Un agente LLM struttura i dati (JSON), valuta la maturità aziendale e instrada i lead al CRM."}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    <span className="text-xs bg-[#161616] text-[#FF6D5A] px-2 py-1 rounded border border-neutral-800">n8n Workflows</span>
                    <span className="text-xs bg-[#161616] text-blue-400 px-2 py-1 rounded border border-neutral-800">Perplexity API</span>
                    <span className="text-xs bg-[#161616] text-yellow-400 px-2 py-1 rounded border border-neutral-800">LLM Agents</span>
                  </div>
                </div>

                {/* HARMONY OP */}
                <a href="https://github.com/dp-engineering24/HarmonyOP-m241" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                        <Cpu size={20} className="text-blue-400"/> Harmony OP
                      </h4>
                      <ExternalLink size={20} className="text-neutral-500 group-hover:text-emerald-400" />
                    </div>
                    <div className="text-neutral-400 text-sm mb-4 leading-relaxed space-y-2">
                      <p><strong className="text-neutral-200">{lang === "de" ? "Problem:" : lang === "en" ? "Problem:" : "Problema:"}</strong> {lang === "de" ? "Mitarbeiter-Onboarding ist durch Kommunikationslücken zwischen HR und IT fehleranfällig und ineffizient." : lang === "en" ? "Employee onboarding is error-prone and inefficient due to communication gaps between HR and IT." : "L'inserimento dei dipendenti è soggetto a errori e inefficiente a causa di lacune di comunicazione tra Risorse Umane e IT."}</p>
                      <p><strong className="text-neutral-200">{lang === "de" ? "Lösung:" : lang === "en" ? "Solution:" : "Soluzione:"}</strong> {lang === "de" ? "Eine Enterprise-Plattform mit Microsoft Entra ID (AD) Integration für God-Mode-Auto-Provisioning. Erstellt Accounts, weist M365 Lizenzen zu und bietet ein Live-Dashboard für Neueintritte." : lang === "en" ? "An Enterprise platform with Microsoft Entra ID (AD) integration for God-Mode Auto-Provisioning. Automates account creation, M365 licensing, and features a live progress dashboard for new hires." : "Una piattaforma Enterprise con integrazione Microsoft Entra ID (AD) per l'Auto-Provisioning. Automatizza la creazione di account e licenze M365, fornendo una dashboard live."}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-neutral-900 text-blue-400 px-2 py-1 rounded border border-neutral-800">React 19</span>
                      <span className="text-xs bg-neutral-900 text-blue-500 px-2 py-1 rounded border border-neutral-800">Microsoft Entra ID</span>
                      <span className="text-xs bg-neutral-900 text-green-400 px-2 py-1 rounded border border-neutral-800">Drizzle ORM</span>
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
                <Award className="text-emerald-500" /> {lang === "de" ? "Lizenzen & Zertifikate" : lang === "en" ? "Licenses & Certs" : "Licenze & Certificati"}
              </h3>
              <div className="space-y-4">
                <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
                  <h4 className="font-bold text-emerald-400">Scrimba: Learn HTML & CSS</h4>
                  <p className="text-sm text-neutral-300 mt-1">{lang === "de" ? "Abgeschlossen: Feb 25, 2026" : lang === "en" ? "Completed: Feb 25, 2026" : "Completato: Feb 25, 2026"}</p>
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
                <GraduationCap className="text-emerald-500" /> {lang === "de" ? "Leistungsnachweise (Noten)" : lang === "en" ? "Performance Logs" : "Log delle Prestazioni"}
              </h3>
              
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl">
                <div className="flex gap-2 mb-6 bg-[#161616] p-1.5 rounded-lg border border-neutral-800 w-fit">
                  <button onClick={() => setActiveTab("schule")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === "schule" ? "bg-emerald-500 text-neutral-900 shadow-lg" : "text-neutral-500 hover:text-neutral-300"}`}>
                    {lang === "de" ? "Schule (TBZ/GIBZ)" : lang === "en" ? "School (TBZ/GIBZ)" : "Scuola (TBZ/GIBZ)"}
                  </button>
                  <button onClick={() => setActiveTab("uek")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === "uek" ? "bg-emerald-500 text-neutral-900 shadow-lg" : "text-neutral-500 hover:text-neutral-300"}`}>
                    {lang === "de" ? "ÜK (ZLI)" : lang === "en" ? "Courses (ZLI)" : "Corsi (ZLI)"}
                  </button>
                </div>

                {activeTab === "schule" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div>
                      <div className="text-emerald-400 mb-1">$&gt; sys.get_avg("IT_Modules_Sem_1-6")</div>
                      <div className="text-neutral-900 font-bold bg-emerald-500 inline-block px-2 py-0.5 rounded">{lang === "de" ? "Durchschnitt: 5.1" : lang === "en" ? "Average: 5.1" : "Media: 5.1"}</div>
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
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-190] Virtualisierungsplattform</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Herr Pangione arbeitete äusserst engagiert an den Lerninhalten. Die Aufträge setzte er spielend um und nutzte die Zeit, um Kolleg:innen zu unterstützen. Sein Verhalten und seine Leistungen sind herausragend."</p>
                      </div>
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-188] Services betreiben & überwachen</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Macht im Unterricht mit und löst die Aufgaben effizient und selbständig. Ist auf die Aufträge fokussiert."</p>
                      </div>
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-184] Netzwerksicherheit implementieren</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Ausführung der Aufträge über den Erwartungen. Exzellente Modulnote."</p>
                      </div>
                      <div className="border-l-2 border-emerald-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-109] Public Cloud Services</span><span className="text-emerald-400 font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">5.5</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Herr Pangione hat lösungsorientiert die Aufträge erledigt."</p>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-187] ICT-Arbeitsplatz & OS</span><span className="text-blue-400 font-bold text-xs bg-blue-950 px-1.5 py-0.5 rounded">5.0</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Arbeitet selbständig und zuverlässig; ist sehr hilfsbereit; ist im Unterricht sehr präsent -&gt; weiter so."</p>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-185] Sicherheitsmassnahmen KMU IT</span><span className="text-blue-400 font-bold text-xs bg-blue-950 px-1.5 py-0.5 rounded">5.0</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Interessierter und engagierter Teilnehmer. Hat sich mit der Kursthematik auseinandergesetzt und die Übungen sorgfältig bearbeitet."</p>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-3">
                        <div className="flex justify-between items-start mb-1"><span className="text-white font-bold text-xs">[UeK-106] Datenbanken abfragen & warten</span><span className="text-blue-400 font-bold text-xs bg-blue-950 px-1.5 py-0.5 rounded">5.0</span></div>
                        <p className="text-neutral-400 italic text-xs leading-relaxed">"Hat durch Beteiligung positiv zum Lernumfeld beigetragen. Aufgaben gewissenhaft erledigt und anderen Teilnehmern bei Fragen und Problemen geholfen."</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="text-emerald-400 mb-1">$&gt; sys.await("Final_QV_Grade")</div>
                  <div className="text-neutral-400 font-bold bg-neutral-800 inline-block px-2 py-0.5 rounded animate-pulse">
                    {lang === "de" ? "Status: Ausstehend (Sommer 2026)" : lang === "en" ? "Status: Pending (Summer 2026)" : "Stato: In attesa (Estate 2026)"}
                  </div>
                </div>
              </div>
            </div>

            {/* References Section */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <Users className="text-emerald-500" /> sys.get_references()
              </h3>
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl relative overflow-hidden">
                <div className="text-emerald-400 mb-4">$&gt; fetch --auth /admin/contacts</div>
                
                <div className="flex flex-col items-center justify-center py-6 text-center z-10 relative">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 mb-3">
                    <Users className="text-neutral-500" size={20} />
                  </div>
                  <h4 className="text-neutral-300 font-bold mb-1">
                    {lang === "de" ? "Referenzen werden geladen..." : lang === "en" ? "Loading References..." : "Caricamento Referenze..."}
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed max-w-[200px]">
                    {lang === "de" ? "Feature upcoming: Verschlüsselte Referenzdaten werden bald freigeschaltet." 
                    : lang === "en" ? "Feature upcoming: Encrypted reference data will be unlocked soon." 
                    : "Feature in arrivo: i dati di riferimento crittografati verranno sbloccati a breve."}
                  </p>
                  <div className="mt-4 px-3 py-1 bg-emerald-500/10 border border-emerald-900/50 text-emerald-500 text-xs rounded animate-pulse">
                    Status: Encrypted
                  </div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(10,10,10,0.8)_80%)] pointer-events-none"></div>
              </div>
            </div>

            {/* Human Layer (FIXED: Complete Translation) */}
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2 mb-6">
                <User className="text-emerald-500" /> Human_Layer.config
              </h3>
              <div className="bg-[#0a0a0a] border border-neutral-800 p-5 rounded-lg font-mono text-sm shadow-xl">
                <div className="text-emerald-400 mb-2">$&gt; cat /etc/human/profile.json</div>
                <div className="text-neutral-300 space-y-2 pl-2 border-l-2 border-neutral-800">
                  <div><span className="text-blue-400">"{lang === "de" ? "sprachen" : lang === "en" ? "languages" : "lingue"}"</span>: [</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Deutsch (Native)" : lang === "en" ? "German (Native)" : "Tedesco (Madrelingua)"}",</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Italienisch (Native)" : lang === "en" ? "Italian (Native)" : "Italiano (Madrelingua)"}",</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Englisch (Advanced)" : lang === "en" ? "English (Advanced)" : "Inglese (Avanzato)"}",</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Französisch (Basic)" : lang === "en" ? "French (Basic)" : "Francese (Base)"}"</div>
                  <div>],</div>
                  
                  <div className="mt-3"><span className="text-purple-400">"{lang === "de" ? "interessen" : lang === "en" ? "interests" : "interessi"}"</span>: [</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Powerlifting (Fokus & Kraft)" : lang === "en" ? "Powerlifting (Focus & Strength)" : "Powerlifting (Focus & Forza)"}",</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Olympisches Ringen (Kampfsport)" : lang === "en" ? "Olympic Wrestling (Martial Arts)" : "Lotta Olimpica (Arti Marziali)"}",</div>
                  <div className="pl-4 text-neutral-400">"{lang === "de" ? "Motorsport" : lang === "en" ? "Motorsport" : "Motorsport"}",</div>
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
              <Download size={16} /> {lang === "de" ? "CV Herunterladen" : lang === "en" ? "Download CV" : "Scarica il CV"}
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