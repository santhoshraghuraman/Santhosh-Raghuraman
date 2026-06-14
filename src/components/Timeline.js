"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    role: "Founding Full-Stack Developer",
    organization: "Nearva",
    duration: "2024 – Present",
    contributions: "Designed and engineered the end-to-end hyperlocal service marketplace. Designed the core location-indexing pipelines, real-time matchmaking algorithms, and payment checkout flows to maintain system responsiveness on weak mobile networks.",
    highlights: [
      "Built a PostgreSQL spatial database index, cutting location query lookups from seconds to milliseconds.",
      "Integrated Google Maps API routing and secure checkout, supporting localized searches.",
      "Achieved 99.9% API uptime on edge-hosted serverless backend routes."
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "Vercel", "Tailwind CSS"]
  },
  {
    role: "Independent Freelance Developer",
    organization: "Contract Projects",
    duration: "2023 – 2024",
    contributions: "Partnered directly with startup founders and local business heads to deliver custom marketing websites, SaaS MVPs, and automated admin dashboards. Structured layouts for SEO compliance and direct lead capture.",
    highlights: [
      "Delivered GroundX Vellore real estate portal, ranking on Google Page 1 and capturing 40+ direct leads in Month 1.",
      "Overhauled Your Green Foods checkout flow, increasing checkout completion conversion rate by 28%.",
      "Constructed Al Madina Consultants海外 recruiting database parser, saving agency workers 15+ hours weekly."
    ],
    technologies: ["React", "Next.js", "MongoDB", "Express.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    role: "Frontend Developer & Learner",
    organization: "Self-Directed Study",
    duration: "2022 – 2023",
    contributions: "Studied clean system engineering, responsive styling standards, database normalization, and secure authentication protocols. Built open-source packages and developer tool integrations.",
    highlights: [
      "Mastered advanced React hook structures, Next.js rendering paths, and clean component decoupling.",
      "Authored custom starter templates and script automations to speed up bootstrap time for new projects."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Git & GitHub"]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Milestones</span>
          <h2>Professional Experience</h2>
          <p>A history of engineering products, scaling backends, and partnering with businesses to ship production software.</p>
        </div>

        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-card">
                {/* Left side: Duration & Company */}
                <div className="experience-meta">
                  <span className="experience-duration" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <h3 className="experience-company">{exp.organization}</h3>
                </div>

                {/* Right side: Role, Contributions & Highlights */}
                <div>
                  <h4 className="experience-role" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Briefcase size={16} style={{ color: "var(--primary)" }} /> {exp.role}
                  </h4>
                  <p className="experience-impact">{exp.contributions}</p>
                  
                  <div className="experience-highlights-title">Key Achievement Highlights</div>
                  <ul className="experience-highlights-list">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="experience-highlight-item">
                        <CheckCircle2 size={13} className="experience-highlight-bullet" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="experience-techs">
                    {exp.technologies.map((t) => (
                      <span key={t} className="experience-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
