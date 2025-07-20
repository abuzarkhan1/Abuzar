import p1 from "./assets/plura.jpeg";
import p2 from "./assets/multi.jpg";
import p3 from "./assets/music.jpg";
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
    name: "Intelligent Human Resource Management System with Automated Resume Screening and DevOps-Based Deployment",
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
  {
    name: "Music Web Application",
    image: p3,
    images: [p3],
    tags: ["all"],
    description: "Interactive music streaming application with modern UI/UX.",
    fullDescription:
      "A modern music streaming web application with features like playlist creation, music search, audio player controls, and user preferences. Built with responsive design and smooth animations.\n\nIncludes features like music categorization, favorite songs, playlist sharing, audio visualization, and integration with music APIs for extensive music library access.",
    skills: [
      "React",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Web Audio API",
      "Responsive Design",
    ],
    tools: ["Spotify API", "Web Audio API", "Local Storage", "CSS Animations"],
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
