import { useState, useEffect } from 'react';
import { Github, Mail, MapPin, GraduationCap, ChevronDown, Menu, X, ArrowUpRight, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredExp, setHoveredExp] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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
      title: "software engineering intern",
      company: "onestream software",
      period: "may 2025 - aug 2025",
      description: [
        "transforming postman-based api workflows into scalable restsharp test suite using c#",
        "collaborating with qa and devops teams for robust regression testing",
        "contributing to enterprise-level financial planning and analytics software"
      ],
      logo: "/logos/onestream.png",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "backend developer",
      company: "cornell app development",
      period: "sep 2024 - present",
      description: [
        "leading backend development for apps used by 50%+ of cornell undergraduates",
        "teaching backend concepts to 70+ students including distributed systems and api design",
        "improved score app data retrieval speed by 300% through graphql and mongodb optimization"
      ],
      logo: "/logos/appdev.png",
      color: "from-red-600 to-rose-600"
    },
    {
      title: "software development intern",
      company: "stealth startup",
      period: "oct 2024 - may 2025",
      description: [
        "building next-gen healthcare super app",
        "developing features",
        "helping scale platform"
      ],
      logo: "/logos/stealth-startup.jpeg",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "course instructor",
      company: "cornell university",
      period: "jan 2025 - may 2025",
      description: [
        "taught cornell-accredited course on backend development to 70+ students",
        "delivered lectures and provided hands-on assistance with complex backend concepts",
        "collaborated with teaching staff to optimize curriculum and learning outcomes"
      ],
      logo: "/logos/cornell.png",
      color: "from-purple-600 to-violet-600"
    },
    {
      title: "teaching assistant",
      company: "cornell university",
      period: "aug 2025 - dec 2025",
      description: [
        "supporting 150+ students in analysis of algorithms course",
        "conducting office hours, grading, and exam review sessions"
      ],
      logo: "/logos/cornell.png",
      color: "from-purple-600 to-violet-600"
    }
  ];

  const projects = [
    {
      name: "eatery",
      tech: ["python", "django", "postgresql", "digitalocean"],
      description: "cross-platform dining app with 10,000+ monthly active users. refactored core systems for improved scalability and security.",
      image: "/logos/eatery.png",
      gradient: "from-blue-500 to-indigo-600",
      highlights: ["11k+ active users", "cross-platform", "4.7 rating", "notifications", "refactored authentication"]
    },
    {
      name: "métissé",
      tech: ["python", "numpy", "sqlite", "tkinter"],
      description: "full-stack stock recommendation engine using real-time market data. implemented portfolio modeling with multidimensional vectors.",
      image: "/logos/metisse.png",
      gradient: "from-emerald-500 to-teal-600",
      highlights: ["500+ stocks", "yahoo finance api", "real-time data", "ml integration"]
    },
    {
      name: "snail survival",
      tech: ["javascript", "html", "css", "chrome api"],
      description: "chrome extension game with 100+ weekly active users across 40+ countries. designed dynamic gameplay and difficulty adjustment.",
      image: "/logos/snail-survival.png",
      gradient: "from-amber-500 to-orange-600",
      highlights: ["100+ players", "40+ countries", "chrome store", "dynamic difficulty", "marketplace"]
    },
    {
      name: "score",
      tech: ["python", "mongodb", "graphql"],
      description: "cross-platform sports app for cornell students. improved data retrieval speed by 300% through graphql and mongodb optimization.",
      image: "/logos/score.png",
      gradient: "from-red-500 to-rose-600",
      highlights: ["10+ sports", "300% faster", "5s scrape", "notifications"]
    },
    {
      name: "climber",
      tech: ["unity", "c#", "procreate", "game design"],
      description: "2d platformer game with handmade pixel art. features challenging mountain climbing mechanics inspired by real rock climbing. handmade physics and platforming mechanics for smooth user experience.",
      image: "/logos/climber.png",
      gradient: "from-indigo-500 to-purple-600",
      highlights: ["handmade art", "physics engine", "ability system"]
    },
    {
      name: "skatehub",
      tech: ["python", "flask", "sqlalchemy", "aws s3", "javascript"],
      description: "social media platform for skateboarding enthusiasts. features interactive map for skate spots, video sharing, and social interactions with secure authentication.",
      image: "/logos/skatehub.png",
      gradient: "from-slate-500 to-gray-600",
      highlights: ["google maps api", "aws s3", "full-stack", ""]
    }
  ];

  const skills = {
    languages: [
      { 
        name: "java", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-5 h-5" alt="Java" /> 
      },
      { 
        name: "python", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-5 h-5" alt="Python" /> 
      },
      { 
        name: "c/c++", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-5 h-5" alt="C++" /> 
      },
      { 
        name: "javascript", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5" alt="JavaScript" /> 
      },
      { 
        name: "ocaml", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg" className="w-5 h-5" alt="OCaml" /> 
      },
      { 
        name: "c#", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" className="w-5 h-5" alt="C#" /> 
      },
      { 
        name: "html/css", 
        icon: <div className="flex">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-5 h-5" alt="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-5 h-5 ml-0.5" alt="CSS3" />
              </div> 
      }
    ],
    technologies: [
      { 
        name: "flask", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="w-5 h-5" alt="Flask" /> 
      },
      { 
        name: "docker", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-5 h-5" alt="Docker" /> 
      },
      { 
        name: "react", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="React" /> 
      },
      { 
        name: "django", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="w-5 h-5" alt="Django" /> 
      },
      { 
        name: "postgresql", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-5 h-5" alt="PostgreSQL" /> 
      },
      { 
        name: "mongodb", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-5 h-5" alt="MongoDB" /> 
      },
      { 
        name: "graphql", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" className="w-5 h-5" alt="GraphQL" /> 
      },
      {
        name: "numpy",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-5 h-5" alt="NumPy" />
      },
      { 
        name: "gcp", 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="w-5 h-5" alt="Google Cloud Platform" /> 
      },
      {
        name: "aws",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-5 h-5" alt="AWS" />
      },
      {
        name: "tensorflow",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-5 h-5" alt="TensorFlow" />
      },
      
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`transition-all duration-500 ${
              scrollY > 50 ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="text-lg font-light tracking-wider bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                ss
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg py-4 mt-2 rounded-2xl mx-4 right-4" style={{width: 'calc(100% - 2rem)'}}>
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-6 py-3 text-sm font-light text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:bg-clip-text transition-all"
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
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-200 shadow-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-0.5">
              <img 
                src="profile.jpg" 
                alt="Profile"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-4 border-white"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-gray-900">
            skye slattery
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 font-light tracking-wide mb-8">
            software developer · backend systems · ai/ml
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/skyeslattery" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative p-3 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Github size={20} className="text-gray-700 group-hover:text-violet-600 transition-colors" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                github
              </span>
            </a>
            <a href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative p-3 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Linkedin size={20} className="text-gray-700 group-hover:text-violet-600 transition-colors" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                linkedin
              </span>
            </a>
            <a href="mailto:dss354@cornell.edu"
               className="group relative p-3 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Mail size={20} className="text-gray-700 group-hover:text-violet-600 transition-colors" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                email
              </span>
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={24} className="text-gray-400 mx-auto" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-gray-400 mb-4">about</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-xl">
                  <GraduationCap size={20} className="text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-light">cornell university</h3>
                  <h3 className="text-sm text-gray-500">class of 2027</h3>
                  <p className="text-sm text-gray-500">cs major · ai minor</p>
                </div>
              </div>
              
              <p className="text-gray-600 font-light leading-relaxed">
                passionate about building scalable, production-grade software that makes a real impact. 
                from developing apps used by thousands of cornell students to contributing to enterprise financial software, 
                i love tackling complex technical challenges and creating elegant solutions.
              </p>

              <p className="text-gray-600 font-light leading-relaxed">
                currently exploring the intersection of ai and software engineering, 
                with a focus on creating robust backend systems and scalable architecture.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-light tracking-wider text-gray-400 mb-4">languages</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill) => (
                    <div key={skill.name} 
                        className="group flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-m font-light text-gray-600 group-hover:text-gray-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-light tracking-wider text-gray-400 mb-4">technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.technologies.map((tech) => (
                    <div key={tech.name} 
                        className="group flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      <span className="text-violet-600">{tech.icon}</span>
                      <span className="text-m font-light text-gray-600 group-hover:text-gray-900 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-gray-400 mb-4">projects</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}>
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 ${
                project.name === "snail survival" || project.name === "climber" ? "" : 
                project.name === "métissé" || project.name === "skatehub" ? "pt-8 pb-6 px-4" : "pt-4 pb-2"
              }`}>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                    project.name === "snail survival" || project.name === "climber" ? "object-cover" : 
                    project.name === "métissé" || project.name === "skatehub" ? "object-contain scale-90" : "object-contain"
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-10 group-hover:opacity-5 transition-opacity duration-500 mix-blend-overlay`}></div>
              </div>
                
                <div className="p-6 space-y-4 min-h-[2rem] flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-light text-gray-900">{project.name}</h3>
                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-violet-600 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg font-light">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 mt-auto">
                    {project.highlights && project.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs px-2 py-1 mb-1 bg-gray-50 text-gray-600 rounded-full font-light">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-gray-400 mb-4">experience</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} 
                   className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                   onMouseEnter={() => setHoveredExp(index)}
                   onMouseLeave={() => setHoveredExp(null)}>
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-xl shadow-sm" />
                      <div>
                        <h3 className="text-lg font-light text-gray-900">{exp.title}</h3>
                        <p className="text-sm text-gray-500">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs font-light text-gray-400 tracking-wider uppercase mb-4">{exp.period}</p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 font-light leading-relaxed">
                        <span className={`inline-block w-1 h-1 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-3 flex-shrink-0`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-gray-400 mb-4">contact</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <p className="text-2xl font-light text-gray-700 mb-4">
            let's build something
          </p>
          
          <p className="text-gray-500 font-light mb-12 max-w-2xl mx-auto">
            always open to discussing new opportunities, interesting projects, 
            or just having a chat.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="mailto:dss354@cornell.edu" 
               className="group flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors duration-300">
              <div className="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="text-sm font-light">dss354@cornell.edu</span>
            </a>
            <a href="https://www.linkedin.com/in/skyeslattery/" 
              className="group flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors duration-300">
              <div className="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                <Linkedin size={18} />
              </div>
              <span className="text-sm font-light">linkedin.com</span>
            </a>
            <div className="group flex items-center gap-3 text-gray-600">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-light">ithaca, ny</span>
            </div>
            <a href="https://github.com/skyeslattery" 
              className="group flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors duration-300">
              <div className="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                <Github size={18} />
              </div>
              <span className="text-sm font-light">github.com</span>
            </a>
          </div>
          
          <a href="mailto:dss354@cornell.edu" 
             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-light text-sm tracking-wide">
            start a conversation
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-light text-gray-400 tracking-wider">
            © 2025 skye slattery · built with react & tailwind css
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;