const menuData = [
  {
    id: 1,
    title: "About Us",
    path: "/",
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
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "CMS Development",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Andriod Development",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Digital Marketing Services",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Business Consulting",
        path: "/blog-details",
        newTab: false,
      }
    ],
  },
  {
    id: 3,
    title: "Case Study",
    path: "/about",
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
