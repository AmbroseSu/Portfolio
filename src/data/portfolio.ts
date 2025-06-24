import { Code, Database, ShieldCheck, Network, PanelLeft, Paintbrush2, Atom, BellRing, Braces, Flame, Feather, Code2, Coffee, Globe, Wifi, Bell, Shield, Smartphone, Server, GitBranch, Pocket as Docker, Terminal, Layers, Zap, Wrench, Cpu, Leaf, Monitor, ClipboardList, Palette } from 'lucide-react';
import project1 from '../logo/document-management-system.jpg';
import project2 from '../logo/school-management.jpg';

export const skills = [
  {
    category: 'Languages',
    icon: Code,
    items: [
      { name: 'C#', icon: Braces, level: 'Advanced', experience: '2+ years', projects: '6+ projects', color: 'from-yellow-400 to-yellow-600' },
      { name: 'Java', icon: Coffee, level: 'Advanced', experience: '2+ years', projects: '5+ projects', color: 'from-blue-400 to-blue-600' },
      { name: 'Dart', icon: Feather, level: 'Intermediate', experience: '1+ years', projects: '3+ projects', color: 'from-cyan-400 to-cyan-600' },
      { name: 'JavaScript', icon: Code2, level: 'Beginner', experience: '1 years', projects: '1 projects', color: 'from-green-400 to-green-600' },
      { name: 'Python', icon: Code, level: 'Beginner', experience: '1 years', projects: '1 projects', color: 'from-purple-400 to-purple-600' },
    ]
  },
  {
    category: 'Frameworks & Libraries',
    icon: Layers,
    items: [
      { name: 'Spring Boot', icon: Flame, level: 'Advanced', experience: '2+ years', projects: '5+ projects', color: 'from-emerald-400 to-emerald-600' },
      { name: 'Spring Security', icon: ShieldCheck, level: 'Advanced', experience: '2+ years', projects: '7+ projects', color: 'from-red-400 to-red-600' },
      { name: 'ASP.NET Web API', icon: Network, level: 'Advanced', experience: '2+ years', projects: '3+ projects', color: 'from-indigo-400 to-indigo-600' },
      { name: 'ASP.NET MVC', icon: PanelLeft, level: 'Advanced', experience: '2+ years', projects: '2+ projects', color: 'from-indigo-400 to-indigo-600' },
      { name: 'Blazor', icon: Globe, level: 'Intermediate', experience: '1+ years', projects: '1+ projects', color: 'from-violet-400 to-violet-600' },
      { name: 'SignalR', icon: Wifi, level: 'Intermediate', experience: '1+ years', projects: '2+ projects', color: 'from-pink-400 to-pink-600' },
      { name: 'Flutter', icon: Smartphone, level: 'Intermediate', experience: '1+ years', projects: '3+ projects', color: 'from-sky-400 to-sky-600' },
      { name: 'Flutter Local Notifications', icon: BellRing, level: 'Intermediate', experience: '1+ years', projects: '3+ projects', color: 'from-red-400 to-red-600' },
      { name: 'React', icon: Atom, level: 'Beginner', experience: '1 years', projects: '1+ projects', color: 'from-cyan-400 to-cyan-600' },
      { name: 'Tailwind CSS', icon: Paintbrush2, level: 'Beginner', experience: '1 years', projects: '1 projects', color: 'from-sky-400 to-sky-600' }
    ]
  },
  // {
  //   category: 'Libraries',
  //   icon: Zap,
  //   items: [
  //     { name: 'Redux', icon: Database, level: 'Advanced', experience: '3+ years', projects: '15+ projects', color: 'from-violet-400 to-violet-600' },
  //     { name: 'Tailwind CSS', icon: Wrench, level: 'Expert', experience: '2+ years', projects: '20+ projects', color: 'from-sky-400 to-sky-600' },
  //     { name: 'Framer Motion', icon: Zap, level: 'Advanced', experience: '1+ years', projects: '8+ projects', color: 'from-pink-400 to-pink-600' },
  //     { name: 'Socket.io', icon: Globe, level: 'Intermediate', experience: '1+ years', projects: '6+ projects', color: 'from-orange-400 to-orange-600' },
  //     { name: 'D3.js', icon: Database, level: 'Intermediate', experience: '1+ years', projects: '4+ projects', color: 'from-lime-400 to-lime-600' },
  //   ]
  // },
  {
    category: 'Database',
    icon: Zap,
    items: [
      { name: 'PostgresSQL', icon: Database, level: 'Advanced', experience: '2+ years', projects: '8+ projects', color: 'from-violet-400 to-violet-600' },
      { name: 'SQL Server', icon: Server, level: 'Advanced', experience: '2+ years', projects: '4+ projects', color: 'from-sky-400 to-sky-600' },
      { name: 'MongoDB', icon: Leaf, level: 'Intermediate', experience: '1+ years', projects: '3+ projects', color: 'from-pink-400 to-pink-600' },
      { name: 'Firebase DB', icon: Flame, level: 'Intermediate', experience: '1+ years', projects: '3+ projects', color: 'from-orange-400 to-orange-600' }
    ]
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: [
      { name: 'Git & GitHub', icon: GitBranch, level: 'Expert', experience: '2+ years', projects: 'Daily use', color: 'from-orange-400 to-orange-600' },
      { name: 'Docker', icon: Docker, level: 'Advanced', experience: '2+ years', projects: '9+ projects', color: 'from-blue-400 to-blue-600' },
      { name: 'Firebase', icon: Flame, level: 'Intermediate', experience: '1+ years', projects: '3+ projects', color: 'from-yellow-400 to-yellow-600' },
      { name: 'IntelliJ IDEA', icon: Code, level: 'Expert', experience: '3+ years', projects: 'Java projects', color: 'from-purple-500 to-purple-700' },
      { name: 'Rider', icon: Code2, level: 'Expert', experience: '2+ years', projects: '.NET projects', color: 'from-pink-500 to-pink-700' },
      { name: 'Visual Studio', icon: Monitor, level: 'Expert', experience: '5+ years', projects: '.NET & C#', color: 'from-indigo-500 to-indigo-700' },
      { name: 'VS Code', icon: Terminal, level: 'Intermediate', experience: '1+ years', projects: 'Daily use', color: 'from-blue-400 to-blue-600' },
      { name: 'Postman', icon: Globe, level: 'Expert', experience: '3+ years', projects: 'Daily use', color: 'from-orange-400 to-orange-600' },
      { name: 'Jira', icon: ClipboardList, level: 'Advanced', experience: '3+ years', projects: 'Daily use', color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', icon: Palette, level: 'Intermediate', experience: '1+ years', projects: '2+ projects', color: 'from-pink-400 to-pink-600' },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Document Management  System',
    description:
      'DMS is a document management system that streamlines drafting, approval, and archiving through automated workflows and version control. It features integrated digital signatures for secure, legally compliant approvals',
    image: project1,
    tech: ['.NET', 'ReactJS', 'Docker', 'Flutter', 'PostgreSQL', 'MongoDB'],
    github: {
      backend: 'https://github.com/AmbroseSu/Document_Management_System',
      frontend: 'https://github.com/cloudcode366/Document_Management_System_FE',
      mobile: 'https://github.com/namle1805/Document_Management_System_Mobile',
    },
    demo: null,
  },
  {
    id: 2,
    title: 'Fresher Academy Management System',
    description:
      'The Fresher Academy Management System (FAMS) is a comprehensive software solution designed to efficiently manage and streamline the operations of a fresher academy of FPT Software. FAMS encompasses a range of features including user management and training program.',
    image: project2,
    tech: ['Java', 'Spring Boot', 'Twilio', 'Maven', 'Docker', 'PostgreSQL'],
    github: {
      backend: 'https://github.com/AmbroseSu/Fresher-Academy-Management-System',
      frontend: null,
      mobile: null,
    },
    demo: null,
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, message encryption, and multi-room support.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'Python', 'OpenAI API', 'WebSocket', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Business intelligence dashboard with interactive charts, real-time data visualization, and comprehensive reporting.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Vue.js', 'D3.js', 'Express', 'MySQL', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export const experiences = [
  // {
  //   id: 1,
  //   company: 'Tech Solutions Inc.',
  //   role: 'Senior Full-Stack Developer',
  //   duration: '2022 - Present',
  //   description: 'Led development of microservices architecture serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.',
  //   achievements: [
  //     'Reduced application load time by 40%',
  //     'Led team of 5 developers',
  //     'Implemented automated testing suite'
  //   ]
  // },
  {
    id: 1,
    company: 'HiSoft Company',
    role: 'Backend Developer',
    duration: '06/2025 - Now',
    description: 'Maintained and enhanced legacy systems while actively participating in the development of new enterprise applications. Focused on backend logic, API development, and ensuring system scalability and reliability across multiple internal tools and customer-facing platforms.',
    achievements: [
      'Refactored and stabilized legacy modules, reducing system downtime by 40%',
      'Developed and deployed 10+ new microservices to support evolving business requirements',
      'Improved API performance by optimizing database queries and caching strategies',
      'Collaborated with cross-functional teams to ensure timely and quality feature delivery'
    ]
  },
  {
    id: 2,
    company: 'FPT Software',
    role: 'Backend Developer',
    duration: '01/2024 - 05/2025',
    description: 'Developed core backend services for the Fresher Academy Management System (FAMS), a centralized platform for managing training programs, syllabuses, and classes. Responsible for designing robust APIs, implementing secure authentication/authorization, and optimizing backend performance to support seamless frontend integration.',
    achievements: [
      'Built and maintained 20+ RESTful API endpoints aligning with complex business logic',
      'Integrated JWT-based authentication and role-based authorization using Spring Security',
      'Improved backend performance and reliability by refactoring data access layers using JPA',
      'Collaborated closely with frontend teams to ensure real-time, secure data flow'
    ]
  }
];