import { AboutMe, LandingPage } from "../pages";
import { NotFound } from "../pages/NotFound";

export const list = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/recommendations",
    element: <NotFound />,
  },
  {
    path: "/projects",
    element: <NotFound />,
  },
  {
    path: "/curses",
    element: <NotFound />,
  },
  {
    path: "/contact",
    element: <NotFound />,
  },
  {
    path: "/professional-experience",
    element: <NotFound />,
  },
];
