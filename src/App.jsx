import React, { useState } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Scale, 
  Truck, 
  Waves, 
  BarChart3, 
  Camera, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Award,
  Users,
  CheckCircle2
} from 'lucide-react';

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    {
      title: "RAGINX AI Operations",
      description: "A high-performance AI-driven operational intelligence platform designed for logistics, agriculture, and supply chain ecosystems. It transforms raw data into actionable insights for complex institutional operations.",
      link: "https://raginexaillp.netlify.app/",
      icon: <Truck className="text-green-500" />,
      tag: "AI & Logistics"
    },
    {
      title: "Integrated Legal Management (ILMS)",
      description: "An advanced 'LexAI' judicial dashboard providing real-time case intelligence, filing trends, and resolution tracking. Features automated status distribution and pending hearing alerts for legal professionals.",
      link: "https://elitigationsystem.netlify.app/ai-dashboard",
      icon: <Scale className="text-blue-500" />,
      tag: "LegalTech"
    },
    {
      title: "CCTV Management System",
      description: "A comprehensive surveillance dashboard monitoring 3,400+ cameras with 96% uptime. Includes real-time active alerts, automated complaint resolution tracking, and regional uptime analytics.",
      link: "https://cctvmanagementsystem.netlify.app/",
      icon: <Camera className="text-red-500" />,
      tag: "Security"
    },
    {
      title: "AfroAsian News Portal",
      description: "A sophisticated digital diplomacy and news platform focusing on the economic strategies and global partnerships between Africa and Asia, featuring high-fidelity editorial layouts.",
      link: "https://afroasian2026.netlify.app/",
      icon: <Globe className="text-amber-600" />,
      tag: "Media"
    },
    {
      title: "Trade Receivables Dashboard",
      description: "A financial intelligence tool managing over ₹6.10 Cr in outstanding invoices. Features branch-wise debt analysis, party-wise distribution, and year-on-year financial comparisons.",
      link: "https://tradereceivables.netlify.app/",
      icon: <BarChart3 className="text-indigo-500" />,
      tag: "FinTech"
    },
    {
      title: "My Laundry App",
      description: "A sustainable service platform built for the circular economy. Features real-time booking, service categorization, and a 'Cleaning with a Conscience' initiative for healthy environments.",
      link: "https://laundryapp2025.netlify.app/",
      icon: <Waves className="text-teal-500" />,
      tag: "Consumer App"
    }
  ];

  const accomplishments = [
    { count: "50+", label: "Projects Delivered", icon: <CheckCircle2 /> },
    { count: "96%", label: "System Uptime", icon: <ShieldCheck /> },
    { count: "10+", label: "Sector Specializations", icon: <Award /> },
    { count: "100%", label: "Client Satisfaction", icon: <Users /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              RAGINX TECH
            </div>
            <div className="hidden md:flex space-x-8 font-medium text-slate-600">
              <a href="#about" className="hover:text-emerald-600 transition">About</a>
              <a href="#projects" className="hover:text-emerald-600 transition">Projects</a>
              <a href="#accomplishments" className="hover:text-emerald-600 transition">Impact</a>
              <a href="#contact" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Intelligent Systems for <br/>
            <span className="text-emerald-600">Complex Sector Ecosystems</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We specialize in developing AI-driven operational intelligence platforms. From legal frameworks 
            to logistics networks and urban surveillance, we bridge the gap between data and decision-making.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition">Explore Work</button>
            <button className="px-8 py-3 border-2 border-slate-200 rounded-full font-bold hover:bg-slate-50 transition">Our Process</button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="h-1 w-20 bg-emerald-500 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4 p-3 bg-slate-50 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {p.description}
                </p>
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition"
                >
                  Visit Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section id="accomplishments" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {accomplishments.map((a, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4 text-emerald-400">{a.icon}</div>
                <div className="text-4xl font-bold mb-2">{a.count}</div>
                <div className="text-emerald-100 text-sm">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-12 md:w-1/2 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Let's build something intelligent.</h2>
              <p className="text-slate-400 mb-8">Ready to transform your organizational operations with AI? Our team is standing by.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-600/20 rounded-lg"><Mail className="text-emerald-500"/></div>
                  <span>hello@raginx.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-600/20 rounded-lg"><Linkedin className="text-emerald-500"/></div>
                  <span>linkedin.com/company/raginx</span>
                </div>
              </div>
            </div>
            <div className="p-12 md:w-1/2 bg-slate-800">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-700 border-none rounded-xl p-4 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-slate-700 border-none rounded-xl p-4 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500"
                />
                <textarea 
                  placeholder="Project Details" 
                  rows="4"
                  className="w-full bg-slate-700 border-none rounded-xl p-4 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500"
                ></textarea>
                <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition shadow-lg shadow-emerald-900/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2026 RAGINX AI Technologies LLP. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition"><Github size={20}/></a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition"><Linkedin size={20}/></a>
          </div>
          <div className="text-slate-500 text-sm font-medium italic">
            "Bridging Data and Human Intelligence"
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
