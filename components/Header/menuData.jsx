const menuData = [
  {
    id: 1,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Website Development",
        path: "/website-development",
        newTab: false,
      },
      {
        id: 42,
        title: "CMS Development",
        path: "/cms-development",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Andriod Development",
      //   path: "/android-development",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Digital Marketing Services",
      //   path: "/digital-marketing-services",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Business Consulting",
      //   path: "/business-consulting",
      //   newTab: false,
      // }
    ],
  },
  {
    id: 3,
    title: "Case Study",
    path: "/case-study",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
