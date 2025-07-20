import p1 from "./assets/plura.jpeg";
import p2 from "./assets/multi.jpg";
import p3 from "./assets/music.jpg";
import p4 from "./assets/1.jpg";
import p5 from "./assets/2.jpg";
import p6 from "./assets/3.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
];

export const projects = [
    {
        name: "End to End Maven CICD Project using ArgoCD",
        image: p4,
        images: [p4], // You can add more images here for slider
        tags: ["all"],
        description: "Complete CI/CD pipeline implementation using Maven and ArgoCD for automated deployment.",
        fullDescription: "This project demonstrates a comprehensive CI/CD pipeline using Maven for build automation and ArgoCD for GitOps-based deployment. The pipeline includes automated testing, security scanning, and deployment to Kubernetes clusters.\n\nKey features include automated builds, container image creation, security vulnerability scanning, and seamless deployment across multiple environments.",
        skills: ["Maven", "ArgoCD", "Kubernetes", "Docker", "GitOps", "CI/CD"],
        tools: ["Jenkins", "Docker Hub", "Kubernetes", "Git", "SonarQube"],
        codeLink: "https://github.com/abuzarkhan1/maven-cicd-argocd",
        // liveLink: "https://demo-link.com"
    },
    {
        name: "End to End Mern stack CICD Project",
        image: p5,
        images: [p5],
        tags: ["all"],
        description: "Full-stack MERN application with complete CI/CD pipeline implementation.",
        fullDescription: "A comprehensive MERN stack application featuring automated CI/CD pipeline with testing, building, and deployment automation. The project includes React frontend, Node.js backend, MongoDB database, and Express.js server.\n\nThe CI/CD pipeline includes automated testing, code quality checks, security scanning, and deployment to cloud platforms with monitoring and logging capabilities.",
        skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "CI/CD"],
        tools: ["Docker", "Jenkins", "AWS", "MongoDB Atlas", "GitHub Actions"],
        codeLink: "https://github.com/abuzarkhan1/mern-cicd",
        // liveLink: "https://mern-app-demo.com"
    },
    {
        name: "Netflix Clone CICD Using ArgoCD and Monitored Using Prometheus and Grafana",
        image: p6,
        images: [p6],
        tags: ["all"],
        description: "Netflix clone with advanced DevOps practices including monitoring and observability.",
        fullDescription: "A Netflix clone application built with modern web technologies and deployed using advanced DevOps practices. The project features ArgoCD for GitOps deployment and comprehensive monitoring using Prometheus and Grafana.\n\nIncludes real-time metrics collection, alerting systems, performance monitoring, and automated scaling based on application metrics.",
        skills: ["React", "Node.js", "DevOps", "Monitoring", "GitOps", "Kubernetes"],
        tools: ["ArgoCD", "Prometheus", "Grafana", "Docker", "Kubernetes", "Helm"],
        codeLink: "https://github.com/abuzarkhan1/netflix-clone-devops",
        // liveLink: "https://netflix-clone-demo.com"
    },
    {
        name: "Plura",
        image: p1,
        images: [p1],
        tags: ["all"],
        description: "Modern SaaS platform with advanced features and integrations.",
        fullDescription: "Plura is a comprehensive SaaS platform built with modern technologies. It features user authentication, subscription management, dashboard analytics, and third-party integrations.\n\nThe platform includes advanced features like real-time notifications, payment processing, user management, and comprehensive analytics dashboard with beautiful UI/UX design.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        tools: ["Vercel", "Stripe", "Clerk Auth", "Prisma Studio", "GitHub"],
        codeLink: "https://github.com/abuzarkhan1/Plura-SaaS",
        // liveLink: "https://plura-saas.vercel.app"
    },
    {
        name: "MultiVendor Ecommerce Web Application",
        image: p2,
        images: [p2],
        tags: ["all"],
        description: "Complete multi-vendor ecommerce platform with vendor management system.",
        fullDescription: "A comprehensive multi-vendor ecommerce platform that allows multiple vendors to sell their products. Features include vendor registration, product management, order processing, payment integration, and admin dashboard.\n\nThe platform supports multiple payment gateways, inventory management, order tracking, vendor analytics, and customer review system with responsive design for all devices.",
        skills: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "JavaScript"],
        tools: ["Stripe", "PayPal", "Cloudinary", "JWT", "Nodemailer"],
        codeLink: "https://github.com/abuzarkhan1/Multi_Vendor",
        // liveLink: "https://multivendor-demo.com"
    },
    {
        name: "Music Web Application",
        image: p3,
        images: [p3],
        tags: ["all"],
        description: "Interactive music streaming application with modern UI/UX.",
        fullDescription: "A modern music streaming web application with features like playlist creation, music search, audio player controls, and user preferences. Built with responsive design and smooth animations.\n\nIncludes features like music categorization, favorite songs, playlist sharing, audio visualization, and integration with music APIs for extensive music library access.",
        skills: ["React", "JavaScript", "CSS3", "HTML5", "Web Audio API", "Responsive Design"],
        tools: ["Spotify API", "Web Audio API", "Local Storage", "CSS Animations"],
        codeLink: "https://github.com/abuzarkhan1/Music-App",
        // liveLink: "https://music-app-demo.com"
    },
];

export const achievements = [
    {
        id: 1,
        year: 25,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 2,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 20,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 20,
        description: "COMMUNITY<br />POSTS",
    },
];
