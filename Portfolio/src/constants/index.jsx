import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaDiscord
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiAppwrite } from "react-icons/si";
import { FaBootstrap, FaJava } from "react-icons/fa";
import { DiMysql, DiMsqlServer, DiCss3, DiJava, DiHtml5 as AiFillHtml5 } from "react-icons/di";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "AARIYAN KUMAR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack developer with a knack for creating beautiful and functional user interfaces with optimizes Backend. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React, Tailwind CSS and Framer Motion to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Aariyan-Kumar/Protfolio-me",
  },
  {
    id: 2,
    name: "Exam Assessment Portal",
    description:
      "This Application will help to create the manage the assessment on various skills for the student to consume and evaluate themselves. This is build on Java servelet, Tomcat Server and phpMySQL.",
    image: projectImage2,
    githubLink: "https://github.com/Aariyan-Kumar/Assesment_Portal_Genpact",
  },
  {
    id: 3,
    name: "Mega Blog",
    description:
      "A blogging platform developed with React.js, Tailwind CSS and Appwrite which is database as a service for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage3,
    githubLink: "https://github.com/Aariyan-Kumar/Mega_Blog",
  },
  {
    id: 4,
    name: "Password Genrator",
    description:
      "This Application is build on React.js, Tailwind CSS. This Application genrate new random strong Password without repeating the old password.",
    image: projectImage4,
    githubLink: "https://github.com/Aariyan-Kumar/password-genrator",
  },
  {
    id: 5,
    name: "Todo List",
    description:
      "This Application is build on React.js, Tailwind CSS. It note all task and Display it and further we could Edit, Delete and Mark as done to the respective task.",
    image: projectImage5,
    githubLink: "https://github.com/Aariyan-Kumar/Squibix_PS_DLF",
  },
  {
    id: 6,
    name: "Background Changer",
    description:
      "This Application is build on React.js, Tailwind CSS. This Application only changes the background of the screen by selecting the colours from the given tray below.",
    image: projectImage6,
    githubLink: "https://github.com/Aariyan-Kumar/background-changer",
  },
];

export const BIO = [
  "I am a dedicated and enthusiastic software developer with a strong foundation in Web Development (Full Stack). I am pursuing B.Tech from Silicon University in Computer Science and Technology where I gained hands-on experience in relevant coursework like web development, UI / UX design, and database management.",
  "Throughout my academic journey, I worked on various projects, including developing a Exam Assessment portal using java jsp/Servelet and designing a dynamic website for a writing Blog using React.js, Tailwind CSS and Appwrite, which allowed me to apply my technical skills creatively.These experiences have deepened my passion for software development and motivated me to continuously learn and grow in this industry.",
  "I am excited to bring my skills to a dynamic team where I can contribute meaningfully while further developing my expertise in Full Stack Development. I am eager to take on new challenges and make a positive impact in a forward - thinking organization."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />, // React
    name: "ReactJS",
    experience: "3+ years",
  },
  {
    icon: <AiFillHtml5 className="text-4xl text-orange-600 lg:text-5xl" />, // HTML
    name: "HTML",
    experience: "5+ years",
  },
  {
    icon: <DiCss3 className="text-4xl text-blue-600 lg:text-5xl" />, // CSS
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />, // JavaScript
    name: "JavaScript",
    experience: "1.5+ years",
  },
  {
    icon: <DiJava className="text-4xl text-red-600 lg:text-5xl" />, // Java
    name: "Java",
    experience: "8+ years",
  },
  {
    icon: <FaJava className="text-4xl text-purple-600 lg:text-5xl" />, // Servlet
    name: "Servlet",
    experience: "1+ year",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-500 lg:text-5xl" />, // Tailwind CSS
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />, // Bootstrap
    name: "Bootstrap",
    experience: "2+ years",
  },
  {
    icon: <SiAppwrite className="text-4xl text-pink-500 lg:text-5xl" />, // Appwrite
    name: "Appwrite",
    experience: "1+ month",
  },
  {
    icon: <DiMysql className="text-4xl text-blue-700 lg:text-5xl" />, // MySQL
    name: "MySQL",
    experience: "2+ years",
  },
  {
    icon: <DiMsqlServer className="text-4xl text-red-700 lg:text-5xl" />, // MSSQL
    name: "MSSQL",
    experience: "2+ year",
  },
];




export const EDUCATION = [
  {
    degree: "10th ICSE Board",
    institution: "Kerala Public School Kadma",
    duration: "2018-2019",
    description:
      "The ICSE (Indian Certificate of Secondary Education) Class 10 board exam is conducted by the CISCE (Council for the Indian School Certificate Examinations) and is known for its comprehensive curriculum that emphasizes both theoretical knowledge and practical skills. The exam covers a wide range of subjects including languages, mathematics, sciences, and social studies. It is recognized for its balanced approach to education, promoting analytical thinking and problem-solving abilities in students.",
  },
  {
    degree: "12th ISC Board",
    institution: "Kerala Public School Kadma",
    duration: "2019-2020",
    description:
      "The ISC (Indian School Certificate) Class 12 board exam is conducted by the CISCE and is designed to assess students' proficiency in a variety of subjects, including sciences, commerce, and humanities. It emphasizes both depth and breadth of knowledge, preparing students for higher education and professional courses. The exam focuses on analytical thinking, practical applications, and a comprehensive understanding of the chosen subjects.",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Technology (Pursuing)",
    institution: "Silicon Institute of Technology, Bhubaneswar",
    duration: "December 2021 - June 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, Java, ReactJs, MySQL.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/aariyan.kumar.7543",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/channels/@me/1216979271289933927",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/_aa_kumar_/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Aariyan-Kumar",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aariyan-kumar-667980227/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
