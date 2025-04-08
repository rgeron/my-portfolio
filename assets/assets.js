import arrow_icon_dark from "./arrow-icon-dark.png";
import arrow_icon from "./arrow-icon.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import code_icon_dark from "./code-icon-dark.png";
import code_icon from "./code-icon.png";
import download_icon from "./download-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import edu_icon from "./edu-icon.png";
import graphics_icon from "./graphics-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import hecxensae from "./hecxensae.png";
import logo_raph from "./logo_raph.png";
import logo_raph_dark from "./logo_raph_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import mobile_icon from "./mobile-icon.png";
import moon_icon from "./moon_icon.png";
import project_icon_dark from "./project-icon-dark.png";
import project_icon from "./project-icon.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_white from "./right-arrow-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import sun_icon from "./sun_icon.png";
import ui_icon from "./ui-icon.png";
import user_image from "./user-image.jpeg";
import vscode from "./vscode.png";
import web_icon from "./web-icon.png";

// Import tools from tool-i-use directory
import crewai from "./tool-i-use/crewai.png";
import cursor from "./tool-i-use/cursor.png";
import expo_tool from "./tool-i-use/expo.png";
import figma_tool from "./tool-i-use/figma.png";
import git_tool from "./tool-i-use/git.png";
import langchain from "./tool-i-use/langchain.png";
import next from "./tool-i-use/next.png";
import pandas from "./tool-i-use/pandas.png";
import postgresql_tool from "./tool-i-use/postgresql.png";
import prisma_black from "./tool-i-use/prisma-black.png";
import python from "./tool-i-use/python.png";
import pytorch from "./tool-i-use/pytorch.png";
import react_native from "./tool-i-use/react-native.png";
import seaborn from "./tool-i-use/seaborn.png";
import supabase from "./tool-i-use/supabase.png";
import tailwind from "./tool-i-use/tailwind.png";
import ts from "./tool-i-use/ts.png";

export const assets = {
  logo_raph,
  logo_raph_dark,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  expo_tool,
  postgresql_tool,
  hecxensae,

  figma_tool,

  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  // Tool assets
  ts,
  git_tool,
  next,
  cursor,
  supabase,
  tailwind,
  prisma_black,
  react_native,
  python,
  pytorch,
  seaborn,
  crewai,
  langchain,
  pandas,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Personal website for a freelance consultant",
    bgImage: "/work-1.png",
    url: "https://annegeron.com",
  },
  {
    title: "Know Yourself App",
    description: "Mobile App integrating ChatGPT.",
    bgImage: "/work-2.png",
  },
  {
    title: "UI/UX project on Figma",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.next,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with Next.js framework. I create performant and SEO-friendly sites with server-side rendering and optimized loading times.",
  },
  {
    icon: assets.react_native,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native. Native-like experience with a single codebase for both iOS and Android platforms.",
  },
  {
    icon: assets.figma_tool,
    title: "UI/UX Design",
    description:
      "User-focused design solutions created in Figma. I craft intuitive interfaces with clean aesthetics that prioritize user experience and accessibility.",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "HEC Paris X ENSAE PARIS",
    programLogo: assets.hecxensae,
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  {
    category: "Development Tools",
    tools: [
      assets.next,
      assets.ts,
      assets.react_native,
      assets.expo_tool,
      assets.git_tool,
    ],
  },
  {
    category: "Database Tools",
    tools: [assets.postgresql_tool, assets.supabase, assets.prisma_black],
  },
  {
    category: "Design Tools",
    tools: [assets.figma_tool, assets.tailwind],
  },
  {
    category: "AI Integration Tools",
    tools: [assets.python, assets.crewai, assets.langchain],
  },
];
