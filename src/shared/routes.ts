import { RouteProps } from "react-router-dom";

import Home from "../frontend/pages/Home";
import { generateRoutes } from "./utils/funcs/generateRoutes";
import NotFound from "../frontend/pages/NotFound";
import About from "../frontend/pages/About";

export interface MyRouteProps extends RouteProps {
  free?: boolean;
  key?: string;
  childs?: MyRouteProps[];
}

const routes: MyRouteProps[] = [
  {
    exact: true,
    path: "/",
    component: Home,
    key: "Home",
  },
  {
    exact: true,
    path: "/about",
    component: About,
    key: "About",
  },
  {
    component: NotFound,
    key: "NotFound",
  },
];

const router = generateRoutes(routes);
export default router;
