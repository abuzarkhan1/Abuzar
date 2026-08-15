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

// Authentic project assets from pics directory
import kanban1 from "./assets/kanban-1.png";
import kanban2 from "./assets/kanban-2.png";
import kanban3 from "./assets/kanban-3.png";
import kanban4 from "./assets/kanban-4.png";
import kanban5 from "./assets/kanban-5.png";

import vibegrid1 from "./assets/vibegrid-1.png";
import vibegrid2 from "./assets/vibegrid-2.png";
import vibegrid3 from "./assets/vibegrid-3.png";
import vibegrid4 from "./assets/vibegrid-4.png";
import vibegrid5 from "./assets/vibegrid-5.png";

import vibevoice1 from "./assets/vibevoice-1.png";
import vibevoice2 from "./assets/vibevoice-2.png";
import vibevoice3 from "./assets/vibevoice-3.png";
import vibevoice4 from "./assets/vibevoice-4.png";
import vibevoice5 from "./assets/vibevoice-5.png";

import pulse1 from "./assets/pulse-1.png";
import pulse2 from "./assets/pulse-2.png";
import pulse3 from "./assets/pulse-3.png";
import pulse4 from "./assets/pulse-4.png";
import pulse5 from "./assets/pulse-5.png";
import pulse6 from "./assets/pulse-6.png";
import pulse7 from "./assets/pulse-7.png";

import gitxDashboard from "./assets/gitx-dashboard.png";
import gitxArch from "./assets/gitx-arch.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Systems & Rust",
    id: "rust",
  },
  {
    name: "AI & Desktop",
    id: "desktop",
  },
  {
    name: "Full Stack",
    id: "fullstack",
  },
  {
    name: "DevOps & Cloud",
    id: "devops",
  },
];

export const projects = [
  {
    name: "AI Harness Kanban — MCP Task Orchestrator & Desktop Board",
    image: kanban1,
    images: [kanban1, kanban2, kanban3, kanban4, kanban5],
    tags: ["all", "desktop", "fullstack"],
    description:
      "High-performance, local-first desktop Kanban board and task orchestration system with real-time Model Context Protocol (MCP) server integration for autonomous AI coding agents.",
    fullDescription: `AI Harness Kanban Project Manager is a high-performance, local-first desktop productivity application engineered for developers orchestrating tasks alongside autonomous AI coding agents (Antigravity, Cursor, Claude Code). Built with Electron 43, React 19, TypeScript, Tailwind CSS, and better-sqlite3 with WAL mode, it provides seamless multi-project task management and direct bidirectional Model Context Protocol (MCP) integration.

Key Architectural & Technical Highlights:
• Embedded MCP Server Integration: Built-in stdio Model Context Protocol (MCP) server providing 8 dedicated tools (kanban_list_projects, kanban_list_tasks, kanban_create_task, kanban_move_task, kanban_report_activity, kanban_get_workspace_context, etc.) with automatic harness discovery and configuration injection.
• Local-First SQLite with WAL Mode: Powered by better-sqlite3 with Write-Ahead Logging (WAL) and foreign keys enabled for zero-latency local operations, sub-millisecond task indexing, and atomic multi-board transactions.
• Modern React 19 Kanban Board: Drag-and-drop task workflows with priority tagging, custom color labels, markdown descriptions, task filtering, search, and activity audit logging.
• Cross-Platform Native Packaging: Packaged natively for macOS (DMG/Zip with arm64 & x64 architectures) and Windows with single-instance lifecycle management.`,
    skills: [
      "Electron 43",
      "React 19",
      "TypeScript",
      "SQLite (better-sqlite3)",
      "Model Context Protocol (MCP)",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
    ],
    tools: [
      "Electron Vite",
      "Electron Builder",
      "Git",
      "VS Code",
      "Claude Desktop",
      "Antigravity",
      "macOS Toolchain",
    ],
    codeLink: "https://github.com/abuzarkhan1/Kanban_Connector_For_Ai_Harness",
    liveLink: "https://kanban-connector-for-ai-harness.vercel.app/",
  },
  {
    name: "VibeGrid — Agnostic AI Agent Grid & GPU Terminal",
    image: vibegrid1,
    images: [vibegrid1, vibegrid2, vibegrid3, vibegrid4, vibegrid5],
    tags: ["all", "rust", "desktop"],
    description:
      "High-performance, local-first developer workspace and terminal multiplexer for orchestrating multiple shells and AI coding agents with WebGL GPU acceleration and Model Context Protocol (MCP) support.",
    fullDescription: `VibeGrid is the definitive "Agnostic" Vibe Coder workspace — a high-performance, open-source desktop application engineered for developers orchestrating multiple terminal shells, background services, and autonomous AI coding agents simultaneously. Unlike restrictive walled-garden AI coding environments, VibeGrid delivers complete agent neutrality with zero vendor lock-in, zero telemetry, and 100% offline local privacy.

Key Architectural & Technical Highlights:
• 60 FPS WebGL GPU Rendering: Powered by @xterm/addon-webgl for hardware-accelerated text streaming, sub-10ms keystroke latency, and a 5,000-line scrollback buffer with automated Canvas 2D fallback.
• Native Rust PTY Engine: Asynchronous PTY process manager utilizing portable-pty on Tauri v2 with a 16ms backpressure-aware IPC output batcher to prevent terminal output locks under extreme compilation and streaming load.
• Dynamic 1–16 Binary-Tree Multiplexing: Dynamic recursive split-pane layout multiplexer (Allotment) supporting horizontal splits (Cmd/Ctrl+D), vertical splits (Cmd/Ctrl+Shift+D), fluid divider resizing, directional 2D focus navigation, and single-pane maximization (Cmd/Ctrl+Shift+Enter).
• Model Context Protocol (MCP) Server: Built-in native MCP server exposing the vibegrid_get_panes tool and a local REST API (http://127.0.0.1:8792/panes), allowing autonomous AI agents to inspect live terminal states across all workspace panes in real time.
• Multi-Workspace Management & Command Palette: Atomic JSON persistence for custom workspace configurations, unified fuzzy-search Command Palette (Cmd/Ctrl+Shift+P), and 7 curated developer themes (VibeDark, VibeLight, Dracula, Nord, Solarized).`,
    skills: [
      "Rust",
      "Tauri v2",
      "React 18",
      "TypeScript",
      "xterm.js (WebGL GPU)",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Model Context Protocol (MCP)",
      "Tokio",
      "portable-pty",
    ],
    tools: [
      "Cargo",
      "Vite",
      "Git",
      "macOS & Windows Toolchains",
      "Vercel",
      "Next.js (Web)",
    ],
    codeLink: "https://github.com/abuzarkhan1/VibeGrid",
    liveLink: "https://vibe-grid-lyart.vercel.app/",
  },
  {
    name: "VibeVoice — Native macOS Push-to-Talk & AI Launcher",
    image: vibevoice1,
    images: [
      vibevoice1,
      vibevoice2,
      vibevoice3,
      vibevoice4,
      vibevoice5,
    ],
    tags: ["all", "desktop"],
    description:
      "Native macOS productivity desktop utility for instant push-to-talk voice dictation, multi-provider AI speech cleanup, synchronized TTS word highlighting, and global floating AI prompt launcher.",
    fullDescription: `VibeVoice is a native macOS desktop utility engineered to supercharge productivity through lightning-fast voice dictation, intelligent multi-provider LLM speech cleanup, real-time Text-to-Speech (TTS) with word boundary tracking, and system-wide floating AI prompts. Built with Electron 39, Vite 7, React 19, TypeScript, and high-performance native Swift/C helpers.

Key Architectural & Technical Highlights:
• Instant Push-to-Talk Dictation (STT): Monitors the Fn key via a low-level native CoreGraphics event tap helper (hold-watcher). Speech is captured natively through the macOS Speech Framework (SFSpeechRecognizer) and streams real-time audio RMS levels to an animated waveform in React. On release, it transcribes and automatically pastes into the active application via AXUIElement accessibility events.
• Multi-Provider AI Speech Cleanup Pass: Automatically channels raw transcribed speech through user-selected LLM providers (Anthropic Claude 3.5 Sonnet/Haiku, OpenAI GPT-4o/GPT-4o-mini, or Google Gemini 1.5 Pro/Flash) to eliminate filler words ("um", "uh"), refine grammar, and format punctuation before injecting text into focused apps.
• Text-to-Speech (TTS) with Word-by-Word Highlighting: Highlight text in any macOS application and press ⌘+Shift+S. A native Swift AVSpeechSynthesizer process extracts the selection, synthesizes speech, and emits word boundary markers (start, length) to drive real-time word-by-word synchronized highlighting in a floating HUD overlay.
• Global AI Prompt Launcher: System-wide floating prompt bar summoned from anywhere (⌘+Shift+P) to transform text, refactor clipboard code, or ask LLMs questions on the fly.
• Hardware-Level Security: All API keys and preferences are encrypted on disk with AES-GCM backed by the native macOS Keychain via Electron's safeStorage API.`,
    skills: [
      "Electron 39",
      "React 19",
      "TypeScript",
      "Swift 5",
      "C (Clang)",
      "Tailwind CSS v4",
      "macOS Speech Framework",
      "AVSpeechSynthesizer",
      "CoreGraphics (CGEventTap)",
      "Accessibility APIs (AXUIElement)",
      "Anthropic Claude API",
      "OpenAI GPT API",
      "Google Gemini API",
    ],
    tools: [
      "Electron Vite",
      "Electron Builder",
      "esbuild",
      "macOS SafeStorage",
      "Xcode Command Line Tools",
      "Git",
      "Postman",
    ],
    codeLink: "https://github.com/abuzarkhan1/VibeVoice",
    liveLink: "https://vibe-voice-website.vercel.app/",
  },
  {
    name: "Pulse — Unified Productivity & Mind Mapping Workspace",
    image: pulse1,
    images: [
      pulse1,
      pulse2,
      pulse3,
      pulse4,
      pulse5,
      pulse6,
      pulse7,
    ],
    tags: ["all", "fullstack"],
    description:
      "All-in-one collaborative engineering and productivity platform with Tiptap rich-text tasks, ReactFlow visual mind mapping, interactive calendar roadmaps, Pomodoro timer, and real-time team chat.",
    fullDescription: `Pulse is an all-in-one collaborative engineering and productivity workspace built to streamline task planning, architectural brainstorming, time tracking, and team communication into a single unified platform. Developed with Next.js 14 (App Router, React Server Components), TypeScript, PostgreSQL, and Prisma ORM.

Key Architectural & Technical Highlights:
• Rich-Text Notes & Task Management: Interactive Tiptap rich-text editor supporting hierarchical task nesting, assignees, due dates, priority flags, tag taxonomy, and multimedia asset attachments.
• Interactive Visual Mind Maps: Node-based canvas powered by ReactFlow with custom node types, 12 vibrant color palettes, customizable edge curves, automated layout generation, and persistent state auto-saving.
• Interactive Calendar & Roadmap: Multi-view schedule with date-based task badges, deadline filtering, and visual roadmap projections.
• Circular SVG Pomodoro Focus Timer: Customizable work and break session intervals with smooth animated SVG progress rings, ambient audio, and productivity session logging.
• Real-Time Group Chat & Direct Messaging: Low-latency workspace messaging channels, direct private chats, file sharing, and instant notifications powered by WebSockets and Supabase real-time events.
• Role-Based Workspace Administration: Multi-tenant workspace architecture with granular role-based access control (Admin, Editor, Viewer), member invitations, and comprehensive account preference management.`,
    skills: [
      "Next.js 14 (App Router & RSC)",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth.js",
      "Tailwind CSS",
      "Tiptap Editor",
      "ReactFlow",
      "WebSockets",
      "Supabase",
      "next-intl",
      "Zustand",
    ],
    tools: [
      "Docker Compose",
      "Node.js",
      "Git",
      "PostgreSQL / Supabase",
      "Postman",
      "Vercel",
    ],
    codeLink: "https://github.com/abuzarkhan1/Pulse",
  },
  {
    name: "GitX — Terminal Git Intelligence & Archaeology Engine",
    image: gitxDashboard,
    images: [gitxDashboard, gitxArch],
    tags: ["all", "rust", "devops"],
    description:
      "High-performance, local-first terminal engine and interactive TUI for deep Git repository analytics, explainable risk scoring, maintenance hotspots, and unreachable commit recovery.",
    fullDescription: `GitX is a local-first, terminal-native Git repository intelligence and code archaeology system designed to turn raw version control histories into actionable, explainable insights. Engineered as an 11-crate modular Rust workspace, GitX operates 100% locally with zero cloud dependencies, zero external accounts, and zero non-deterministic AI scoring.

Key Architectural & Technical Highlights:
• Modular 11-Crate Rust Architecture: Clean separation of concerns across specialized crates (gitx-core, gitx-git, gitx-index, gitx-storage, gitx-history, gitx-analysis, gitx-graph, gitx-search, gitx-services, gitx-tui, and gitx-cli).
• Sub-Second SQLite Indexing: Indexes commit histories, file trees, diff churn, and author metadata into a local persistent SQLite database (rusqlite), enabling sub-second analytical queries, full-text search across commits, and lazy loading for massive enterprise repositories.
• Explainable Maintenance Risk & Hotspots: Computes deterministic maintenance risk metrics for every file by mathematically modeling change frequency, code churn, bug-fix ratio, author concentration, and architectural complexity. Every score exposes its raw underlying Git signals and mathematical formula.
• Interactive Ratatui TUI Dashboard: Keyboard- and mouse-driven terminal dashboard built with ratatui and crossterm for exploring repository health, branch divergence, author ownership concentration, dependency graphs, and symbol lineage.
• Archaeological Dangling Object & Reflog Recovery: Scans unreachable commits, orphaned tree objects, and reflog histories to effortlessly recover lost work and unmerged stashes.
• Automated CI/CD & Cross-Platform Distribution: Analytical commands export structured machine-readable JSON/CSV reports, with cross-platform packaging via cargo-dist for macOS, Linux, and Windows.`,
    skills: [
      "Rust (11-Crate Workspace)",
      "SQLite (rusqlite)",
      "Git Engine (gix)",
      "Ratatui",
      "Crossterm",
      "Petgraph",
      "Rayon",
      "Clap",
      "Serde JSON",
      "Criterion",
    ],
    tools: [
      "Cargo",
      "cargo-dist",
      "Homebrew",
      "GitHub Actions CI/CD",
      "Git",
      "Linux / macOS / Windows",
    ],
    codeLink: "https://github.com/abuzarkhan1/gitx",
    liveLink: "https://gitx-one.vercel.app/",
  },
  {
    name: "Next-Gen HRMS with AI Screening & DevOps Automation",
    image: H4,
    images: [H1, H2, H3, H4, H5, H6, H7, H8, H9, H10],
    tags: ["all", "fullstack", "devops"],
    description:
      "Intelligent enterprise HRMS with NLP-powered resume shortlisting and production-grade GitOps Kubernetes pipeline.",
    fullDescription: `This project is a complete and intelligent Human Resource Management System (HRMS) designed to automate, streamline, and modernize core HR operations. It includes multiple services such as employee management, department and position handling, attendance tracking, leave management, payroll processing, asset allocation, announcements, and settings for profile updates and password management. Additionally, a robust project service was developed where administrators can create projects, assign employees, and allocate specific tasks. 

A separate dashboard was created for employees, allowing them to request leaves, view their assigned assets, track salary information, report task progress, and manage their personal settings.

One of the core highlights of this system is the integration of an AI-powered resume screening module. Using cutting-edge NLP models like Transformers and BERT, this module automates the resume shortlisting process by intelligently matching resumes against job descriptions, reducing manual effort and improving accuracy and fairness in hiring.

For deployment, the project follows a complete DevOps pipeline. We used Git for version control and Jenkins to automate the CI/CD process. Docker was used for containerization, while SonarQube and Trivy were implemented for static code analysis and vulnerability scanning. The application was deployed using Kubernetes and Amazon EKS, and GitOps principles were followed using ArgoCD. Monitoring and performance visualization were achieved through Prometheus and Grafana. The application infrastructure was hosted on AWS EC2 instances for scalability and reliability.

This system represents a cloud-native, secure, and intelligent solution tailored for modern HR and recruitment needs, aligning with industry-standard DevOps practices for production-ready deployment.`,
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
    name: "ArenaX — eSports Tournament Ecosystem",
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
    tags: ["all", "fullstack"],
    description:
      "Comprehensive cross-platform eSports tournament management ecosystem with web organizer portal and mobile gamer app.",
    fullDescription: `ArenaX is a comprehensive cross-platform eSports tournament management ecosystem designed to bridge the gap between competitive players and tournament organizers. The platform is built on a dual-interface architecture, featuring a high-performance Web Dashboard for administrators to orchestrate events and a feature-rich Mobile Application for players to compete on the go.

The system empowers organizers to seamlessly create tournaments, manage automated bracket systems, and oversee real-time match reporting. For players, the native mobile experience allows for intuitive team management, secure wallet transactions (deposits/withdrawals), and instant tournament registration. Key technical highlights include a real-time notification engine powered by Socket.io for live updates, a robust financial ledger system for handling multi-currency prize pools, and a secure, JWT-based authentication flow ensuring data integrity across all devices.

The application is engineered for performance and scalability, utilizing a modern MERN stack (MongoDB, Express, React, Node.js) alongside React Native for mobile, ensuring a consistent and responsive experience whether on the web or a handheld device.`,
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
    name: "Netflix Clone & GitOps Observability",
    image: p6,
    images: [p6],
    tags: ["all", "devops"],
    description:
      "Netflix clone application deployed using ArgoCD GitOps and full-stack observability with Prometheus and Grafana.",
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
    name: "End-to-End MERN CI/CD Cloud Pipeline",
    image: p5,
    images: [p5],
    tags: ["all", "fullstack", "devops"],
    description:
      "Full-stack MERN application with automated multi-stage CI/CD pipeline, security scanning, and cloud deployment.",
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
    name: "Sitara Ecommerce Web Application",
    image: e1,
    images: [e1, e2, e3, e4],
    tags: ["all", "fullstack"],
    description:
      "Modern ecommerce platform for cosmetics with customer shopping portal and administrative sales management.",
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
    name: "MultiVendor Ecommerce Platform",
    image: p2,
    images: [p2],
    tags: ["all", "fullstack"],
    description:
      "Comprehensive multi-vendor ecommerce ecosystem with vendor stores, payment gateways, and order management.",
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
    year: 30,
    description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
  },
  {
    id: 2,
    year: 3,
    description: "YEARS OF<br />EXPERIENCE",
  },
  {
    id: 3,
    year: 25,
    description: "TECHNOLOGIES &<br />FRAMEWORKS",
  },
  {
    id: 4,
    year: 20,
    description: "COMMUNITY<br />POSTS",
  },
];
