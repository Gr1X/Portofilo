// src/data/projectsData.js
import homeUmnfestival from "../assets/Images/umnfestival2025/home.png";
import rsaweb from "../assets/Images/rsaweb.png";
import dungeonmainmenu from "../assets/Images/dungeongames/mainmenu.png";
import unileverMenu from "../assets/Images/unileverprofile/home.png";
import waraventMenu from "../assets/Images/waravent/home.png";
import lampcaraMenu from "../assets/Images/lampcara/home.png";
import fontaineMenu from "../assets/Images/todo/menu.png";
import ticketUmnfestival from "../assets/Images/umnfestival2025/ticket.png";
import merchandiseUmnfestival from "../assets/Images/umnfestival2025/merchandise.png";
import paymentUmnfestival from "../assets/Images/umnfestival2025/payment.png";
import menuPantiAsuhan from "../assets/Images/pantinurul/home.png";

export const projectsData = [
  {
    id: "umn-festival",
    title: "UMN Festival 2025",
    subtitle: "Full-stack Development",
    role: "Fullstack Developer",
    category: "Event Platform",
    description: `Contributed to the development of the UMN Festival 2025 website, UMN's largest annual event. I handled both front-end and back-end systems for this digital platform. The site served as an information center, an e-commerce platform for tickets and merchandise, and a schedule tracking system for thousands of attendees participating in the event series.`,
    image: homeUmnfestival,
    galleryImages: [ // <-- TAMBAHKAN ARRAY INI
      ticketUmnfestival,
      merchandiseUmnfestival,
      paymentUmnfestival
    ],
    techStack: ["Laravel", "Tailwind", "MySQL"],
    features: [
      "Design and implementation of responsive UI/UX",
      "Authentication system",
      "Ticket and merchandise purchase management",
      "Midtrans payment gateway integration",
      "Unique code generation for ticket validation",
      "Admin dashboard for managing event data"
    ],
    demo: "https://umnfestival.com",
    repo: "https://github.com/username/umnfestival",
  },
  {
    id: "rsa-edu",
    title: "Educational RSA Encryption Website",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: rsaweb,
    techStack: ["React", "Tailwind"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "dungeon-card-games",
    title: "Card Dungeon Games",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: dungeonmainmenu,
    techStack: ["React", "Tailwind", "IBM Granite"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "unilever-company-profile",
    title: "Unilever Company Profile Website Clone",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: unileverMenu,
    techStack: ["React", "Tailwind"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "panti-asuhan-nurul",
    title: "Panti Asuhan Nurul Jadid Website",
    subtitle: "Fullstack Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: menuPantiAsuhan,
    techStack: ["Laravel", "Tailwind", "MySQL"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "waravent-event-platform",
    title: "Waravent Event Platform",
    subtitle: "Fullstack Development",
    role: "Fullstack Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: waraventMenu,
    techStack: ["PHP", "Tailwind", "MySQL"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "lampung-cahaya-nusantara",
    title: "Lampung Cahaya Nusantara Website",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: lampcaraMenu,
    techStack: ["React", "CSS"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "todo-app",
    title: "Fontaine To-do List Website",
    subtitle: "Fullstack Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Developed an interactive web app to demonstrate RSA encryption concepts
    using modern front-end technologies.`,
    image: fontaineMenu,
    techStack: ["PHP", "CSS", "MySQL"],
    demo: "https://rsaweb-demo.com",
    repo: "https://github.com/username/rsaweb",
  },
];
