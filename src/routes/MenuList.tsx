import {
  AboutMe,
  Contacts,
  Courses,
  Home,
  NotFound,
  Project,
  Projects,
  Recommendations,
} from '../pages';

export const list = [
  {
    path: '/',
    element: <Home />,
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
    element: <Contacts />,
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
