"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  MessageSquare,
  ExternalLink,
  Cpu,
  Database,
  Cloud,
  Sparkles,
  Check,
  Calendar,
  Layers,
  Rocket,
  Shield,
  Briefcase,
  Building,
  Store,
  Code,
  Smartphone,
  CheckCircle2,
  Terminal,
  Brain,
  Wrench,
  Globe,
  TrendingUp,
  Settings
} from "lucide-react";


// Client-side dynamic components
const SmoothScroll = dynamic(() => import("../components/SmoothScroll"), { ssr: false });
const Timeline = dynamic(() => import("../components/Timeline"), { ssr: false });
const InteractiveCard = dynamic(() => import("../components/InteractiveCard"), { ssr: false });

// ── WhatsApp Icon ───────────────────────────────────────────
const WhatsAppIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

// ── Custom SVG Social Icons ──────────────────────────────────
const GithubIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetcodeIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.75 11.75a1.379 1.379 0 0 0 0 1.956l.002.002a1.378 1.378 0 0 0 1.954 0l11.75-11.75a1.379 1.379 0 0 0 0-1.956A1.374 1.374 0 0 0 13.483 0zm5.109 4.908a1.374 1.374 0 0 0-.963.411l-5.602 5.601a1.379 1.379 0 0 0 0 1.957l.002.002a1.378 1.378 0 0 0 1.954 0l5.602-5.601a1.379 1.379 0 0 0 0-1.957 1.374 1.374 0 0 0-.993-.413zm-14.73 1.956a1.374 1.374 0 0 0-.963.411L.415 9.771a1.379 1.379 0 0 0 0 1.957l.002.002a1.378 1.378 0 0 0 1.954 0l2.484-2.485a1.379 1.379 0 0 0 0-1.957 1.374 1.374 0 0 0-.993-.413zm16.143 5.15a1.378 1.378 0 0 0-1.954 0l-2.484 2.485a1.379 1.379 0 0 0 0 1.957.002.002 0 0 0 .002.002 1.378 1.378 0 0 0 1.954 0l2.484-2.485a1.379 1.379 0 0 0 0-1.957 1.374 1.374 0 0 0-.002-.002z"/>
  </svg>
);

// ── Animated Counter ─────────────────────────────────────────
function AnimatedCounter({ target, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const steps = 45;
          const increment = target / steps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, (duration * 1000) / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── What I Build Data ─────────────────────────────────────────
const whatIBuild = [
  {
    icon: <Building size={20} />,
    title: "Business Websites",
    desc: "Sleek marketing and corporate platforms engineered to capture organic queries, rank high on SEO parameters, and capture inbound clients.",
    features: ["Core Web Vitals Optimized", "Schema Markup / SEO Audits", "Custom Analytics Dashboard"]
  },
  {
    icon: <Store size={20} />,
    title: "Real Estate Platforms",
    desc: "Robust search listings, direct lead capture paths, agent profile management, and verified property directories tailored for agents.",
    features: ["Interactive Map Search", "Lead Routing Automations", "High-Fidelity Media Viewers"]
  },
  {
    icon: <Brain size={20} />,
    title: "AI Solutions",
    desc: "Integrating Large Language Models (LLMs), prompt chains, and semantic search systems to automate customer service and text sorting.",
    features: ["Custom Prompt Pipelines", "Vector Database Matching", "Cost-Controlled Token Limits"]
  },
  {
    icon: <Smartphone size={20} />,
    title: "Web Applications",
    desc: "Custom SaaS products, portals, and data boards constructed with multi-role permissions, secure backends, and responsive layouts.",
    features: ["Secure JWT/Auth Routes", "Modular Extendable Code", "Third-Party API Integrations"]
  },
  {
    icon: <Settings size={20} />,
    title: "Automation Systems",
    desc: "Linking software applications via API lines, custom webhook handlers, and scheduled tasks to delete manual administration overhead.",
    features: ["Automatic Database Sync", "Robust Error Notification", "Cron Job Pipelines"]
  },
  {
    icon: <Layers size={20} />,
    title: "Landing Pages",
    desc: "High-performance single-page checkout structures styled with elegant visual hierarchy to turn ad clicks into immediate bookings.",
    features: ["Conversion-Focused Copy", "Pixel/Tag Tracking Setup", "A/B Testing Clean Code"]
  }
];

// ── Development Process Data ──────────────────────────────────
const developmentProcess = [
  { step: "01", title: "Discovery", desc: "Analyzing operational needs, mapping user flows, and defining business goals." },
  { step: "02", title: "Planning", desc: "Drafting technical specifications, database architecture, and technology choices." },
  { step: "03", title: "Design", desc: "Crafting modern layouts, visual elements, and clear spacing structures." },
  { step: "04", title: "Development", desc: "Writing clean, optimized, and modular code matching production standards." },
  { step: "05", title: "Testing", desc: "Rigorous debugging, responsive testing, and speed optimization audits." },
  { step: "06", title: "Launch", desc: "Deploying to production, setting up backups, and launching search index triggers." }
];

// ── Projects Data (Upgraded: 4 premium cards) ────────────────
const projects = [
  {
    img: "/aimadina-thumbnail.png",
    alt: "Al Madina Consultants — Overseas Recruitment SaaS",
    title: "Al Madina Consultants",
    desc: "SaaS recruitment platform with resume parsing, automatic candidate matching, and secure client portals.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Vercel"],
    href: "https://al-madina-consultants.vercel.app/"
  },
  {
    img: "/greenfoods-thumbnail.png",
    alt: "Your Green Foods — High-Performance E-Commerce Engine",
    title: "Your Green Foods",
    desc: "High-performance organic e-commerce storefront engineered for fast mobile checkout conversion.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    href: "https://your-green-foods.vercel.app/"
  },
  {
    img: "/pixelstack-thumbnail.png",
    alt: "Pixel Stack — Simple & Clean Business Websites",
    title: "Pixel Stack",
    desc: "A premium business website agency portfolio designed to showcase fast, responsive, and SEO-optimized web solutions.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://pixel-stack-alpha.vercel.app"
  },
  {
    img: "/groundx-thumbnail.png",
    alt: "GroundX Vellore — Trusted Real Estate Portal",
    title: "GroundX Vellore",
    desc: "A high-performance real estate portal with advanced property search and direct customer lead capture.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    href: "https://groundx-vellore.vercel.app"
  }
];


// ── Success Stories Data (Upgraded with Visual Metrics) ────────
const successStories = [
  {
    title: "Hyperlocal Match Discovery (Nearva)",
    challenge: "Matchmaking latency on weak cellular connections caused a 30% drop-off rate during localized service discovery.",
    solution: "Structured a custom spatial database index inside PostgreSQL coupled with serverless edge caching filters.",
    result: "Facilitated instant service matchmaking location transits, maintaining system responsiveness.",
    metric: "90%",
    metricLabel: "Search Time Saved"
  },
  {
    title: "Recruitment Intakes (Al Madina Consultants)",
    challenge: "Recruitment coordinators spent 15+ hours weekly checking candidate resumes and manually routing documentation packages.",
    solution: "Created an automated parser engine using Node.js text scanners to filter profile tags and intake candidates.",
    result: "Automated candidate sorting tasks with perfect indexing accuracy, eliminating admin bottlenecks.",
    metric: "15hr+",
    metricLabel: "Weekly Work Saved"
  }
];

// ── Ecosystem Data (V5 Visual Technology Grid) ───────────────
const ecosystem = [
  {
    icon: <Code size={24} />,
    title: "Frontend Stack",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: <Database size={24} />,
    title: "Backend Core",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    icon: <Brain size={24} />,
    title: "AI & Automation",
    items: ["OpenAI API", "Prompt Chains", "Vector DBs", "API Workflows"]
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud & Ops",
    items: ["Vercel", "Firebase", "Docker", "Linux Servers", "CI/CD Setup"]
  },
  {
    icon: <Wrench size={24} />,
    title: "Dev Tooling",
    items: ["Git & GitHub", "VS Code", "Postman", "ESLint", "Webpack"]
  }
];

// ── Tech Tools Data (Tools & Technologies I Use) ──────────────
const techTools = [
  { name: "React", role: "Frontend Library", icon: <Code size={32} /> },
  { name: "Next.js", role: "Production Framework", icon: <Globe size={32} /> },
  { name: "Node.js", role: "Backend Runtime", icon: <Terminal size={32} /> },
  { name: "MongoDB", role: "Database System", icon: <Database size={32} /> },
  { name: "OpenAI", role: "Artificial Intelligence", icon: <Brain size={32} /> },
  { name: "Tailwind CSS", role: "Styling System", icon: <Sparkles size={32} /> },
  { name: "GitHub", role: "Repository & Devops", icon: <GithubIcon size={32} /> },
  { name: "Firebase", role: "Cloud Services", icon: <Cloud size={32} /> }
];

// ── Services Data ────────────────────────────────────────────
const services = [
  {
    icon: <Building size={20} />,
    title: "Business Website Development",
    desc: "High-performance marketing platforms built to establish authority, rank on Google, and convert casual visitors into clients.",
    benefits: ["Optimized Core Web Vitals", "Structured Data / Schema SEO", "Integrated Lead Capture Funnels"]
  },
  {
    icon: <Smartphone size={20} />,
    title: "Custom Web Applications",
    desc: "Bespoke SaaS architectures, user panels, and backend systems designed with role permissions and strong data security.",
    benefits: ["Robust Auth & Encryption", "Fluid Mobile Responsiveness", "Clean Developer Hand-off Code"]
  },
  {
    icon: <Brain size={20} />,
    title: "AI Integration Solutions",
    desc: "Empowering business databases and client support portals with LLMs, prompt pipelines, and intelligent search systems.",
    benefits: ["LLM Token Optimization", "Structured API Outputs", "Vector Search Embeddings"]
  },
  {
    icon: <Rocket size={20} />,
    title: "Automation Systems",
    desc: "Linking disparate software tools through API pipelines, webhooks, and schedulers to delete manual copy-paste chores.",
    benefits: ["Real-Time Sync Algorithms", "Robust Exception Handling", "Zero Manual Overhead Tasks"]
  },
  {
    icon: <Layers size={20} />,
    title: "Landing Pages & Funnels",
    desc: "Sleek, high-converting checkout landing layouts customized to capture immediate traffic for ad campaigns.",
    benefits: ["A/B Testing Optimized Structure", "Custom Conversion Pixels", "Fast Page Loading Speeds"]
  },
  {
    icon: <Cpu size={20} />,
    title: "Dashboard Development",
    desc: "Operational admin boards translating raw metrics into searchable graphs, clean tables, and downloadable reports.",
    benefits: ["Interactive Chart Components", "Excel/PDF Export Triggers", "Minimalist Clean Grids"]
  }
];

// ── Industries Data ──────────────────────────────────────────
const industries = [
  { icon: "🏢", name: "Real Estate", desc: "Digital systems showcasing listings, managing agents, and acquiring buyers." },
  { icon: "🚀", name: "Startups", desc: "Rapid MVP development and cloud setups to prove product-market fit fast." },
  { icon: "🏪", name: "Small Businesses", desc: "Web presence and booking tools to turn local lookups into paying clients." },
  { icon: "✨", name: "Personal Brands", desc: "Sleek portfolios displaying expertise to unlock consultation bookings." },
  { icon: "💼", name: "Professional Services", desc: "Conversion funnels for consultancies, recruiters, and agency partners." },
  { icon: "🛒", name: "E-Commerce", desc: "Storefronts built for page speed, seamless checkout, and checkout retention." }
];

const WHATSAPP_CONSULTATION_URL = "https://wa.me/919597482991?text=" + encodeURIComponent(
  "Hello Santhosh,\n\nI visited your portfolio and I'm interested in discussing a project with Reliable Vision Web Studio.\n\nI would like to schedule a consultation regarding my requirements.\n\nPlease let me know a convenient time to connect.\n\nThank you."
);

const WHATSAPP_GENERAL_URL = "https://wa.me/919597482995?text=" + encodeURIComponent(
  "Hello Santhosh,\n\nI found your portfolio and would like to discuss a potential project.\n\nPlease share more details about your services.\n\nThank you."
);

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Return early on touch devices to avoid page-level re-render loops on mobile swipe/scrolling
      if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
        return;
      }
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <SmoothScroll />

      {/* ── STICKY NAVBAR ──────────────────────────────────────── */}
      <header className="header">
        <div className="container nav-container">
          <Link href="#" className="logo">
            Santhosh R <span className="logo-dot" />
          </Link>
          
          <ul className="nav-menu">
            <li><Link href="#about" className="nav-link">About</Link></li>
            <li><Link href="#projects" className="nav-link">Projects</Link></li>
            <li><Link href="#services" className="nav-link">Services</Link></li>
            <li><Link href="#experience" className="nav-link">Experience</Link></li>
            <li><Link href="#contact" className="nav-link">Contact</Link></li>
            
            <li className="nav-social-divider" style={{ width: "1px", height: "16px", background: "var(--border)", margin: "0 4px" }} />
            
            {/* Header Sticky Social Links (Top of website) */}
            <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a href="https://github.com/santhoshraghuraman" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/santhosh-0407rv/" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="WhatsApp" aria-label="WhatsApp">
                <WhatsAppIcon size={16} />
              </a>
              <a href="mailto:santhosh.rv.work@gmail.com" className="hero-social-link" title="Email" aria-label="Email">
                <Mail size={16} />
              </a>
            </li>
            
            <li className="nav-social-divider" style={{ width: "1px", height: "16px", background: "var(--border)", margin: "0 4px" }} />
            
            <li>
              <a 
                href={WHATSAPP_CONSULTATION_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
                id="btn-nav-call"
              >
                Book a Consultation
              </a>
            </li>
          </ul>

          {/* Mobile CTA (Visible only on mobile/tablet) */}
          <div className="nav-mobile-cta">
            <a 
              href={WHATSAPP_CONSULTATION_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
              id="btn-nav-call-mobile"
            >
              Consult
            </a>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: "72px" }}>
        
        {/* ── HERO SECTION ───────────────────────────────────────── */}
        <section className="section hero-section-wrapper" id="home">
          {/* Ambient Background Effects */}
          <div className="hero-bg-effects">
            <div className="bg-glow-1" />
            <div className="bg-glow-2" />
            <div className="bg-noise" />
            <div className="floating-particle p1" />
            <div className="floating-particle p2" />
            <div className="floating-particle p3" />
          </div>

          <div className="container">
            <div className="hero-layout">
              {/* Left Content */}
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="badge badge-success">
                  <span className="badge-dot pulse" />
                  Available for Freelance Projects
                </div>
                
                <h1 className="hero-title">
                  Transforming Business Ideas Into Modern Digital Experiences.
                </h1>
                
                <p className="hero-subtitle">
                  Helping businesses, startups and entrepreneurs build high-performance websites, scalable applications and automation solutions that drive measurable results.
                </p>

                <div className="hero-ctas">
                  <Link href="#projects" className="btn btn-primary" id="btn-hero-projects">
                    View Projects
                  </Link>
                  <a href={WHATSAPP_CONSULTATION_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="btn-hero-contact">
                    Book a Consultation
                  </a>
                </div>

                {/* Hero Social Dock (Upgraded Glass Container) */}
                <div className="hero-social-dock glass-dock">
                  <a href="https://github.com/santhoshraghuraman" target="_blank" rel="noopener noreferrer" className="hero-dock-item" id="hero-dock-github">
                    <GithubIcon size={16} /> <span>GitHub</span>
                  </a>
                  <div className="hero-dock-divider" />
                  <a href="https://www.linkedin.com/in/santhosh-0407rv/" target="_blank" rel="noopener noreferrer" className="hero-dock-item" id="hero-dock-linkedin">
                    <LinkedinIcon size={16} /> <span>LinkedIn</span>
                  </a>
                  <div className="hero-dock-divider" />
                  <a href="https://drive.google.com/file/d/1AhgVqeseo3t0E9EiUEFDuETfuznnLZdd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-dock-item" id="hero-dock-resume">
                    <FileText size={16} /> <span>Resume</span>
                  </a>
                  <div className="hero-dock-divider" />
                  <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="hero-dock-item" id="hero-dock-whatsapp">
                    <WhatsAppIcon size={15} /> <span>WhatsApp</span>
                  </a>
                  <div className="hero-dock-divider" />
                  <a href="mailto:santhosh.rv.work@gmail.com" className="hero-dock-item" id="hero-dock-email">
                    <Mail size={15} /> <span>Email</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Visual (Signature Visual Identity: Portrait with Animated Rings and Floating Cards) */}
              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="hero-visual-content">
                  
                  <div className="profile-floating-wrapper">
                    {/* Premium circular profile image with mouse tilt */}
                    <div 
                      className="profile-image-container"
                      style={{
                        transform: `translate3d(${mousePos.x * 12}px, ${-mousePos.y * 12}px, 0) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
                        transition: "transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)"
                      }}
                    >
                      {/* Glowing background - nested to stay centered */}
                      <div className="profile-glow-bg" />
                      
                      {/* Animated rotating rings - nested to prevent mobile oval distortion */}
                      <div className="ring-outer" />
                      <div className="ring-second" />

                      <div className="profile-avatar-wrapper">
                        <Image src="/profile.png" alt="Santhosh R — AI & Full Stack Developer" width={360} height={360} priority />
                      </div>
                    </div>

                    {/* Floating Professional Badge */}
                    <div className="floating-badge-card glass-card float-slow">
                      <span className="badge-pulse-dot" />
                      <div className="badge-text-group">
                        <div className="badge-title">AI &amp; Full Stack Developer</div>
                        <div className="badge-status">Available Now</div>
                      </div>
                    </div>

                    {/* Project Credibility Card */}
                    <a href="https://www.nearva.in" target="_blank" rel="noopener noreferrer" className="credibility-showcase-card glass-card float-delayed">
                      <div className="credibility-header">
                        <span className="credibility-tag">Latest Project</span>
                        <span className="credibility-arrow">Live Demo →</span>
                      </div>
                      <h3 className="credibility-title">Nearva</h3>
                      <p className="credibility-desc">Hyperlocal Services Platform</p>
                    </a>

                  </div>

                  {/* Floating Glass Information Card */}
                  <div className="capabilities-glass-card glass-card">
                    <h3 className="capabilities-title">Focus &amp; Capabilities</h3>
                    <ul className="capabilities-list">
                      <li>
                        <span className="cap-icon-check">✓</span>
                        <span>Available for Freelance Projects</span>
                      </li>
                      <li>
                        <span className="cap-icon-check">✓</span>
                        <span>Business Websites</span>
                      </li>
                      <li>
                        <span className="cap-icon-check">✓</span>
                        <span>AI Solutions</span>
                      </li>
                      <li>
                        <span className="cap-icon-check">✓</span>
                        <span>Automation Systems</span>
                      </li>
                      <li>
                        <span className="cap-icon-check">✓</span>
                        <span>Full Stack Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATISTICS SECTION ─────────────────────────────────── */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-number">
                  <AnimatedCounter target={5} suffix="+" />
                </div>
                <div className="trust-label">Projects Built</div>
              </div>
              <div className="trust-card">
                <div className="trust-number">
                  <AnimatedCounter target={4} suffix="+" />
                </div>
                <div className="trust-label">Web Applications</div>
              </div>
              <div className="trust-card">
                <div className="trust-number">
                  <AnimatedCounter target={12} suffix="+" />
                </div>
                <div className="trust-label">Technologies Used</div>
              </div>
              <div className="trust-card">
                <div className="trust-number">
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className="trust-label">Continuous Learning</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ──────────────────────────────────────── */}
        <section id="about" className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="about-grid">
              {/* Left narrative */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label">Professional Background</span>
                <h2>Architecting Premium Web Applications &amp; Automated Systems</h2>
                <div className="about-introduction" style={{ marginTop: "1.25rem" }}>
                  <p>
                    I am a software developer specializing in building clean, high-performance web products that solve clear business problems. By bridging full-stack engineering with automation and AI features, I design software that saves hours of manual labor and improves conversion rates.
                  </p>
                  <p>
                    Whether engineering location-based marketplaces, overseas recruitment tools, or optimized e-commerce checkouts, I prioritize system reliability, SEO ranking, and premium UI experiences.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <Link href="#contact" className="btn btn-primary" id="btn-about-cta">
                    Work With Me
                  </Link>
                </div>
              </motion.div>

              {/* Right metrics */}
              <div className="about-stats-grid">
                <div className="about-stat-card">
                  <div className="about-stat-number">5+</div>
                  <div className="about-stat-label">Projects Completed</div>
                  <div className="about-stat-desc">Shipped in production</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">12+</div>
                  <div className="about-stat-label">Technologies Mastered</div>
                  <div className="about-stat-desc">Across client &amp; server</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">4+</div>
                  <div className="about-stat-label">Business Solutions Created</div>
                  <div className="about-stat-desc">Targeted operational growth</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">100%</div>
                  <div className="about-stat-label">Commitment Level</div>
                  <div className="about-stat-desc">Dedicated partnership</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE SANTHOSH R ───────────────────────────────── */}
        <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Personal Branding</span>
              <h2>Why Choose Santhosh R</h2>
              <p>Positioning custom software development as a high-return asset for your startup or business.</p>
            </div>

            <div className="why-choose-grid">
              <div className="why-choose-card">
                <div className="why-choose-icon-box">
                  <TrendingUp size={20} />
                </div>
                <h3 className="why-choose-title">Business-Focused Solutions</h3>
                <p className="why-choose-desc">Every line of code is written to solve a business problem—whether reducing checkout drops, automating data entry, or acquiring inbound leads.</p>
              </div>

              <div className="why-choose-card">
                <div className="why-choose-icon-box">
                  <Briefcase size={20} />
                </div>
                <h3 className="why-choose-title">Real-World Project Experience</h3>
                <p className="why-choose-desc">I build systems that handle real operations—like overseas recruitment parsing engines, spatial matching databases, and organic product storefronts.</p>
              </div>

              <div className="why-choose-card">
                <div className="why-choose-icon-box">
                  <Smartphone size={20} />
                </div>
                <h3 className="why-choose-title">Mobile-First Development</h3>
                <p className="why-choose-desc">Optimizing Core Web Vitals to deliver high-speed, responsive mobile apps that capture organic traffic and rank higher on search engines.</p>
              </div>

              <div className="why-choose-card">
                <div className="why-choose-icon-box">
                  <Layers size={20} />
                </div>
                <h3 className="why-choose-title">Modern Technologies</h3>
                <p className="why-choose-desc">Utilizing robust frameworks like Next.js, React, Node.js, and MongoDB to compile clean, extendable codebases built to scale.</p>
              </div>

              <div className="why-choose-card">
                <div className="why-choose-icon-box">
                  <MessageSquare size={20} />
                </div>
                <h3 className="why-choose-title">Fast Communication</h3>
                <p className="why-choose-desc">Direct partnership with no intermediary agencies. You get clear timelines, transparent milestone reports, and immediate developer replies.</p>
              </div>

              <div className="why-choose-card">
                <div className="why-choose-icon-box">
                  <Shield size={20} />
                </div>
                <h3 className="why-choose-title">Long-Term Support</h3>
                <p className="why-choose-desc">My work doesn't stop at deployment. I offer post-launch maintenance, analytics tracking setups, and scalable system updates as you grow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: WHAT I BUILD ──────────────────────────────── */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Offerings</span>
              <h2>What I Build</h2>
              <p>Tailored digital systems designed to drive sales, optimize data storage, and automate background operational flows.</p>
            </div>

            <div className="what-i-build-grid">
              {whatIBuild.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="build-card">
                    <div className="build-icon-wrapper">{item.icon}</div>
                    <h3 className="build-title">{item.title}</h3>
                    <p className="build-desc">{item.desc}</p>
                    <div className="build-features">
                      {item.features.map((feature) => (
                        <div key={feature} className="build-feature-item">
                          <Check size={14} className="build-feature-check" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION: MY DEVELOPMENT PROCESS ────────────────────── */}
        <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Workflow</span>
              <h2>My Development Process</h2>
              <p>A structured six-step engineering pipeline ensuring transparent milestones, rigorous validation, and clean deployments.</p>
            </div>

            <div className="process-grid">
              {developmentProcess.map((proc, index) => (
                <motion.div
                  key={proc.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="process-card">
                    <div className="process-step-num">{proc.step}</div>
                    <h3 className="process-title">{proc.title}</h3>
                    <p className="process-desc">{proc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGY ECOSYSTEM ───────────────────────────────── */}
        <section id="skills" className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Ecosystem</span>
              <h2>Interactive Technology Ecosystem</h2>
              <p>Explore the categories of developer frameworks, languages, and cloud systems utilized to construct business assets.</p>
            </div>

            <div className="visual-tech-grid">
              {ecosystem.map((cat, index) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="visual-tech-card">
                    <div className="visual-tech-icon-container">
                      {cat.icon}
                    </div>
                    <h3 className="visual-tech-title">{cat.title}</h3>
                    <div className="visual-tech-tags">
                      {cat.items.map((item) => (
                        <span key={item} className="visual-tech-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE TIMELINE ────────────────────────────────── */}
        <Timeline />

        {/* ── PREMIER PRODUCT SPOTLIGHT (NEARVA) ─────────────────── */}
        <section className="section" style={{ background: "var(--bg)", paddingBottom: 0 }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Premier Product Spotlight</span>
              <h2>Featured Project Showcase</h2>
              <p>An in-depth look at Santhosh R's premier startup marketplace built to facilitate hyperlocal transactions at scale.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="spotlight-card"
            >
              {/* Left Cinematic Image */}
              <div className="spotlight-img-wrapper">
                <div className="phone-mockup">
                  <div className="phone-dynamic-island" />
                  <div className="phone-screen">
                    <Image src="/nearva-thumbnail.png" alt="Nearva — Hyperlocal Discovery Platform" width={330} height={670} style={{ objectFit: "cover" }} />
                  </div>
                </div>
              </div>

              {/* Right Details */}
              <div className="spotlight-info">
                <div className="spotlight-badge">
                  <Rocket size={13} /> Startup Founder Project
                </div>
                <h3 className="spotlight-title">Nearva</h3>
                
                <p className="spotlight-overview">
                  Nearva is a hyperlocal discovery engine matching users with local verified service professionals. Engineered location indexing, real-time spatial lookups, and automated checkout funnels to manage active search queries.
                </p>

                <div className="spotlight-impact-box">
                  <div className="spotlight-impact-title">Business Impact</div>
                  <div className="spotlight-impact-text">
                    Reduced provider matchmaking search time from hours to under 3 minutes, processing localized location transactions securely.
                  </div>
                </div>

                <div className="spotlight-outcomes">
                  <div className="spotlight-outcome-title">Project Outcomes</div>
                  <div className="spotlight-outcome-item">
                    <CheckCircle2 size={14} className="spotlight-outcome-icon" />
                    <span>Built custom spatial database query system handling 3,000+ local searches.</span>
                  </div>
                  <div className="spotlight-outcome-item">
                    <CheckCircle2 size={14} className="spotlight-outcome-icon" />
                    <span>Maintained 99.9% uptime for edge-hosted serverless backend routes.</span>
                  </div>
                  <div className="spotlight-outcome-item">
                    <CheckCircle2 size={14} className="spotlight-outcome-icon" />
                    <span>Structured responsive layouts achieving fast checkout conversion.</span>
                  </div>
                </div>

                <div className="project-techs" style={{ marginBottom: "1.75rem", marginTop: 0 }}>
                  <span className="project-tech-pill">Next.js</span>
                  <span className="project-tech-pill">Node.js</span>
                  <span className="project-tech-pill">PostgreSQL</span>
                  <span className="project-tech-pill">Google Maps API</span>
                  <span className="project-tech-pill">Vercel</span>
                </div>

                <div className="project-ctas">
                  <a
                    href="https://www.nearva.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Launch Nearva &nbsp;<ExternalLink size={12} />
                  </a>
                  <a
                    href="https://github.com/santhoshraghuraman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={14} /> Repository
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-secondary btn-sm"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS GRID (2 Larger Cards Upgrade) ────── */}
        <section id="projects" className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Case Studies</span>
              <h2>Featured Projects</h2>
              <p>A showcase of professional web applications deployed in production, engineered for speed and concrete business metrics.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <InteractiveCard>
                    <div className="project-card">
                      <div className="project-img-wrapper">
                        <Image src={project.img} alt={project.alt} width={600} height={338} loading="lazy" style={{ objectFit: "cover" }} />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc" style={{ marginBottom: "1.5rem" }}>{project.desc}</p>
                        
                        <div className="project-techs" style={{ marginBottom: "1.5rem", marginTop: "auto" }}>
                          {project.tech.map((t) => (
                            <span key={t} className="project-tech-pill">{t}</span>
                          ))}
                        </div>

                        <div className="project-ctas">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                            id={`btn-project-demo-${index}`}
                          >
                            Live Demo &nbsp;<ExternalLink size={12} />
                          </a>
                          <a
                            href="https://github.com/santhoshraghuraman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm"
                            id={`btn-project-repo-${index}`}
                          >
                            <GithubIcon size={14} /> Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ───────────────────────────────────── */}
        <section id="services" className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Consulting &amp; Engineering</span>
              <h2>Services</h2>
              <p>Professional services targeting concrete business metrics: user sign-ups, operational savings, and digital authority.</p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                    <div className="services-benefits">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="service-benefit-item">
                          <Check size={14} className="service-benefit-check" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUCCESS STORIES (V5 Metric Upgrade) ────────────────── */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Proven Outcomes</span>
              <h2>Success Stories</h2>
              <p>A detailed breakdown of complex problems resolved through custom software design and architecture.</p>
            </div>

            <div className="highlights-grid">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="highlight-card">
                    <div className="highlight-info-col">
                      <h3 className="highlight-title">{story.title}</h3>
                      
                      <div className="highlight-section">
                        <span className="highlight-section-label">Challenge</span>
                        <p className="highlight-section-text">{story.challenge}</p>
                      </div>

                      <div className="highlight-section">
                        <span className="highlight-section-label">Solution</span>
                        <p className="highlight-section-text">{story.solution}</p>
                      </div>

                      <div className="highlight-section">
                        <span className="highlight-section-label">Result</span>
                        <p className="highlight-section-text">{story.result}</p>
                      </div>
                    </div>

                    <div className="success-metric-box">
                      <div className="success-metric-num">{story.metric}</div>
                      <div className="success-metric-label">{story.metricLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES SECTION ─────────────────────────────────── */}
        <section className="section industries-section">
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Target Verticals</span>
              <h2>Industries I Work With</h2>
              <p>Creating customized digital platforms engineered for the unique demands of these key business areas.</p>
            </div>

            <div className="industries-grid">
              {industries.map((ind, index) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="industry-card">
                    <div className="industry-icon-box">{ind.icon}</div>
                    <h3 className="industry-name">{ind.name}</h3>
                    <p className="industry-desc">{ind.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS & TECHNOLOGIES I USE (V5 Final Upgrade) ───────── */}
        <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-header center">
              <span className="section-label">Stack &amp; Tools</span>
              <h2>Tools &amp; Technologies I Use</h2>
              <p>Industry-standard frameworks and platforms engineered to compile high-performing business software.</p>
            </div>

            <div className="tech-use-grid">
              {techTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="tech-use-card">
                    <div className="tech-use-icon">
                      {tool.icon}
                    </div>
                    <h3 className="tech-use-name">{tool.name}</h3>
                    <div className="tech-use-role">{tool.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT SECTION ────────────────────────────────────── */}
        <section id="contact" className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="contact-card">
              <span className="section-label">Get in touch</span>
              <h2 className="contact-title">Let's Build Something Exceptional.</h2>
              <p className="contact-desc">
                Whether you need a business website, automation system, AI solution or custom application, let's discuss your project.
              </p>
              
              <div className="contact-grid-ctas">
                {/* Main CTAs */}
                <div className="contact-buttons-row">
                  <a
                    href={WHATSAPP_GENERAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id="btn-contact-whatsapp"
                    style={{ padding: "0.75rem 1.75rem" }}
                  >
                    <WhatsAppIcon /> WhatsApp Me
                  </a>
                  <a
                    href={WHATSAPP_CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="btn-contact-consultation"
                    style={{ padding: "0.75rem 1.75rem" }}
                  >
                    <Calendar size={16} /> Book a Consultation
                  </a>
                  <a
                    href="mailto:santhosh.rv.work@gmail.com"
                    className="btn btn-secondary"
                    id="btn-contact-email"
                    style={{ padding: "0.75rem 1.75rem" }}
                  >
                    <Mail size={16} /> Email Me
                  </a>
                </div>

                {/* Social & Resume Links */}
                <div className="contact-socials-row">
                  <a href="https://github.com/santhoshraghuraman" target="_blank" rel="noopener noreferrer" className="contact-social-link" id="contact-social-github">
                    <GithubIcon size={16} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/santhosh-0407rv/" target="_blank" rel="noopener noreferrer" className="contact-social-link" id="contact-social-linkedin">
                    <LinkedinIcon size={16} /> LinkedIn
                  </a>
                  <a href="https://drive.google.com/file/d/1AhgVqeseo3t0E9EiUEFDuETfuznnLZdd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-social-link" id="contact-social-resume">
                    <FileText size={16} /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER (V5 Re-aligned 3-column footer) ─────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Left Brand Column */}
            <div className="footer-col">
              <div className="footer-brand">
                Santhosh R <span className="logo-dot" />
              </div>
              <p className="footer-brand-statement" style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                AI &amp; Full Stack Developer
              </p>
              <p className="footer-brand-statement">
                Building modern, high-performance digital experiences and automation systems for startups and local businesses.
              </p>
            </div>

            {/* Center Quick Links Column */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link href="#about">About Me</Link></li>
                <li><Link href="#projects">Projects Showcase</Link></li>
                <li><Link href="#services">My Services</Link></li>
                <li><Link href="#contact">Contact Me</Link></li>
              </ul>
            </div>

            {/* Right Socials Column */}
            <div className="footer-col">
              <h3 className="footer-title">Social Presences</h3>
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/santhoshraghuraman" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/santhosh-0407rv/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon size={14} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1AhgVqeseo3t0E9EiUEFDuETfuznnLZdd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FileText size={14} /> Resume
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={14} /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} Santhosh R. All rights reserved.
            </div>
            <div className="footer-copy" style={{ fontSize: "0.82rem" }}>
              Designed with premium Apple + Stripe light mode aesthetics.
            </div>
          </div>
        </div>
      </footer>

      {/* JSON-LD Person Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Santhosh R",
            "url": "https://santhosh-portfolio.vercel.app",
            "image": "https://santhosh-portfolio.vercel.app/profile.png",
            "jobTitle": "AI & Full Stack Developer",
            "description": "Santhosh R is a professional AI & Full Stack Developer building modern websites, scalable applications, and automation solutions.",
            "sameAs": [
              "https://github.com/santhoshraghuraman",
              "https://www.linkedin.com/in/santhosh-0407rv/"
            ],
            "knowsAbout": [
              "Full Stack Web Development",
              "Artificial Intelligence Integration",
              "Business Websites",
              "Automation Systems",
              "Next.js",
              "React",
              "Node.js",
              "PostgreSQL",
              "MongoDB"
            ]
          })
        }}
      />
    </>
  );
}
