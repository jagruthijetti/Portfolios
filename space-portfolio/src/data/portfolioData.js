const portfolioData = {
  personal: {
    name: "Jagruthi Jetti",
    role: "Computer Science Student & Developer",
    tagline: "Exploring the digital universe through code, creativity, and continuous learning.",
    bio: "Passionate Computer Science student and software developer focused on crafting responsive web experiences, data science tools, and intelligent systems. Driven by curiosity to design elegant solutions for complex digital challenges.",
    missionStatement: "Exploring ideas, learning continuously and building meaningful digital experiences.",
    email: "PASTE_EMAIL_HERE",
    phone: "PASTE_PHONE_HERE",
    location: "India",
    profileImage: "/profile.jpg"
  },

  social: {
    github: "PASTE_GITHUB_LINK_HERE",
    linkedin: "PASTE_LINKEDIN_LINK_HERE",
    instagram: "PASTE_INSTAGRAM_LINK_HERE"
  },

  resume: {
    url: "/resume.pdf"
  },

  statistics: [
    { value: "05+", label: "Projects Built" },
    { value: "10+", label: "Technologies Mastered" },
    { value: "03+", label: "Certifications Earned" },
    { value: "01+", label: "Years Engineering" }
  ],

  skills: {
    programming: [
      { name: "Python", level: 85, icon: "SiPython", category: "PROGRAMMING", details: "Machine Learning, Data Processing & Automation" },
      { name: "Java", level: 80, icon: "FaJava", category: "PROGRAMMING", details: "Object-Oriented Programming, Data Structures" },
      { name: "C", level: 75, icon: "SiC", category: "PROGRAMMING", details: "Low-level Memory & Core Algorithmic Logic" },
      { name: "JavaScript", level: 88, icon: "SiJavascript", category: "PROGRAMMING", details: "Modern ES6+, Asynchronous Web Apps & DOM Manipulation" }
    ],
    web: [
      { name: "React", level: 85, icon: "FaReact", category: "WEB DEVELOPMENT", details: "Component Architecture, State Management, Custom Hooks" },
      { name: "Vite", level: 82, icon: "SiVite", category: "WEB DEVELOPMENT", details: "Next-gen Frontend Tooling & Fast HMR Bundling" },
      { name: "HTML5", level: 90, icon: "FaHtml5", category: "WEB DEVELOPMENT", details: "Semantic Markup, Accessibility & Modern Web Standards" },
      { name: "CSS3", level: 88, icon: "FaCss3Alt", category: "WEB DEVELOPMENT", details: "Glassmorphism, Animations, Flexbox, CSS Grid & Variables" },
      { name: "Node.js", level: 70, icon: "FaNodeJs", category: "WEB DEVELOPMENT", details: "REST API Integration & Server Logic" }
    ],
    dataML: [
      { name: "Pandas", level: 80, icon: "SiPandas", category: "DATA / MACHINE LEARNING", details: "Data Manipulation, Wrangling & Analytics" },
      { name: "NumPy", level: 78, icon: "SiNumpy", category: "DATA / MACHINE LEARNING", details: "High-Performance Array & Matrix Calculations" },
      { name: "Scikit-learn", level: 72, icon: "SiScikitlearn", category: "DATA / MACHINE LEARNING", details: "Predictive Models, Regression & Classification" },
      { name: "Matplotlib", level: 75, icon: "SiPython", category: "DATA / MACHINE LEARNING", details: "Data Visualization & Scientific Charting" }
    ],
    tools: [
      { name: "Git", level: 85, icon: "FaGitAlt", category: "TOOLS", details: "Version Control, Branching & Merge Workflows" },
      { name: "GitHub", level: 88, icon: "FaGithub", category: "TOOLS", details: "Open Source Collaboration, Actions & CI/CD" },
      { name: "VS Code", level: 90, icon: "SiVisualstudiocode", category: "TOOLS", details: "IDE Configurations, Debugging & Extensions" },
      { name: "Linux", level: 70, icon: "FaLinux", category: "TOOLS", details: "Terminal Navigation, Shell Commands & Environment Scripting" }
    ]
  },

  education: [
    {
      year: "2025 — PRESENT",
      degree: "B.Tech Computer Science Engineering",
      institution: "University Institute of Technology",
      description: "Focusing on core computer science subjects, algorithms, software engineering principles, and full-stack web development.",
      achievements: ["Active Technical Club Member", "Data Structures & Algorithms Coursework", "Web Development Projects"]
    },
    {
      year: "2022 — 2024",
      degree: "Higher Secondary Education (12th Grade)",
      institution: "State Junior College",
      description: "Completed Mathematics, Physics, and Chemistry stream with high distinction.",
      achievements: ["Top 5% Academic Ranking", "Excellence in Mathematics & Computer Fundamentals"]
    },
    {
      year: "2022",
      degree: "Secondary Education (10th Grade)",
      institution: "High School of Excellence",
      description: "Foundational education focusing on science, mathematics, and introductory computer concepts.",
      achievements: ["Academic Merit Award", "Science Exhibition Winner"]
    }
  ],

  projects: [
    {
      id: "flight-delay",
      title: "Flight Delay Prediction",
      category: "AI / ML",
      badge: "MACHINE LEARNING",
      shortDesc: "Predictive machine learning model evaluating flight schedule delays based on historical weather and flight data.",
      overview: "An end-to-end Machine Learning pipeline analyzing aviation historical records, weather factors, and airline carrier metrics to accurately forecast flight arrival delays.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
      myRole: "Designed the feature engineering workflow, trained Random Forest classification models, and built the visual analytics dashboards.",
      challenges: "Handling highly imbalanced data distributions and processing multi-gigabyte CSV records efficiently.",
      result: "Achieved over 86% predictive accuracy across test datasets.",
      github: "PASTE_GITHUB_LINK_HERE",
      live: "PASTE_LIVE_DEMO_HERE",
      planetColor: "#39C6FF"
    },
    {
      id: "sherise",
      title: "SheRise Platform",
      category: "WEB",
      badge: "FULL STACK WEB",
      shortDesc: "Empowerment platform providing mentorship opportunities, resource sharing, and community networking for women in tech.",
      overview: "SheRise is a responsive web application designed to connect aspiring female developers with industry mentors, community events, and skill-building resources.",
      technologies: ["React", "JavaScript", "CSS3", "Vite", "Framer Motion"],
      myRole: "Front-end architecture lead, responsive component design, and dynamic state management.",
      challenges: "Creating accessible, high-performance UI components with smooth interactive card animations.",
      result: "Demonstrated live interactive prototype with praise for clean UI and user-centered layout.",
      github: "PASTE_GITHUB_LINK_HERE",
      live: "PASTE_LIVE_DEMO_HERE",
      planetColor: "#FF4FD8"
    },
    {
      id: "algostructure",
      title: "AlgoStructure Visualizer",
      category: "JAVA",
      badge: "ALGORITHMS",
      shortDesc: "Interactive Data Structures and Algorithms visualization tool illustrating sorting, searching, and tree traversals.",
      overview: "An educational software tool visualizing complex algorithms step-by-step to assist students in understanding memory pointers, tree balancing, and graph searches.",
      technologies: ["Java", "Data Structures", "OOP", "Algorithm Analysis"],
      myRole: "Implemented core binary search tree logic, graph traversal routines, and sorting visualizer loops.",
      challenges: "Synchronizing step-by-step render delays with recursive call stacks.",
      result: "Successfully built an interactive desktop application for classroom demonstrations.",
      github: "PASTE_GITHUB_LINK_HERE",
      live: "",
      planetColor: "#9B5CFF"
    },
    {
      id: "workflow-approval",
      title: "Workflow Approval Portal",
      category: "WEB",
      badge: "ENTERPRISE APP",
      shortDesc: "Automated document review and approval management workflow system with role-based access control.",
      overview: "A streamlined web dashboard for organizations to track multi-stage request approvals, document verifications, and audit histories in real-time.",
      technologies: ["React", "JavaScript", "HTML5", "CSS Grid", "REST API"],
      myRole: "Developed role-based UI views, dashboard analytics metrics, and interactive approval forms.",
      challenges: "Designing multi-level form validations while keeping user input smooth and responsive.",
      result: "Reduced average workflow processing times in simulated testing scenarios.",
      github: "PASTE_GITHUB_LINK_HERE",
      live: "PASTE_LIVE_DEMO_HERE",
      planetColor: "#00E5FF"
    }
  ],

  certifications: [
    {
      id: "cert-1",
      name: "Python Programming & Data Analysis",
      issuer: "Coursera / Top Educational Provider",
      date: "2026",
      credentialId: "PY-892019-JAG",
      credentialLink: "PASTE_CERTIFICATE_LINK_HERE",
      skillsGained: "Python 3, Data Cleaning, Pandas, Matplotlib"
    },
    {
      id: "cert-2",
      name: "Frontend Development with React",
      issuer: "Meta / Tech Institute",
      date: "2025",
      credentialId: "REACT-784102-JAG",
      credentialLink: "PASTE_CERTIFICATE_LINK_HERE",
      skillsGained: "React Hooks, Virtual DOM, State Management, Responsive UI"
    },
    {
      id: "cert-3",
      name: "Core Java & Object-Oriented Design",
      issuer: "Udemy / Global Academy",
      date: "2025",
      credentialId: "JAVA-652391-JAG",
      credentialLink: "PASTE_CERTIFICATE_LINK_HERE",
      skillsGained: "Java OOP, Collections Framework, Multithreading Basics"
    }
  ]
};

export default portfolioData;
