import {
  Monitor,
  Database,
  Globe,
  PenTool,
  Layout,
  Command,
  Cpu,
  Code,
  Server,
  GitBranch,
  Figma,
  Linkedin,
  Github,
  Mail,
  Twitter,
  Framer,
  Instagram,
} from "lucide-react";
import type {
  Project,
  SocialLink,
  TechStackItem,
  Experience,
  Education,
} from "../types";
import arcDesk from "@/assets/images/projects/arc-desk.png";
import languageTranslator from "@/assets/images/projects/language-translator.png";
import tollgateSystem from "@/assets/images/projects/tollgate-system.png";
import currencyConvertor from "@/assets/images/projects/currency-convertor.png";
import qrCode from "@/assets/images/projects/qr-code.png";
import portfolio from "@/assets/images/projects/portfolio.png";

export const stack: TechStackItem[] = [
  // Frontend
  { name: "HTML", icon: Code, category: "Frontend" },
  { name: "CSS", icon: PenTool, category: "Frontend" },
  { name: "JavaScript", icon: Code, category: "Frontend" },
  { name: "TypeScript", icon: Code, category: "Frontend" },
  { name: "React.js", icon: Globe, category: "Frontend" },
  { name: "Next.js", icon: Monitor, category: "Frontend" },
  { name: "jQuery", icon: Code, category: "Frontend" },
  { name: "Tailwind CSS", icon: Layout, category: "Frontend" },
  { name: "Bootstrap", icon: Layout, category: "Frontend" },

  // Backend
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "Python", icon: Cpu, category: "Backend" },
  { name: "Java", icon: Cpu, category: "Backend" },

  // Database
  { name: "MySQL", icon: Database, category: "Database" },
  { name: "MongoDB", icon: Database, category: "Database" },

  // Tools & Libraries
  { name: "REST APIs", icon: Globe, category: "Tools & Libraries" },
  { name: "Git", icon: GitBranch, category: "Tools & Libraries" },
  { name: "GitHub", icon: Github, category: "Tools & Libraries" },
  { name: "Postman", icon: Command, category: "Tools & Libraries" },
  { name: "Figma", icon: Figma, category: "Tools & Libraries" },
  { name: "VS Code", icon: Code, category: "Tools & Libraries" },
  { name: "Canva", icon: PenTool, category: "Tools & Libraries" },
  { name: "Notion", icon: Command, category: "Tools & Libraries" },
  { name: "TanStack Query", icon: Command, category: "Tools & Libraries" },
  { name: "Framer Motion", icon: Framer, category: "Tools & Libraries" },
  { name: "GSAP", icon: Command, category: "Tools & Libraries" },
];

export const projects: Project[] = [
  {
    title: "Architecture Design and Consultancy",
    description:
      "Connects users with architects. Features profile management, design uploads, and appointment scheduling.",
    longDescription:
      "A comprehensive platform designed to bridge the gap between architects and clients. It provides a seamless interface for browsing architectural designs, booking consultations, and managing project milestones.",
    features: [
      "User & Architect Profile Management",
      "Dynamic Design Upload & Gallery View",
      "Integrated Appointment Scheduling System",
      "Secure Online Payment Integration",
      "Full Admin Dashboard for CRUD operations",
    ],
    image: arcDesk,
    link: "https://github.com/JaydeepSP/ARCHITECH_PROJECT",
    tech: ["HTML", "CSS", "Django", "SQLite", "Bootstrap"],
  },
  {
    title: "Language Translator - (AI project)",
    description:
      "AI-based system integrating OCR and Google Translate API for text extraction and translation from images.",
    longDescription:
      "An intelligent translation tool that leverages Optical Character Recognition (OCR) to read text from uploaded images and translate it into multiple languages instantly using the Google Translate API.",
    features: [
      "High-accuracy OCR using Pytesseract",
      "Instant translation with Google Translate API",
      "Intuitive Tkinter-based GUI",
      "Support for multiple source and target languages",
      "Batch processing capabilities for images",
    ],
    image: languageTranslator,
    link: "https://github.com/JaydeepSP/Language-Detection---AI",
    tech: ["Python", "OCR", "Pytesseract", "Tkinter"],
  },
  {
    title: "RFID based Toll Collection System",
    description:
      "IoT-based system utilizing RFID tags and IR sensors for automated toll collection.",
    longDescription:
      "A smart city IoT solution that automates the toll collection process. It uses RFID sensors to identify vehicles and automatically deduct toll charges from pre-linked accounts, significantly reducing traffic congestion.",
    features: [
      "Real-time RFID Vehicle Identification",
      "Automated Balance Deduction System",
      "Integrated IR Sensors for vehicle detection",
      "LCD Display for transaction feedback",
      "Scalable backend architecture for toll logs",
    ],
    image: tollgateSystem,
    link: "https://github.com/JaydeepSP/RFID-based-Toll-System",
    tech: ["C++", "IoT", "RFID", "IR Sensors"],
  },
  {
    title: "Currency Converter Application",
    description:
      "Responsive web app using React.js and Tailwind CSS with real-time exchange rates.",
    longDescription:
      "A high-performance web application that provides real-time currency conversion. It features a custom hook for state management and API integration, ensuring fast and accurate rate updates.",
    features: [
      "Live exchange rates from reliable APIs",
      "Custom React Hook (useCurrencyInfo) for data fetching",
      "Highly responsive Tailwind CSS design",
      "Swap functionality for quick conversions",
      "Modular, reusable component architecture",
    ],
    image: currencyConvertor,
    link: "https://github.com/JaydeepSP/Currency-Converter-React",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "QR Code Scanner",
    description:
      "Web-based utility that allows users to scan and decode QR codes directly through the browser.",
    longDescription:
      "A lightweight, browser-based utility that uses the device camera to scan QR codes and decode their contents instantly. No external apps required, ensuring user privacy and ease of use.",
    features: [
      "Direct browser-to-camera integration",
      "Fast & accurate QR decoding",
      "Clean, distraction-free user interface",
      "Automatic URL detection and redirect options",
      "Lightweight build with minimal dependencies",
    ],
    image: qrCode,
    link: "https://github.com/JaydeepSP/QR-Code-Scanner",
    tech: ["JavaScript", "HTML5", "CSS3", "QR API"],
  },
  {
    title: "Portfolio",
    description:
      "A highly interactive and responsive personal portfolio built with modern web technologies.",
    longDescription:
      "This very website you are browsing! A showcase of advanced frontend skills, featuring intricate animations, complex state management, and a premium design system.",
    features: [
      "Dynamic data-driven components in React 19",
      "Complex animations with GSAP and Framer Motion",
      "Utility-first styling with Tailwind CSS",
      "Glassmorphism and modern UI interactions",
      "Fully responsive and dark-mode compatible",
    ],
    image: portfolio,
    link: "https://github.com/JaydeepSP/Portfolio",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Radicalloop TechnoLabs",
    role: "Junior Software Engineer",
    duration: "November, 2025 – January, 2026",
    location: "Ahmedabad, India",
    type: "Onsite",
    description: [
      "Worked on live production projects for a pharma-based PDF management system.",
      "Developed an Admin Panel from scratch with basic authentication.",
      "Implemented PDF upload, text/image extraction, and manual/automatic highlights.",
      "Contributed to the company website built with Next.js by developing UI components.",
    ],
  },
  {
    company: "Radicalloop TechnoLabs",
    role: "Trainee",
    duration: "May, 2025 – November, 2025",
    location: "Ahmedabad, India",
    type: "Onsite",
    description: [
      "Completed structured onsite training focused on modern web development (React.js, Next.js).",
      "Worked with Tailwind CSS and Bootstrap to build responsive user interfaces.",
      "Integrated REST APIs using React Query (TanStack Query).",
      "Built and validated forms using Formik and Yup.",
    ],
  },
];

export const educations: Education[] = [
  {
    school: "K.S.School of Information technology, Gujarat University",
    degree: "M.SC(CA and IT)",
    duration: "July, 2023 – June, 2025",
    location: "Ahmedabad, India",
    grade: "GPA - 3.73/5.00",
  },
  {
    school: "K.S.School of Information technology, Gujarat University",
    degree: "B.SC(CA and IT)",
    duration: "July, 2020 – June, 2023",
    location: "Ahmedabad, India",
    grade: "GPA - 3.63/5.00",
  },
];

export const links: SocialLink[] = [
  {
    name: "Twitter (X)",
    username: "@JaydeepPra58111",
    url: "https://x.com/JaydeepPra58111",
    icon: Twitter,
    color: "group-hover:!text-blue-400",
  },
  {
    name: "Instagram",
    username: "@___j._.d___",
    url: "https://www.instagram.com/___j._.d___/",
    icon: Instagram,
    color: "group-hover:!text-pink-500",
  },
  //   {
  //     name: "YouTube",
  //     username: "@JaydeepPrajapati-bj8xg",
  //     url: "https://www.youtube.com/@JaydeepPrajapati-bj8xg",
  //     icon: Youtube,
  //     color: "group-hover:!text-red-500",
  //   },
  {
    name: "LinkedIn",
    username: "/in/jaydeep-prajapati-614688214",
    url: "https://www.linkedin.com/in/jaydeep-prajapati-614688214/",
    icon: Linkedin,
    color: "group-hover:!text-blue-700",
  },
  {
    name: "GitHub",
    username: "@JaydeepSP",
    url: "https://github.com/JaydeepSP",
    icon: Github,
    color: "group-hover:!text-gray-800",
  },
  {
    name: "Email",
    username: "jaydeepprajapati456@gmail.com",
    url: "mailto:jaydeepprajapati456@gmail.com",
    icon: Mail,
    color: "group-hover:!text-orange-500",
  },
];
