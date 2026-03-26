import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiExpress,
  SiTailwindcss, SiBootstrap, SiMongodb, SiGithub, SiFigma, SiPostman,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscCode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";

const technologies = [
  { name: "HTML 5",      Icon: SiHtml5,           color: "#E34F26" },
  { name: "CSS 3",       Icon: SiCss3,            color: "#1572B6" },
  { name: "JavaScript",  Icon: SiJavascript,      color: "#F7DF1E" },
  { name: "TypeScript",  Icon: SiTypescript,      color: "#3178C6" },
  { name: "React JS",    Icon: SiReact,           color: "#61DAFB" },
  { name: "Tailwind",    Icon: SiTailwindcss,     color: "#06B6D4" },
  { name: "Bootstrap",   Icon: SiBootstrap,       color: "#7952B3" },
  { name: "Node JS",     Icon: FaNodeJs,          color: "#339933" },
  { name: "Express JS",  Icon: SiExpress,         color: "#cccccc" },
  { name: "MongoDB",     Icon: SiMongodb,         color: "#47A248" },
  { name: "MySQL",       Icon: GrMysql,           color: "#4479A1" },
  { name: "Figma",       Icon: SiFigma,           color: "#F24E1E" },
  { name: "GitHub",      Icon: SiGithub,          color: "#e0e0e0" },
  { name: "Vite",        Icon: TbBrandVite,       color: "#646CFF" },
  { name: "Postman",     Icon: SiPostman,         color: "#FF6C37" },
  { name: "VS Code",     Icon: VscCode,           color: "#007ACC" },
];

export { technologies };
