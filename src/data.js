import p1 from "./assets/plura.jpeg";
import p2 from "./assets/multi.jpg";
import aa1 from "./assets/aa1.jpeg";
import aa2 from "./assets/aa2.jpeg";
import aa3 from "./assets/aa3.jpeg";
import aa4 from "./assets/aa4.jpeg";
import aa5 from "./assets/aa5.jpeg";
import aa6 from "./assets/aa6.jpeg";
import aa7 from "./assets/aa7.jpeg";
import aa8 from "./assets/aa8.png";
import aa9 from "./assets/aa9.png";
import aa10 from "./assets/aa10.png";
import aa11 from "./assets/aa11.png";
import aa12 from "./assets/aa12.png";
import aa13 from "./assets/aa13.png";
import aa14 from "./assets/aa14.png";
import aa15 from "./assets/aa15.jpeg";
import aa16 from "./assets/aa16.png";
import p5 from "./assets/2.jpg";
import p6 from "./assets/3.png";

import H1 from "./assets/H1.png";
import H2 from "./assets/H2.png";
import H3 from "./assets/H3.png";
import H4 from "./assets/H4.png";
import H5 from "./assets/H5.png";
import H6 from "./assets/H6.png";
import H7 from "./assets/H7.png";
import H8 from "./assets/H8.png";
import H9 from "./assets/H9.png";
import H10 from "./assets/H10.png";

import e1 from "./assets/e1.png";
import e2 from "./assets/e2.png";
import e3 from "./assets/e3.png";
import e4 from "./assets/e4.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
];

export const projects = [
  {
    name: "Next-Gen HRMS with AI Screening & DevOps Automation",
    image: H4,
    images: [H1, H2, H3, H4, H5, H6, H7, H8, H9, H10],
    tags: ["all"],
    description:
      "Complete CI/CD pipeline implementation for automated deployment.",
    fullDescription: `
This project is a complete and intelligent Human Resource Management System (HRMS) designed to automate, streamline, and modernize core HR operations. It includes multiple services such as employee management, department and position handling, attendance tracking, leave management, payroll processing, asset allocation, announcements, and settings for profile updates and password management. Additionally, a robust project service was developed where administrators can create projects, assign employees, and allocate specific tasks. 

A separate dashboard was created for employees, allowing them to request leaves, view their assigned assets, track salary information, report task progress, and manage their personal settings.

One of the core highlights of this system is the integration of an AI-powered resume screening module. Using cutting-edge NLP models like Transformers and BERT, this module automates the resume shortlisting process by intelligently matching resumes against job descriptions, reducing manual effort and improving accuracy and fairness in hiring.

For deployment, the project follows a complete DevOps pipeline. We used Git for version control and Jenkins to automate the CI/CD process. Docker was used for containerization, while SonarQube and Trivy were implemented for static code analysis and vulnerability scanning. The application was deployed using Kubernetes and Amazon EKS, and GitOps principles were followed using ArgoCD. Monitoring and performance visualization were achieved through Prometheus and Grafana. The application infrastructure was hosted on AWS EC2 instances for scalability and reliability.

This system represents a cloud-native, secure, and intelligent solution tailored for modern HR and recruitment needs, aligning with industry-standard DevOps practices for production-ready deployment.
  `,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "NLP",
      "BERT",
      "Transformers",
    ],
    tools: [
      "Git",
      "Jenkins",
      "Docker",
      "SonarQube",
      "Trivy",
      "Kubernetes",
      "Amazon EKS",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "AWS EC2",
    ],
  },
  {
    name: "End to End Mern stack CICD Project",
    image: p5,
    images: [p5],
    tags: ["all"],
    description:
      "Full-stack MERN application with complete CI/CD pipeline implementation.",
    fullDescription:
      "A comprehensive MERN stack application featuring automated CI/CD pipeline with testing, building, and deployment automation. The project includes React frontend, Node.js backend, MongoDB database, and Express.js server.\n\nThe CI/CD pipeline includes automated testing, code quality checks, security scanning, and deployment to cloud platforms with monitoring and logging capabilities.",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "CI/CD",
    ],
    tools: ["Docker", "Jenkins", "AWS", "MongoDB Atlas", "GitHub Actions"],
  },
  {
    name: "Netflix Clone CICD Using ArgoCD and Monitored Using Prometheus and Grafana",
    image: p6,
    images: [p6],
    tags: ["all"],
    description:
      "Netflix clone with advanced DevOps practices including monitoring and observability.",
    fullDescription:
      "A Netflix clone application built with modern web technologies and deployed using advanced DevOps practices. The project features ArgoCD for GitOps deployment and comprehensive monitoring using Prometheus and Grafana.\n\nIncludes real-time metrics collection, alerting systems, performance monitoring, and automated scaling based on application metrics.",
    skills: [
      "React",
      "Node.js",
      "DevOps",
      "Monitoring",
      "GitOps",
      "Kubernetes",
    ],
    tools: ["ArgoCD", "Prometheus", "Grafana", "Docker", "Kubernetes", "Helm"],
  },
  {
    name: "ArenaX",
    image: aa16,
    images: [
      aa16,
      aa1,
      aa2,
      aa3,
      aa4,
      aa5,
      aa6,
      aa7,
      aa15,
      aa8,
      aa9,
      aa10,
      aa11,
      aa12,
      aa13,
      aa14,
    ],
    tags: ["all"],
    description:
      "Comprehensive cross-platform eSports tournament management ecosystem.",
    fullDescription:
      "ArenaX is a comprehensive cross-platform eSports tournament management ecosystem designed to bridge the gap between competitive players and tournament organizers. The platform is built on a dual-interface architecture, featuring a high-performance Web Dashboard for administrators to orchestrate events and a feature-rich Mobile Application for players to compete on the go.\n\nThe system empowers organizers to seamlessly create tournaments, manage automated bracket systems, and oversee real-time match reporting. For players, the native mobile experience allows for intuitive team management, secure wallet transactions (deposits/withdrawals), and instant tournament registration. Key technical highlights include a real-time notification engine powered by Socket.io for live updates, a robust financial ledger system for handling multi-currency prize pools, and a secure, JWT-based authentication flow ensuring data integrity across all devices.\n\nThe application is engineered for performance and scalability, utilizing a modern MERN stack (MongoDB, Express, React, Node.js) alongside React Native for mobile, ensuring a consistent and responsive experience whether on the web or a handheld device.",
    skills: [
      "React.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "TailwindCSS",
      "Zustand",
    ],
    tools: [
      "Git",
      "Docker",
      "Vite",
      "Expo",
      "Playwright",
      "Vitest",
      "Postman",
      "Framer Motion",
      "JWT & Bcrypt",
    ],
  },
  {
    name: "Sitara Ecommerce Web Application",
    image: e1,
    images: [e1, e2, e3, e4],
    tags: ["all"],
    description:
      "Ecommerce platform for Sitara Beauty Cream with full customer and admin functionality.",
    fullDescription:
      "Sitara is a modern ecommerce web application built for the online sale of Sitara Beauty Cream. The platform allows customers to easily browse products through a beautifully designed homepage and product listing page. Customers can add items to their cart and proceed to a secure checkout process. After successful checkout, a confirmation email is sent to the customer including product details such as name, price, and images. The application ensures a smooth and user-friendly shopping experience.\n\nIn addition to the customer-facing features, the system includes a fully functional admin dashboard where administrators can manage products, view orders, and monitor sales. This platform is designed with responsive UI/UX and integrates essential ecommerce functionality with reliability and scalability in mind.",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    tools: ["Nodemailer", "MongoDB Atlas", "GitHub", "VS Code", "Postman"],
  },
  {
    name: "MultiVendor Ecommerce Web Application",
    image: p2,
    images: [p2],
    tags: ["all"],
    description:
      "Complete multi-vendor ecommerce platform with vendor management system.",
    fullDescription:
      "A comprehensive multi-vendor ecommerce platform that allows multiple vendors to sell their products. Features include vendor registration, product management, order processing, payment integration, and admin dashboard.\n\nThe platform supports multiple payment gateways, inventory management, order tracking, vendor analytics, and customer review system with responsive design for all devices.",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JavaScript",
    ],
    tools: ["Stripe", "PayPal", "Cloudinary", "JWT", "Nodemailer"],
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
