import LabelIcon from "@mui/icons-material/Label";
import HomeIcon from "@mui/icons-material/Home";

const routes = [
  {
    name: "Dasboard",
    icon: HomeIcon,
    url: "/",
  },
  {
    name: "Products",
    icon: LabelIcon,
    url: null,
    subroutes: [
      {
        name: "List",
        icon: null,
        url: "/products",
      },
      {
        name: "New",
        icon: null,
        url: "/products/new",
      },
    ],
  },
];

export default routes;
