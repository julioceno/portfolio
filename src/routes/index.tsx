import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <div>Rota não encontrada</div>,
    children: [
      {
        path: "/test",
        element: <div className="t">Hello world!</div>,
      },
    ],
  },
]);

export { router };
