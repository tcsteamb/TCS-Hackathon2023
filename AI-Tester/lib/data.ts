import { FaBusinessTime, FaCode, FaBook, FaFlask, FaSitemap } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Test Generator",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Team",
    hash: "#team",
  }
] as const;

export const teamData = [
  { name: "Gnanavel", icon: FaBusinessTime, role: "Bussines" },
  { name: "Piyani  ", icon: FaCode, role: "Developer" },
  { name: "Manas   ", icon: FaFlask, role: "Tester" },
  { name: "Karthik ", icon: FaBook, role: "Designer" },
  { name: "Hector  ", icon: FaSitemap, role: "Architect" }
] as const;