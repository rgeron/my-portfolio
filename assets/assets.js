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
import cursor from "./tool-i-use/cursor.png";
import expo_tool from "./tool-i-use/expo.png";
import figma_tool from "./tool-i-use/figma.png";
import git_tool from "./tool-i-use/git.png";
import next from "./tool-i-use/next.png";
import prisma_black from "./tool-i-use/prisma-black.png";
import react_native from "./tool-i-use/react-native.png";
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
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
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
    description: "B.Tech in Computer Science",
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
      assets.ts,
      assets.next,
      assets.react_native,
      assets.cursor,
      assets.git_tool,
      assets.expo_tool,
    ],
  },
  {
    category: "Database Tools",
    tools: [assets.supabase, assets.prisma_black],
  },
  {
    category: "Design Tools",
    tools: [assets.figma_tool, assets.tailwind],
  },
];
