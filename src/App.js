import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, ChevronDown, Code, Brain, Cloud, ArrowRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Research Assistant",
      organization: "Binghamton University",
      type: "Independent Study",
      period: "February 2026 - Present",
      location: "Binghamton, NY",
      description: "Performing research on multimodal brain imaging data fusion to identify biomarkers in mental illness. Applying machine learning and statistical methods (ICA, CCA) to analyze fMRI, sMRI, and dMRI data, investigating brain structure-function relationships in psychiatric disorders.",
      icon: Brain,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Student Assistant",
      organization: "Binghamton University - School of Management",
      type: "Independent Study",
      period: "February 2025 - Present",
      location: "Binghamton, NY",
      description: "Developing a GenAI chatbot platform for behavioral research experiments using Python, JavaScript, LLM APIs, Postgres. Implementing conversation logging, data storage, and export functionality with configurable system prompts for human-AI interaction studies.",
      icon: Code,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Senior .NET Full-Stack Web Developer",
      organization: "Happiest Minds Technologies",
      type: "Full-time",
      period: "August 2022 - December 2024",
      location: "Bengaluru, Karnataka",
      description: "Worked on RVO Health's HealthGrades Portal. Developed RESTful APIs using C#/.NET Core with SQL Server and React. Implemented automated data validation and batch editing workflows reducing admin workload by 60%. Built secure MFA using Twilio API. Redesigned React components with responsive design. Optimized SQL/Solr queries and API endpoints for high-traffic environments. Supported AWS-based CI/CD pipelines.",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const skills = {
    "Languages & Web": ["C#", "Python", "JavaScript", "SQL", "HTML5/CSS3"],
    "Frameworks": [".NET Core", "ASP.NET MVC", "React", "Redux", "Entity Framework", "LINQ", "Bootstrap", "Flask", "FastAPI"],
    "Databases & Cloud": ["Microsoft SQL Server", "MySQL", "Postgres", "Google Cloud Platform (GCP)", "AWS (EC2, RDS, S3, IAM, CloudWatch)"],
    "DevOps & Tools": ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Swagger", "Postman", "Visual Studio", "VS Code", "Jira"],
    "Machine Learning & AI": ["LLM APIs", "Prompt Engineering", "PyTorch", "Scikit-Learn", "NumPy", "Supervised/Unsupervised Learning", "Regression", "Classification"],
    "Practices": ["RESTful APIs", "Responsive Design", "Authentication/Authorization", "Agile/Scrum", "TDD"]
  };

  const projects = [
    {
      title: "RVO Health 'HealthGrades' Portal",
      tech: "C#/.NET Core, React, SQL Server, AWS",
      description: "Built role-based data management features for large-scale healthcare portal, optimizing SQL queries and API endpoints for improved performance.",
      gradient: "from-rose-500/20 to-orange-500/20"
    },
    {
      title: "Machine Learning Projects",
      tech: "Python, PyTorch, NumPy, Scikit-Learn",
      description: "Implemented classification models (linear/logistic regression, Naive Bayes) from scratch and developed deep learning image classifiers on CIFAR-10 dataset using PyTorch with cross-validation and performance evaluation.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Cloud & Kubernetes Deployment",
      tech: "GCP, Docker, Kubernetes, Flask, MongoDB",
      description: "Deployed two-tier chat application on GCP using Flask/MongoDB, containerized with Docker, and managed via three-node Kubernetes cluster with Deployments, Services, and Persistent Volumes.",
      gradient: "from-violet-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          background: #000;
        }

        .font-display {
          font-family: 'Crimson Pro', serif;
        }

        .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        /* Custom Cursor */
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease;
          mix-blend-mode: difference;
        }

        .cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.2s ease;
          mix-blend-mode: difference;
        }

        .cursor-hover .cursor-outline {
          width: 64px;
          height: 64px;
          border-color: rgba(6, 182, 212, 0.8);
        }
        
        /* Animated gradient background */
        .gradient-bg {
          background: radial-gradient(ellipse at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* Grid overlay */
        .grid-overlay {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridFloat 20s linear infinite;
        }
        
        @keyframes gridFloat {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        /* Noise texture */
        .noise-texture::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.7;
          pointer-events: none;
        }
        
        /* Fade in animations */
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        /* Glow effects */
        .glow-text {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
                       0 0 40px rgba(59, 130, 246, 0.3);
        }

        .glow-cyan {
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.3),
                      0 0 60px rgba(6, 182, 212, 0.15);
        }
        
        /* Card hover effects */
        .card-hover {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .card-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 60px -15px rgba(59, 130, 246, 0.3),
                      0 0 0 1px rgba(59, 130, 246, 0.1);
        }

        .card-hover:hover::before {
          opacity: 1;
        }
        
        /* Nav link effects */
        .nav-link {
          position: relative;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Button glow */
        .btn-glow {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          transition: all 0.3s ease;
        }

        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-glow:hover::before {
          left: 100%;
        }

        .btn-glow:hover {
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.6),
                      0 0 60px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        /* Skill tag */
        .skill-tag {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        /* Section title */
        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff 0%, #06b6d4 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          border-radius: 2px;
        }

        /* Parallax effect */
        .parallax {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Custom cursor elements */}
      <div 
        className="cursor-dot" 
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
        }}
      />
      <div 
        className={`cursor-outline ${cursorVariant}`}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`
        }}
      />

      {/* Background layers */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      <div className="fixed inset-0 grid-overlay pointer-events-none" />
      <div className="fixed inset-0 noise-texture pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-display text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                KHJ
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                  onMouseEnter={() => setCursorVariant('cursor-hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-white/10 pt-6">
              {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="fade-in-up stagger-1">
            <div className="inline-block mb-6">
              <span className="font-mono text-cyan-400 text-sm tracking-wider px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10">
                FULL-STACK DEVELOPER • ML RESEARCHER
              </span>
            </div>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 fade-in-up stagger-2">
            <span className="block glow-text">Kavya Hosamane</span>
            <span className="block text-5xl md:text-7xl mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Jayanna
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 fade-in-up stagger-3">
            Building intelligent systems at the intersection of{' '}
            <span className="text-cyan-400 font-semibold">machine learning</span>,{' '}
            <span className="text-blue-400 font-semibold">cloud computing</span>, and{' '}
            <span className="text-purple-400 font-semibold">full-stack development</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up stagger-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-glow px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
              onMouseEnter={() => setCursorVariant('cursor-hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Get in Touch <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
              onMouseEnter={() => setCursorVariant('cursor-hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              View Projects
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 fade-in-up stagger-5">
            <a
              href="https://linkedin.com/in/kavya-h-j-70366014b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              onMouseEnter={() => setCursorVariant('cursor-hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:khj@binghamton.edu"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              onMouseEnter={() => setCursorVariant('cursor-hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title font-display mb-16 fade-in-scale">About</h2>
          
          {/* Profile Image Section */}
          <div className="flex justify-center mb-16 fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-black bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <img 
                src="/profile.jpeg"
                alt="Kavya Hosamane Jayanna"
                className="w-full h-full object-cover object-top scale-110"
                style={{ objectPosition: '50% 20%' }}
              />
   </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover p-8 rounded-2xl fade-in-up stagger-1">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-xl w-fit mb-6">
                <Code className="text-cyan-400" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Full-Stack Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Expert in building scalable web applications with .NET, React, and cloud technologies. 
                Proven track record of optimizing performance and delivering robust solutions.
              </p>
            </div>

            <div className="card-hover p-8 rounded-2xl fade-in-up stagger-2">
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-4 rounded-xl w-fit mb-6">
                <Brain className="text-purple-400" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Machine Learning Research</h3>
              <p className="text-gray-400 leading-relaxed">
                Applying ML and statistical methods to complex medical imaging data. 
                Investigating brain structure-function relationships in psychiatric disorders.
              </p>
            </div>

            <div className="card-hover p-8 rounded-2xl fade-in-up stagger-3">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-4 rounded-xl w-fit mb-6">
                <Cloud className="text-emerald-400" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Cloud & DevOps</h3>
              <p className="text-gray-400 leading-relaxed">
                AWS Certified with experience in containerization, orchestration, and CI/CD pipelines. 
                Building resilient, scalable cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title font-display mb-16 fade-in-scale">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="card-hover p-8 rounded-2xl fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`bg-gradient-to-br ${exp.color} p-4 rounded-xl h-fit`}>
                      <Icon className="text-white" size={40} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="font-display text-3xl font-semibold mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 text-lg font-semibold">{exp.organization}</p>
                          <p className="text-gray-500 font-mono text-sm mt-1">{exp.type}</p>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0">
                          <p className="text-gray-400 font-mono text-sm">{exp.period}</p>
                          <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title font-display mb-16 fade-in-scale">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="card-hover p-6 rounded-2xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-2xl font-semibold mb-6 text-cyan-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="skill-tag px-3 py-2 rounded-lg font-mono text-xs"
                      onMouseEnter={() => setCursorVariant('cursor-hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center fade-in-up stagger-6">
            <div className="card-hover px-8 py-4 rounded-full flex items-center gap-3 glow-cyan">
              <Sparkles className="text-cyan-400" size={24} />
              <span className="font-display text-xl font-semibold text-cyan-400">
                AWS Certified Cloud Practitioner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title font-display mb-16 fade-in-scale">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-hover p-8 rounded-2xl group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${project.gradient} p-6 rounded-xl mb-6 group-hover:scale-105 transition-transform`}>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="font-mono text-sm text-cyan-400 mb-4">{project.tech}</p>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title font-display mb-16 fade-in-scale">Education</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-hover p-10 rounded-2xl fade-in-up">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <h3 className="font-display text-4xl font-semibold mb-3">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-cyan-400 text-xl font-semibold">Binghamton University, SUNY</p>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <p className="text-gray-400 font-mono">Expected December 2026</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                    GPA: 3.9/4.00
                  </p>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-display text-xl font-semibold mb-4 text-gray-300">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Design and Analysis of Algorithms",
                    "Machine Learning",
                    "Deep Learning",
                    "Cloud Computing",
                    "GenAI",
                    "Programming for Web",
                    "Design Patterns"
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="skill-tag px-4 py-2 rounded-lg"
                      onMouseEnter={() => setCursorVariant('cursor-hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title font-display mb-8 fade-in-scale">Let's Connect</h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed fade-in-up stagger-1">
            I'm always interested in new opportunities, collaborations, and conversations about 
            technology, machine learning, and software development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:khj@binghamton.edu"
              className="card-hover p-6 rounded-2xl flex items-center justify-center gap-4 group fade-in-up stagger-2"
              onMouseEnter={() => setCursorVariant('cursor-hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-lg font-mono">khj@binghamton.edu</span>
            </a>
            
            <a
              href="https://linkedin.com/in/kavya-h-j-70366014b/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover p-6 rounded-2xl flex items-center justify-center gap-4 group fade-in-up stagger-3"
              onMouseEnter={() => setCursorVariant('cursor-hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Linkedin className="text-cyan-400 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-lg font-mono">Connect on LinkedIn</span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 fade-in-up stagger-4">
            <p className="text-gray-500 font-mono">
              📍 Binghamton, NY · (607) 245-0345
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <p className="text-gray-500 font-mono">
          © 2026 Kavya Hosamane Jayanna. Crafted with precision.
        </p>
      </footer>
    </div>
  );
}
