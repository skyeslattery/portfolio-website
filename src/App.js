import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "OneStream Software",
      period: "May 2025 - Aug 2025",
      description: [
        "Transformed Postman-based API workflows into scalable RestSharp test suite using C#",
        "Collaborated with QA and DevOps teams for robust regression testing",
        "Contributed to enterprise-level financial planning and analytics software"
      ]
    },
    {
      title: "Backend Developer",
      company: "Cornell App Development",
      period: "Sep 2024 - Present",
      description: [
        "Lead backend development for apps used by 50%+ of Cornell undergraduates",
        "Teach backend concepts to 70+ students including distributed systems and API design",
        "Improved Score app data retrieval speed by 300% through GraphQL and MongoDB optimization"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Astrodoc",
      period: "Oct 2024 - May 2025",
      description: [
        "Built next-gen healthcare super app with 15-person cross-functional team",
        "Developed features across Flask backend and React Native frontend",
        "Helped scale platform to 300+ subscriptions across 25+ states"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Cornell University",
      period: "Aug 2025 - Dec 2025",
      description: [
        "Support 150+ students in Analysis of Algorithms course",
        "Conduct office hours, grading, and exam review sessions"
      ]
    }
  ];

  const projects = [
    {
      name: "Eatery",
      tech: "Python • Django • PostgreSQL • DigitalOcean",
      description: "Lead backend developer for cross-platform dining app with 10,000+ monthly users. Refactored core systems for improved scalability and security.",
      icon: "🍴"
    },
    {
      name: "Métissé",
      tech: "Python • NumPy • SQLite • Tkinter",
      description: "Full-stack stock recommendation engine using real-time market data from Yahoo Finance APIs. Implemented portfolio modeling with multidimensional vectors.",
      icon: "📈"
    },
    {
      name: "Snail Survival",
      tech: "JavaScript • HTML • CSS",
      description: "Chrome extension game with 100+ weekly active users across 40+ countries. Designed dynamic gameplay features and difficulty adjustment.",
      icon: "🐌"
    }
  ];

  const skills = {
    "Languages": ["Java", "Python", "OCaml", "C", "C#", "JavaScript", "HTML/CSS"],
    "Technologies": ["React Native", "Flask", "Django", "Docker", "Git", "PostgreSQL", "MongoDB", "GraphQL", "Google Cloud"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-opacity duration-300 ${
              scrollY > 50 ? 'opacity-100' : 'opacity-0'
            }`}>
              SS
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium ${
                    activeSection === item.toLowerCase() ? 'text-blue-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Profile Picture */}
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-6xl md:text-7xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Skye Slattery
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Engineer • Full Stack Developer • AI Enthusiast
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/skyeslattery" target="_blank" rel="noopener noreferrer" 
               className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
            <a href="mailto:dss354@cornell.edu" 
               className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
              <Mail size={20} />
              Contact Me
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-blue-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-blue-500" size={24} />
              <h3 className="text-2xl font-semibold">Cornell University</h3>
            </div>
            
            <p className="text-gray-700 mb-4">
              Computer Science major with a minor in AI, maintaining a <span className="font-bold text-blue-600">3.84 GPA</span>. 
              Expected graduation: May 2027.
            </p>
            
            <p className="text-gray-700 mb-6">
              Passionate about building scalable, production-grade software that makes a real impact. 
              From developing apps used by thousands of Cornell students to contributing to enterprise financial software, 
              I love tackling complex technical challenges and creating elegant solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-900 mb-3">{category}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm hover:shadow-md transition-shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-blue-600 mb-4 flex items-center gap-1">
                  <Code size={14} />
                  {project.tech}
                </p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-700 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:dss354@cornell.edu" className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors">
              <Mail size={20} />
              dss354@cornell.edu
            </a>
            <a href="tel:607-793-3124" className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors">
              <Phone size={20} />
              607-793-3124
            </a>
            <span className="flex items-center gap-2 text-gray-700">
              <MapPin size={20} />
              Ithaca, NY
            </span>
          </div>
          
          <div className="mt-12">
            <a href="mailto:dss354@cornell.edu" 
               className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold">
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Skye Slattery. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;