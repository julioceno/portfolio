import {
  AboutMe,
  Courses,
  LandingPage,
  NotFound,
  Project,
  Projects,
  Recommendations,
} from '../pages';

export const list = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/about',
    element: <AboutMe />,
  },
  {
    path: '/recommendations',
    element: <Recommendations />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: `/projects/:id`,
    element: <Project />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/contact',
    element: <NotFound />,
  },
  {
    path: '/professional-experience',
    element: <NotFound />,
  },
  {
    path: '/not-found',
    element: <NotFound />,
  },
];
