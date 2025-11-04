// src/data/projectsData.js
import homeUmnfestival from "../assets/Images/umnfestival2025/home.png";
import rsa1 from "../assets/Images/rsa/1.png";
import rsa2 from "../assets/Images/rsa/2.png";
import rsa3 from "../assets/Images/rsa/3.png";
import rsa4 from "../assets/Images/rsa/4.png";
import dungeon1 from "../assets/Images/dungeongames/1.png";
import dungeon2 from "../assets/Images/dungeongames/2.png";
import dungeon3 from "../assets/Images/dungeongames/3.png";
import dungeon4 from "../assets/Images/dungeongames/4.png";
import unilever1 from "../assets/Images/unilever/1.png";
import unilever2 from "../assets/Images/unilever/2.png";
import unilever3 from "../assets/Images/unilever/3.png";
import unilever4 from "../assets/Images/unilever/4.png";
import waravent1 from "../assets/Images/waravent/1.png";
import waravent2 from "../assets/Images/waravent/2.png";
import waravent3 from "../assets/Images/waravent/3.png";
import waravent4 from "../assets/Images/waravent/4.png";
import lampcara1 from "../assets/Images/lampcara/1.png";
import lampcara2 from "../assets/Images/lampcara/2.png";
import lampcara3 from "../assets/Images/lampcara/3.png";
import lampcara4 from "../assets/Images/lampcara/4.png";
import fontaine1 from "../assets/Images/todo/1.png";
import fdontaine2 from "../assets/Images/todo/2.png";
import fontaine3 from "../assets/Images/todo/3.png";
import ticketUmnfestival from "../assets/Images/umnfestival2025/ticket.png";
import merchandiseUmnfestival from "../assets/Images/umnfestival2025/merchandise.png";
import paymentUmnfestival from "../assets/Images/umnfestival2025/payment.png";
import pantinurul1 from "../assets/Images/pantinurul/1.png";
import pantinurul2 from "../assets/Images/pantinurul/2.png";
import pantinurul3 from "../assets/Images/pantinurul/3.png";
import pantinurul4 from "../assets/Images/pantinurul/4.png";

export const projectsData = [
  {
    id: "umn-festival",
    type: "website",
    title: "UMN Festival 2025",
    subtitle: "Full-stack Development",
    role: "Fullstack Developer",
    category: "Event Platform",
    description: `Contributed to the development of the UMN Festival 2025 website, UMN's largest annual event. I handled both front-end and back-end systems for this digital platform. The site served as an information center, an e-commerce platform for tickets and merchandise, and a schedule tracking system for thousands of attendees participating in the event series.`,
    image: homeUmnfestival,
    galleryImages: [ 
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
    title: "Asymmetric Encryption (RSA)",
    type: "website",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `The RSA Cryptography Algorithm Simulator is an interactive web app designed to demystify the complex mathematics behind asymmetric encryption. It features a visual Key Generator that guides users through creating public and private keys, complete with animations of the Euclidean algorithms. It also includes an Encryption Engine to show precisely how plaintext is converted to ciphertext, and a Decryption Engine to prove how the private key reverses the process. This project transforms abstract theory into a transparent, practical experiment for anyone studying network security or cryptography.`,  
    image: rsa1,
    galleryImages: [ 
      rsa2,
      rsa3,
      rsa4,
    ],
    features: [
      "Interactive Key Generation: Guides users through selecting primes (p, q) and automatically calculates n and φ(n).",
      "Euclidean Algorithm Visualization: Animates the step-by-step validation of 'e' and calculation of 'd'.",
      "Step-by-Step Encryption Pipeline: Visually demonstrates the Plaintext to Ciphertext conversion (c = m^e mod n).",
      "Step-by-Step Decryption Pipeline: Shows the reverse process from Ciphertext back to the original Plaintext.",
      "High-Precision `BigInt` Calculation: Accurately handles the large numbers required for modular exponentiation."
    ],
    techStack: ["React", "Tailwind"],
    demo: "https://simple-rsa-education.vercel.app/",
    repo: "https://github.com/Gr1X/Simple-RSA-Education",
  },
  {
    id: "dungeon-card-games",
    title: "Card Dungeon Games",
    type: "website",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Mind Dungeon is a fantasy-themed memory card game built with React and Tailwind CSS. This project was developed as part of the Hacktiv8 x IBM intensive course, with a primary focus on demonstrating Code Generation using IBM Granite. The game combines classic memory-matching mechanics with RPG-lite elements (scoring, health, and enemies). This project serves as a practical case study on how AI code generation can be leveraged to accelerate and assist in the development of a feature-rich, interactive front-end application.`,
    image: dungeon1,
    galleryImages: [ 
      dungeon2,
      dungeon3,
      dungeon4,
    ],
    features: [
      "AI-Assisted Development: Built as part of the Hacktiv8 x IBM curriculum, leveraging IBM Granite to aid the code generation process.",
      "RPG-lite Mechanics: Players have 3 HP, attack enemies by matching cards, and lose health over time.",
      "Progressive Level System: Features 10 levels with an increasing card count, drawn randomly from a pool of 40 items.",
      "Score & Combo System: Awards points for matches, card bonuses, and rapid consecutive streaks.",
      "Full Customization & Audio: Includes player avatar selection and global BGM/SFX management via React Context.",
      "Responsive Pixel-Art Interface: The game board dynamically adjusts its layout and uses custom pixel-art UI."
    ],
    techStack: ["React", "Tailwind", "IBM Granite"],
    demo: "https://mind-dungeon-games.vercel.app/",
    repo: "https://github.com/Gr1X/mind-dungeon-games",
  },
  {
    id: "unilever-company-profile",
    title: "Unilever Company Profile Website Clone",
    type: "website",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: "The Unilever Company Profile is a 5-page website clone built as a technical test for an 'Introduction to Internet Technology' Lab Assistant. It features a dynamic news section that automatically fetches live articles from NewsAPI, and a product catalog that popululates itself by pulling data from the DummyJSON API. The site uses React Router for seamless navigation and the AOS library for modern scroll animations. You can check out the live demo and the full source code on GitHub.",
    image: unilever1,
    galleryImages: [ 
      unilever2,
      unilever3,
      unilever4,
    ],
    techStack: ["React", "Tailwind"],
    features: [
      "5-page site structure (Home, News, Products, About, Contact) using React Router.",
      "Dynamic content from external APIs: NewsAPI for articles and DummyJSON for products.",
      "A dynamic navbar that changes background color and logo on user scroll.",
      "Reusable components like a 'Banner', 'Navbar', and 'Footer' for consistency.",
      "Engaging 'Animate On Scroll' (AOS) library for fade-in and zoom effects.",
      "Fully responsive design built with Tailwind CSS utility classes."
    ],
    demo: "https://unilever-eight.vercel.app/",
    repo: "https://github.com/Gr1X/Unilever-Company-Profile",
  },
  {
    id: "panti-asuhan-nurul",
    title: "Panti Asuhan Nurul Jadid Website",
    type: "website",
    subtitle: "Fullstack Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Yayasan Nurul Jadid] is a comprehensive web platform built with Laravel, designed to manage a charity's complete digital presence. It features a robust Donation System where users can fund specific campaigns and upload payment proof, and a Volunteer Management module for registering volunteers into different fields (like education and health). The system is powered by a full-featured Admin Dashboard used to manage all donation programs, manually confirm payments, and control all site content, including news articles and photo galleries.`,
    image: pantinurul1,
    galleryImages: [ 
      pantinurul2,
      pantinurul3,
      pantinurul4,
    ],
    features: [
      "Dual-Role Authentication: A complete auth system with distinct 'admin' and 'user' roles and middleware-protected routes.",
      "Admin Payment Verification: Admins can manually review, 'Confirm', or 'Reject' user-submitted donation proofs from a central dashboard.",
      "Admin Program (Campaign) CRUD: Full Create, Read, Update, and Delete functionality for managing all donation campaigns (table 'target').",
      "Admin Content Management: Admins have full CRUD control over site content, including the News (Berita) and the Photo Gallery.",
      "Admin Volunteer Management: Provides a dashboard to view, search, and delete all users who have registered as volunteers.",
      "User Donation Flow: A multi-step process for users to select a program, choose a payment method, and upload a proof of payment to await confirmation.",
      "User Volunteer Registration: Allows users to register as a volunteer for specific fields (e.g., 'pendidikan', 'kesehatan') via a dedicated form.",
      "User Profile Management: Authenticated users can edit their personal info (name, email, photo) and securely change their password.",
      "Dynamic Content Pages: The site includes a landing page with live stats, a year-filterable gallery, and a news section."
    ],
    techStack: ["Laravel", "Tailwind", "MySQL"],
    repo: "https://github.com/Gr1X/Waravent-Event",
  },
  {
    id: "waravent-event-platform",
    title: "Waravent Event Platform",
    type: "website",
    subtitle: "Fullstack Development",
    role: "Fullstack Developer",
    category: "Educational Website",
    description: `Pandawara (Waravent) is a complete web application designed to manage community events from start to finish. It features a robust dual-role system: an Admin Dashboard that provides full CRUD (Create, Update, Delete) control over all events, manages participants , and exports attendee lists to Excel. Concurrently, it provides a User Dashboard where users can browse, register for available events, and manage their own list of upcoming activities ("My List"). Built with pure PHP (PDO), MySQL, and Bootstrap 5, the project also includes a secure authentication system with full account management (username, email, and password changes)`,
    image: waravent1,
    galleryImages: [ 
      waravent2,
      waravent3,
      waravent4,
    ],
  features: [
    "Secure Dual-Role Authentication: Provides separate registration and login for 'Admin' and 'User' roles, using `password_hash`.",
    "Admin Dashboard: Features full Event CRUD (Create, Update, Delete), participant management, and an Excel export function.",
    "User Event Registration: Allows users to browse events, register, view their registered events on a 'My List' page, and cancel registrations.",
    "Full Account Management: Users can update their own username, email, and password through their profile settings.",
    "Persistent Activity Logging: Tracks all user registrations in a permanent history log viewable by both the user and admin."
  ],
    techStack: ["PHP", "Tailwind", "MySQL"],
    repo: "https://github.com/username/rsaweb",
  },
  {
    id: "lampung-cahaya-nusantara",
    title: "Lampung Cahaya Nusantara Website",
    type: "website",
    subtitle: "Frontend Development",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `LAMPCARA is an interactive web app designed to be your all-in-one digital guide for exploring Lampung province. It features an interactive mapping system (powered by MapTiler) to help you pinpoint the location of tourist spots, a live weather widget (using OpenWeatherMap) for planning your visit, and a functional contact form (via SheetDB) for sending feedback directly to the team. Developed by a team of four (Group 8) as a final exam project for an 'Introduction to Internet Technology' course, you can check out the full project details and team members on GitHub.`,
    image: lampcara1,
    galleryImages: [ 
      lampcara2,
      lampcara3,
      lampcara4,
    ],
    features: [
      "Interactive Destination Maps: Implements the MapTiler SDK to display a dynamic map with a precise marker for each of the 16 tourist destinations.",
      "Live Weather Widget: Integrates the OpenWeatherMap API into the footer to fetch and display real-time weather conditions for 'Lampung'.",
      "Functional Feedback Form: Features a 'Contact Us' modal that submits user input directly to a Google Sheet via the SheetDB API, with SweetAlert2 for submission confirmation.",
      "Dynamic Navbar: Includes a responsive, sticky navbar that transitions from transparent to a solid background (with a change in size) on user scroll.",
      "YouTube API Integration: Embeds a YouTube video showcase and dynamically fetches its description using the YouTube Data API v3.",
      "Highlight Destination Slider: A custom-built, interactive carousel on the homepage to showcase 10 featured locations.",
      "Scroll-Triggered Animations: Uses the AOS (Animate On Scroll) library to apply smooth fade-in and zoom animations to components as they enter the viewport.",
      "Multi-Page SPA Structure: Built as a 4-page Single Page Application (Home, Wisata, About, Contact) using React Router for seamless navigation."
    ],
    techStack: ["React", "CSS", "Bootstrap"],
    demo: "https://lampcara.vercel.app/",
    repo: "https://github.com/Gr1X/Lampcara",
  },
  {
    id: "todo-app",
    title: "Fontaine To-do List Website",
    subtitle: "Fullstack Development",
    type: "website",
    role: "Frontend Developer",
    category: "Educational Website",
    description: `Fontaine is a web application designed to manage your daily tasks using a structured To-Do List system. The application features a List Manager to help you separate tasks into different categories (such as 'Work' or 'Personal'), a full Task CRUD system for adding, editing, and deleting individual items, and a Progress Tracker to mark tasks as 'Completed' or 'Pending'. Built with pure PHP, MySQL (PDO), and Bootstrap 5, the project also includes a complete and secure user authentication system, utilizing password_hash for registration and password_verify for login.`,
    image: fontaine1,
    galleryImages: [ 
      fdontaine2,
      fontaine3,
    ],
    features: [
      "Secure User Authentication: Implements a complete registration and login system using `password_hash` and `password_verify`.",
      "List Manager: Allows users to create, view, and manage distinct to-do list categories (e.g., 'Work', 'Personal').",
      "Full Task CRUD: Provides full Create, Read, Update, and Delete functionality for individual tasks within each list.",
      "Progress Tracker: Enables users to mark tasks as 'Completed' or 'Pending' to track their status.",
      "Secure Database Connection: Utilizes PHP Data Objects (PDO) for safe and prepared statement interactions with the MySQL database.",
      "Responsive UI: Built with Bootstrap 5 to ensure the application is functional and looks great on all devices, from mobile to desktop."
    ],
    techStack: ["PHP", "CSS", "MySQL"],
    repo: "https://github.com/Gr1X/To-do-list"
  },
  // {
  //   id: "kliniq-mobile-app",
  //   type: "mobile",
  //   title: "KliniQ Mobile",
  //   subtitle: "Android Development",
  //   role: "Android Developer",
  //   category: "Utility App",
  //   description: `Deskripsi aplikasi mobile Anda...\nFitur-fitur utamanya...`,
  //   image: "/images/mobile-mockup-contoh.png", 
  //   galleryImages: [ 
  //     "/images/mobile-screen-1.png",
  //     "/images/mobile-screen-2.png",
  //     "/images/mobile-screen-3.png",
  //   ],
  //   techStack: ["Kotlin", "Jetpack Compose", "Firebase"],
  //   features: ["Fitur Mobile 1", "Fitur Mobile 2", "Integrasi API"],
  //   demo: "https://play.google.com/store/apps/details?id=...",
  //   repo: "https://github.com/Gr1X/Project_MobileApps",
  // },
  // {
  //   id: "mealplan-generator-diabetes",
  //   type: "ml", 
  //   title: "Contoh Model Klasifikasi Gambar",
  //   subtitle: "Machine Learning / Computer Vision",
  //   role: "Machine Learning Engineer",
  //   category: "AI Model",
  //   description: `Deskripsi model ML Anda...\nDataset yang digunakan...\nMetodologi...\nHasil...`,
  //   image: "/images/ml-graph-contoh.png", // Gambar utama (grafik, arsitektur, atau confusion matrix)
  //   galleryImages: [ // Gambar relevan lainnya
  //       "/images/ml-architecture-contoh.png",
  //       "/images/ml-results-contoh.png",
  //   ],
  //   techStack: ["Python", "PyTorch", "Pandas", "Matplotlib"],
  //   features: ["Klasifikasi ke N kelas", "Preprocessing Data Otomatis", "API Endpoint untuk Prediksi"],
  //   accuracy: "95.7%", // <-- Data Akurasi
  //   metrics: { // <-- Atau data Metrics
  //     Precision: "96%",
  //     Recall: "95.5%",
  //     "F1-Score": "95.7%",
  //   },
  //   demo: "https://link-ke-notebook-colab-atau-paper.com", // Link ke demo/paper
  //   repo: "https://github.com/...", // Link ke repo model
  // },
];
