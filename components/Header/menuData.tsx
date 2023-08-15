import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "About US",
    newTab: false,
    path: "/about"
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Website Developmet",
        newTab: false,
        path: "/website-development",
      },
      {
        id: 3.2,
        title: "CMS Development",
        newTab: false,
        path: "/cms-developmet",
      },
    ]
  },
  {
    id: 4,
    title: "Case Study",
    newTab: false,
    path: "/case-studies"
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/contact",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/contact"
  },
];

export default menuData;
