import { AboutMe, LandingPage, NotFound, Project, Projects } from "../pages";

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
    element: <Projects />,
  },
  {
    path: `/projects/:id`,
    element: <Project />,
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
  {
    path: "/not-found",
    element: <NotFound />,
  },
];
