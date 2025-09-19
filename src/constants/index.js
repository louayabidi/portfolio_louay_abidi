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
  projet,
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
    id: "Works",
    title: "Projects",
  },
  {
    id: "LessonsLearned",
    title: "Lessons",
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
      "Designed secure booking system with JWT authentication and end-to-end encrypted communications.",
      "Developed admin dashboard with analytics for business intelligence (revenue, popular routes, peak times).",
      "Reduced booking processing time by 65% through optimized workflows.",
      "Implemented a robust CI/CD pipeline using GitHub Actions, automating build, test, and deployment processes; conducted extensive automated testing for SQL injection, code injection, authentication vulnerabilities, and sensitive data handling, ensuring compliance with security standards, though the process was time-intensive due to comprehensive test coverage."
    ],
    source_code_link: "https://github.com/louayabidi/projetstage_devops.git",
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
    source_code_link: "https://github.com/yourusername/esplan-project",
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
    source_code_link: "https://github.com/louayabidi/Twin-Angular.git",
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
    source_code_link: null,
  },
];

const lessonsLearned = [
  {
    title: "Technical Expertise",
    description:
      "Over the years, I have mastered a wide range of programming languages and frameworks, including JavaScript, TypeScript, React, Angular, Node.js, PHP, Python, C++, and JavaFX. I’ve worked with diverse databases like MongoDB, MySQL, PostgreSQL, and SQLite, building robust and scalable systems. My experience with DevOps practices, including CI/CD pipelines and Docker, has taught me to streamline development and deployment processes. I’ve learned to ensure code quality through rigorous testing methodologies and to transform conceptual diagrams into functional, real-world applications using tools like Figma and UML.",
  },
  {
    title: "Teamwork and Collaboration",
    description:
      "For the past four years, I’ve worked daily in collaborative team environments, honing my ability to communicate effectively, share knowledge, and contribute to collective goals. Whether pair programming, conducting code reviews, or coordinating across departments, I’ve learned the importance of clear communication and mutual respect in achieving project success. These experiences have taught me to adapt to diverse team dynamics and leverage collective strengths to deliver high-quality solutions.",
  },
  {
    title: "Problem-Solving Mindset",
    description:
      "Through tackling complex challenges in various projects, I’ve developed a resilient problem-solving mindset. I’ve learned that every problem, no matter how daunting, has a solution waiting to be discovered. This approach has driven me to break down issues systematically, explore creative solutions, and iterate until the best outcome is achieved. From debugging intricate code to optimizing workflows, my experience has reinforced the belief that persistence and innovation can overcome any obstacle.",
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
    image: projet,
    source_code_link: "https://github.com/orgs/Vhagar-4TWIN1/repositories",
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
    image: projet,
    source_code_link: "https://github.com/goal-getters-3A6",
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
    image: projet,
    source_code_link: "https://github.com/MayssaHakimi/Projet_Share_and_Care.git",
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
    image: projet,
    source_code_link: "https://github.com/orgs/MicroService-Vghar-4TWIN1/repositories",
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
    image: projet,
    source_code_link: "https://github.com/MeriemBoukraa/MachineLearning-",
  },
  {
    name: "2D Game in C",
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
    image: projet,
    source_code_link: "https://github.com/yourusername/2d-game-c",
  },
];

export { services, technologies, experiences, lessonsLearned, projects };