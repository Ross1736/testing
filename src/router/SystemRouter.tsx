import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "./routes/app.routes";

import Layout from "../shared/layout/Layout";
import Home from "../application/pages/Home";
import Konva from "../application/pages/Konva";

const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: APP_ROUTES.HOME,
        element: <Home />,
        errorElement: <div>Error</div>,
      },
      {
        path: APP_ROUTES.KONVA,
        element: <Konva />,
        errorElement: <div>Error</div>,
      },
      {
        path: APP_ROUTES.NOT_FOUND,
        element: <div>Not Found</div>,
        errorElement: <div>Error</div>,
      },
    ],
  },
]);

const SystemRouter = () => {
  return <RouterProvider router={router} />;
};

export default SystemRouter;
