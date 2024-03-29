import {
  AddLocationAltOutlined,
  GitHub,
  HomeOutlined,
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
import reactNative from "../images/reactNative.png";
import javascript from "../images/javascript.png";
import mysql from "../images/mysql.png";
import nest from "../images/nest.png";
import postman from "../images/postman.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import typeorm from "../images/typeorm.png";
import spring from "../images/spring.png";
import expo from "../images/expo.png";
import postgresql from "../images/postgresql.png";
import mongodb from "../images/mongodb.png";

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

import portafolio1 from "../images/portafolio1.png";
import portafolio2 from "../images/portafolio2.png";
import portafolio3 from "../images/portafolio3.png";
import uiEcommerceRN1 from "../images/uiEcommerceRN1.jpg";
import uiEcommerceRN2 from "../images/uiEcommerceRN2.jpg";
import uiEcommerceRN3 from "../images/uiEcommerceRN3.jpg";

import uiDelivery from "../images/ui_delivery.png";
import uiTravel from "../images/travel.png";

import uiDart from "../images/dart.png";
import uiFlutter from "../images/flutter.jpg";

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
    icon: uiDart,
    name: "Dart",
  },
  {
    icon: uiFlutter,
    name: "Flutter",
  },
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
    icon: reactNative,
    name: "React Native",
  },
  {
    icon: expo,
    name: "Expo",
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
    icon: postgresql,
    name: "Posgresql",
  },
  {
    icon: mongodb,
    name: "MongoDB",
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
    name: "App de Delivery con Animaciones",

    description:
      "Este proyecto se enfoca en resolver un desafío relacionado con la implementación de animaciones en una aplicación de entrega de pedidos.",
    image: uiDelivery,
    git: "https://github.com/juan1996buri/challenge-delivery",
    url: "",
    tools: ["Flutter", "Dart"],
    information: [
      {
        video: "https://www.youtube.com/shorts/8fsoxzBlBsg",
        description:
          "La usabilidad siempre ha sido una parte fundamental en el desarrollo de aplicaciones. En este proyecto, se logró alcanzar una interfaz altamente intuitiva y atractiva mediante el uso de animaciones y transiciones fluidas. Estas animaciones agregan un toque visualmente agradable a la experiencia del usuario, mejorando la interacción con la aplicación de entrega de pedidos.",
      },
    ],
  },
  {
    name: "App de Viajes",
    description:
      "Este proyecto se centra en crear un diseño simple e intuitivo para el usuario, con el objetivo de mejorar mis habilidades en el desarrollo de aplicaciones móviles.",
    image: uiTravel,
    git: "https://github.com/juan1996buri/ui-travel.git",
    url: "",
    tools: ["Flutter", "Dart"],
    information: [
      {
        video: "https://youtube.com/shorts/5R4qU2HIcB0?feature=share",
        description:
          "Este proyecto consiste en implementar un diseño previamente obtenido, con el fin de fortalecer mis habilidades en el desarrollo de aplicaciones. La interfaz se ha creado con especial atención en la simplicidad y la intuición, lo que proporciona una experiencia de usuario fluida y agradable. Al trabajar en este proyecto, he profundizado en el uso de Flutter y Dart para la creación de interfaces de usuario atractivas y funcionales.",
      },
    ],
  },
  {
    name: "Sitio Web de Peliculas",
    description: "Sitio de peliculas usando TMDB como base de datos ",
    image: proyect1_1,
    git: "https://github.com/juan1996buri/movies",
    url: "https://moviesplus1.netlify.app",
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
    git: "https://github.com/juan1996buri/tesis-frontend-voto-electronico.git",
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
    name: "UI clone de ecommercio electronico Zomato ",
    description:
      "Aplicacion app creado para el manejo de react-native con expo",
    image: uiEcommerceRN1,
    git: "https://github.com/juan1996buri/ecommerce-react-native-v1",
    url: "",
    tools: ["React Native", "Expo", "Redux Toolkit", "JSX"],
    information: [
      {
        image: uiEcommerceRN1,
        description:
          "Obtención de restaurantes y categorias atravez de una api",
      },
      {
        image: uiEcommerceRN2,
        description: "Pagar productos seleccionados por el usuario",
      },
      {
        image: uiEcommerceRN3,
        description: "Getión de productos seleccionados por parte del usuario",
      },
    ],
  },
  {
    name: "Sitio Web de Pokemons",
    description:
      "Este proyecto consiste en consumir una api externa (pokeapi), esto sirvió para explorar el uso de redux toolkit query",
    image: proyect3_1,
    git: "https://github.com/juan1996buri/pokedex.git",
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
          "Genera colores aleatorios cada vez que se ingresa al Sitio Web",
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
    git: "https://github.com/juan1996buri/cafeteria_design",
    url: "https://golden-parfait-146ab0.netlify.app",
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
  {
    name: "Portafolios personal",
    description:
      "Este proyecto consiste en exibir mis habilidades a lo largo de mi carrera de manera profesional",
    image: proyect1_1,
    git: "https://github.com/juan1996buri/portafolios.git",
    url: "",
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
        image: portafolio1,
        description: "",
      },
      {
        image: portafolio2,
        description: "Barra lateral modo responsivo",
      },
      {
        image: portafolio3,
        description: "Area de envio de mensajes validado",
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
