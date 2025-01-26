import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "./routes/app.routes";

import Home from "../application/pages/Home";

const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: APP_ROUTES.KONVA,
    element: <div>Konva</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: APP_ROUTES.NOT_FOUND,
    element: <div>Not Found</div>,
    errorElement: <div>Error</div>,
  },
]);

const SystemRouter = () => {
  return <RouterProvider router={router} />;
};

export default SystemRouter;
