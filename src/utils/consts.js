import {
  AddLocationAltOutlined,
  FacebookOutlined,
  GitHub,
  HomeOutlined,
  Instagram,
  LinkedIn,
  MailOutline,
  MenuBookOutlined,
  MessageOutlined,
  PersonOutlineOutlined,
  PhoneIphoneOutlined,
  WhatsApp,
  WorkOutlineOutlined,
} from "@mui/icons-material";

import css3 from "../images/css3.png";
import git from "../images/git.png";
import html5 from "../images/html5.png";
import javascript from "../images/javascript.png";
import mysql from "../images/mysql.png";
import nest from "../images/nest.png";
import postman from "../images/postman.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import typeorm from "../images/typeorm.png";
import spring from "../images/spring.png";

import proyect4_1 from "../images/proyect4_1.png";
import proyect4_2 from "../images/proyect4_2.png";
import proyect4_3 from "../images/proyect4_3.png";

import proyect3_1 from "../images/proyect3_1.png";
import proyect3_2 from "../images/proyect3_2.png";
import proyect3_3 from "../images/proyect3_3.png";

import proyect1_1 from "../images/proyect1_1.png";
import proyect1_2 from "../images/proyect1_2.png";
import proyect1_3 from "../images/proyect1_3.png";
import proyect1_4 from "../images/proyect1_4.png";
import proyect1_5 from "../images/proyect1_5.png";

import proyect2_1 from "../images/proyect2_1.png";
import proyect2_2 from "../images/proyect2_2.png";
import proyect2_3 from "../images/proyect2_3.png";
import proyect2_4 from "../images/proyect2_4.png";
import proyect2_5 from "../images/proyect2_5.png";

export const data = [
  {
    icon: <HomeOutlined />,
    name: "INICIO",
  },
  {
    icon: <PersonOutlineOutlined />,
    name: "SOBRE MI",
  },
  {
    icon: <WorkOutlineOutlined />,
    name: "PROYECTOS",
  },
  {
    icon: <MenuBookOutlined />,
    name: "HABILIDADES",
  },
  {
    icon: <MailOutline />,
    name: "CONTACTO",
  },
];

export const networks = [
  {
    name: "Github",
    icon: <GitHub />,
    url: "https://github.com/juan1996buri",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
  },
  {
    name: "WhatsApp",
    icon: <WhatsApp />,
    url: "https://api.whatsapp.com/send?phone=593987184008&text=Hola, necesito informacion?",
  },
];

export const technologies = [
  {
    icon: html5,
    name: "HTML5",
  },
  {
    icon: css3,
    name: "CSS3",
  },
  {
    icon: tailwind,
    name: "Tailwind",
  },
  {
    icon: javascript,
    name: "JavaScript",
  },
  {
    icon: react,
    name: "ReactJS",
  },
  {
    icon: redux,
    name: "Redux",
  },
  {
    icon: spring,
    name: "SpringBoot",
  },
  {
    icon: nest,
    name: "Nest",
  },
  {
    icon: typeorm,
    name: "TypeOrm",
  },
  {
    icon: mysql,
    name: "MySQL",
  },
  {
    icon: git,
    name: "Git",
  },
  {
    icon: postman,
    name: "Postman",
  },
];

export const proyects = [
  {
    name: "Sitio Web de Peliculas",
    description: "Sitio de peliculas usando TMDB como base de datos ",
    image: proyect1_1,
    git: "https://github.com/juan1996buri/movies",
    url: "",
    tools: ["React.js", "Tailwind", "JavaScrip", "JSX", "Redux Toolkit"],
    information: [
      {
        image: proyect1_1,
        description:
          "Incluye una serie de categorias de acuerdo a las preferencias del usario",
      },
      {
        image: proyect1_2,
        description: "Animación de los items de videos",
      },
      {
        image: proyect1_3,
        description: "Fuuncionalidad de busqueda",
      },
      {
        image: proyect1_4,
        description: "Reproductor de videos",
      },
      {
        image: proyect1_5,
        description: "100% responsivo",
      },
    ],
  },
  {
    name: "Sistema de voto electronico multi-institucional",
    description:
      "Sitio Web creado para la obtención del tituto de desarrollo de software",
    image: proyect2_1,
    git: "",
    url: "",
    tools: [
      "React.js",
      "PrimeFaces",
      "JavaScrip",
      "JSX",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Mysql",
      "Axios",
    ],
    information: [
      {
        image: proyect2_1,
        description: "Getión de procesos de elecciones",
      },
      {
        image: proyect2_2,
        description: "Gestión de candidatos",
      },
      {
        image: proyect2_3,
        description: "Elección de listas",
      },
      {
        image: proyect2_4,
        description: "Gestión de los candidatos",
      },
      {
        image: proyect2_5,
        description: "Login de los administradores",
      },
    ],
  },
  {
    name: "Sitio Web de Pokemons",
    description:
      "Este proyecto consiste en consumir una api externa (pokeapi), esto sirvió para explorar el uso de redux toolkit query",
    image: proyect3_1,
    git: "",
    url: "https://juan1996buri-pokedex.netlify.app",
    tools: [
      "React.js",
      "Tailwind",
      "JavaScrip",
      "JSX",
      "Redux Toolkit",
      "Framer Motion",
    ],
    information: [
      {
        image: proyect3_1,
        description:
          "Genera colores aleatorios cada vez que se ingresa al citio",
      },
      {
        image: proyect3_2,
        description: "Incluye animaciones de movimiento",
      },
      {
        image: proyect3_3,
        description: "100% responsivo",
      },
    ],
  },
  {
    name: "Diseño de Sitio Web de Cafetería",
    description:
      "Este proyecto consiste en explorar y implementar animaciones, para generar un grado de usabilidad al usuario",
    image: proyect4_1,
    git: "",
    url: "",
    tools: ["React.js", "Tailwind", "JavaScrip", "JSX", "FramerMotion"],
    information: [
      {
        image: proyect4_1,
        description: "Diseño que incluye una gran usabilidad para el usuario",
      },
      {
        image: proyect4_2,
        description: "Barra lateral de compras",
      },
      {
        image: proyect4_3,
        description: "100% responsivo",
      },
    ],
  },
];

export const information = [
  {
    icon: <AddLocationAltOutlined />,
    name: "Ciudad",
    detail: "Azogues,Ecuador",
  },
  {
    icon: <MessageOutlined />,
    name: "Email",
    detail: "juan1996buri@gmail.com",
  },
  {
    icon: <PhoneIphoneOutlined />,
    name: "Celular",
    detail: "+593 987184008",
  },
];

export const colors = [
  {
    name: "a",
    bg: "bg-sky-600",
    text: "text-sky-600",
  },
  {
    name: "a",
    bg: "bg-green-600",
    text: "text-green-600",
  },
  {
    name: "a",
    bg: "bg-emerald-600",
    text: "text-emerald-600",
  },
  {
    name: "a",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  {
    name: "a",
    bg: "bg-cyan-500",
    text: "text-cyan-500",
  },
];
