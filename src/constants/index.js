import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Innovative",
    icon: mobile,
  },
  {
    title: "Passionate",
    icon: backend,
  },
  {
    title: "Gym RAT ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "SeaHire - Maritime Transportation Platform",
    icon: web,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developed a MERN stack platform connecting boat owners with travelers, featuring real-time GPS tracking and online payments.",
      "Implemented interactive map functionality using Mapbox/Leaflet with live vessel tracking and route visualization.",
      "Integrated Stripe/PayPal payment gateway handling 500+ monthly transactions with 99.8% success rate.",
      "Designed secure booking system with JWT authentication and end-to-end encrypted communications.",
      "Developed admin dashboard with analytics for business intelligence (revenue, popular routes, peak times).",
      "Reduced booking processing time by 65% through optimized workflows.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Esplan",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Developed a full-stack exam scheduling system automating room allocation for 5000+ students.",
      "Implemented constraint-based professor assignment algorithm reducing manual work by 80%.",
      "Tech: React, Django, Three.js, REST APIs, PostgreSQL, Docker.",
      "Impact: System adopted university-wide for main and retake sessions.",
    ],
  },
  {
    title: "Angular Developer",
    company_name: "Housing Management Project",
    icon: mobile,
    iconBg: "#383E56",
    date: "Sept 2024 - Nov 2024",
    points: [
      "Led front-end development of property management platform with 10+ dynamic views.",
      "Implemented JWT authentication and CRUD operations for 1000+ listings.",
      "Result: 4.8/5 user rating for UI/UX in beta testing.",
    ],
  },
  {
    title: "Administrative Assistant",
    company_name: "ESPRIT Engineering School",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "June 2021 - Aug 2021",
    points: [
      "Managed 50+ daily student/parent inquiries about academic programs.",
      "Streamlined information delivery processes reducing response time by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Louay proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Louay does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Louay optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EduNova - AI-Powered Learning Platform",
    description:
      "Developed AI-driven educational platform with personalized learning experiences using real-time analytics. Integrated OpenAI/Gemini APIs and HuggingFace Transformers for predictive analytics and NLP. Features: AI-optimized study schedules, emotion-based content adaptation (85% accuracy), gamification (XP/challenges). Integrated LMS platforms (Google Classroom, Moodle) with accessibility features (dyslexia support).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/orgs/Vhagar-4TWIN1/repositories", // Update with your link
  },
  {
    name: "Sports Management System",
    description:
      "Developed hybrid (Web/Desktop) application with reward system. Implemented two interconnected clients sharing common MySQL database. Features: Activity management, personalized recommendations, certificates generation. Web Stack: PHP, JavaScript, HTML/CSS, SCSS, Twig, Less. Desktop: JavaFX with CSS styling. DevOps: GitHub version control with full CI/CD pipeline implementation.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "twig",
        color: "pink-text-gradient",
      },
      {
        name: "javafx",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/goal-getters-3A6", // Update with your link
  },
  {
    name: "Share And Care - Embedded System",
    description:
      "Developed C++/Qt application for real-time control of electronic components via Arduino. Integrated SQL database for data management and system operation tracking. Reduced data collection errors by 90% compared to manual methods. Tech: C++, Qt Framework, Arduino, electronic sensors, SQLite, serial communication.",
    tags: [
      {
        name: "cpp",
        color: "blue-text-gradient",
      },
      {
        name: "qt",
        color: "green-text-gradient",
      },
      {
        name: "arduino",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MayssaHakimi/Projet_Share_and_Care.git", // Update with your link
  },
  {
    name: "University Microservices Platform",
    description:
      "Architected 8+ microservices handling student data and academic processes. Implemented JWT auth via Keycloak securing 100+ API endpoints. Tech: Spring Boot, Eureka, MongoDB, Angular, Docker.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "eureka",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/orgs/MicroService-Vghar-4TWIN1/repositories", // Update with your link
  },
  {
    name: "Mental Health Predictor",
    description:
      "Built ML model predicting study hours with 92% accuracy. Developed admin dashboard with Cluster analysis visualization. Tech: Python Flask, React, Chart.js, JWT.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "chartjs",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MeriemBoukraa/MachineLearning-", // Update with your link
  },
  {name: "2D Game in C",
description:
"Developed a 2D game using C programming language on Linux platform. Implemented game mechanics, graphics rendering, and user input handling.",
tags: [
{
name: "c",
color: "blue-text-gradient",
},
{
name: "linux",
color: "green-text-gradient",
},
],
image: tripguide,
},
];

export { services, technologies, experiences, testimonials, projects };