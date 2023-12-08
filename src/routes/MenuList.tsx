import { AboutMe, LandingPage } from "../pages";

export const list = [
  {
    path: "/portfolio",
    element: <LandingPage />,
  },
  {
    path: "/portfolio/about",
    element: <AboutMe />,
  },
  {
    path: "/portfolio/test",
    element: <div>Teste</div>,
  },
];
