export const defaultContent = {
  personalInfo: {
    name: "Alexandra Chen",
    title: "Senior Product Designer & UX Strategist",
    email: "alexandra.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.alexandrachen.design",
    linkedin: "linkedin.com/in/alexandrachen",
    github: "github.com/alexandrachen",
    bio: "Award-winning product designer with 8+ years of experience crafting user-centered digital experiences for Fortune 500 companies. Passionate about bridging the gap between user needs and business objectives through innovative design solutions.",
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  skills: [
    { name: "UI/UX Design", level: 95, category: "Design" },
    { name: "Figma", level: 98, category: "Design" },
    { name: "Adobe Creative Suite", level: 90, category: "Design" },
    { name: "Prototyping", level: 92, category: "Design" },
    { name: "User Research", level: 88, category: "Research" },
    { name: "Design Systems", level: 94, category: "Systems" },
    { name: "HTML/CSS", level: 85, category: "Development" },
    { name: "JavaScript", level: 75, category: "Development" },
    { name: "React", level: 70, category: "Development" },
    { name: "Product Strategy", level: 87, category: "Strategy" }
  ],
  experience: [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Meta",
      period: "2022 - Present",
      location: "Menlo Park, CA",
      description: "Leading design initiatives for Instagram's creator tools, impacting 2B+ users globally. Spearheaded the redesign of the creator dashboard, resulting in 40% increase in creator engagement and $50M additional revenue.",
      achievements: [
        "Led cross-functional team of 12 designers and engineers",
        "Increased user engagement by 40% through data-driven design decisions",
        "Mentored 5 junior designers and established design system standards"
      ],
      technologies: ["Figma", "Principle", "After Effects", "React"]
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Airbnb",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      description: "Designed end-to-end experiences for Airbnb's host platform, focusing on onboarding and listing optimization. Collaborated with product managers and engineers to ship features used by millions of hosts worldwide.",
      achievements: [
        "Redesigned host onboarding flow, reducing drop-off rate by 35%",
        "Created comprehensive design system adopted across 3 product teams",
        "Conducted user research with 200+ hosts across 15 countries"
      ],
      technologies: ["Sketch", "InVision", "Principle", "Zeplin"]
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Google",
      period: "2018 - 2020",
      location: "Mountain View, CA",
      description: "Worked on Google Workspace products, focusing on collaboration features and accessibility improvements. Contributed to Material Design guidelines and component library.",
      achievements: [
        "Improved accessibility compliance by 60% across Google Docs",
        "Designed collaboration features used by 3B+ users",
        "Contributed to Material Design 3.0 specifications"
      ],
      technologies: ["Figma", "Material Design", "Protopie", "Angular"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "FinTech Mobile Banking App",
      description: "Complete redesign of a mobile banking application focusing on user experience, accessibility, and modern financial management tools. The project involved extensive user research, prototyping, and usability testing.",
      longDescription: "Led the complete redesign of a mobile banking application for a major financial institution, serving over 2 million users. The project focused on modernizing the user experience while maintaining security and compliance standards. Through extensive user research and iterative design, we created an intuitive interface that reduced task completion time by 45% and increased user satisfaction scores by 60%.",
      technologies: ["Figma", "Principle", "Maze", "Hotjar", "React Native"],
      category: "Mobile App",
      year: "2023",
      client: "Major Financial Institution",
      duration: "6 months",
      role: "Lead UX Designer",
      team: "4 designers, 6 developers, 2 PMs",
      demoUrl: "https://demo.fintechapp.com",
      caseStudyUrl: "https://alexandrachen.design/fintech-case-study",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      results: [
        "45% reduction in task completion time",
        "60% increase in user satisfaction",
        "30% increase in daily active users",
        "25% reduction in support tickets"
      ]
    },
    {
      id: 2,
      title: "E-Learning Platform Redesign",
      description: "Comprehensive UX overhaul of an online learning platform, focusing on student engagement, course discovery, and instructor tools. Implemented gamification elements and personalized learning paths.",
      longDescription: "Redesigned a comprehensive e-learning platform used by over 500,000 students and 10,000 instructors worldwide. The project involved creating a more engaging and intuitive learning experience through improved navigation, personalized dashboards, and enhanced course discovery mechanisms.",
      technologies: ["Figma", "Miro", "Hotjar", "A/B Testing", "Vue.js"],
      category: "Web Platform",
      year: "2023",
      client: "EdTech Startup",
      duration: "8 months",
      role: "Senior UX Designer",
      team: "3 designers, 8 developers, 1 PM",
      demoUrl: "https://demo.elearning.com",
      caseStudyUrl: "https://alexandrachen.design/elearning-case-study",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      results: [
        "70% increase in course completion rates",
        "50% improvement in user engagement",
        "40% increase in instructor satisfaction",
        "35% growth in platform revenue"
      ]
    },
    {
      id: 3,
      title: "Healthcare Dashboard System",
      description: "Design of a comprehensive healthcare management dashboard for medical professionals, featuring patient data visualization, appointment scheduling, and treatment tracking capabilities.",
      longDescription: "Created a sophisticated healthcare management system for medical professionals, focusing on data visualization, workflow optimization, and patient care coordination. The system serves over 1,000 healthcare providers across multiple specialties.",
      technologies: ["Figma", "D3.js", "React", "HIPAA Compliance", "Tableau"],
      category: "Dashboard",
      year: "2022",
      client: "Healthcare Technology Company",
      duration: "10 months",
      role: "Lead Product Designer",
      team: "5 designers, 12 developers, 3 PMs",
      demoUrl: "https://demo.healthdash.com",
      caseStudyUrl: "https://alexandrachen.design/healthcare-case-study",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      results: [
        "55% reduction in administrative time",
        "80% improvement in data accuracy",
        "65% increase in patient satisfaction",
        "40% faster diagnosis and treatment"
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "VP of Product",
      company: "Meta",
      content: "Alexandra's design thinking and execution are exceptional. She consistently delivers user-centered solutions that drive both engagement and business results. Her ability to collaborate across teams and mentor junior designers makes her invaluable.",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Engineering Manager",
      company: "Airbnb",
      content: "Working with Alexandra was a game-changer for our team. Her designs are not only beautiful but also technically feasible and user-focused. She bridges the gap between design and engineering seamlessly.",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Product Manager",
      company: "Google",
      content: "Alexandra's strategic thinking and attention to detail are remarkable. She doesn't just create beautiful interfaces; she solves complex user problems with elegant, data-driven solutions.",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    }
  ],
  awards: [
    {
      id: 1,
      title: "UX Design Awards - Best Mobile App",
      year: "2023",
      organization: "UX Design Institute",
      project: "FinTech Mobile Banking App"
    },
    {
      id: 2,
      title: "Webby Awards - People's Voice",
      year: "2022",
      organization: "The Webby Awards",
      project: "E-Learning Platform Redesign"
    },
    {
      id: 3,
      title: "Design Excellence Award",
      year: "2021",
      organization: "Adobe Design Circle",
      project: "Healthcare Dashboard System"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master of Fine Arts in Interaction Design",
      school: "Carnegie Mellon University",
      period: "2016 - 2018",
      location: "Pittsburgh, PA"
    },
    {
      id: 2,
      degree: "Bachelor of Arts in Graphic Design",
      school: "Rhode Island School of Design",
      period: "2012 - 2016",
      location: "Providence, RI"
    }
  ],
  certifications: [
    {
      id: 1,
      name: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2023"
    },
    {
      id: 2,
      name: "Certified Usability Analyst (CUA)",
      issuer: "Human Factors International",
      year: "2022"
    }
  ]
};