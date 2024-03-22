import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NotFound from "../pages/notFound";
import RootLayout from "../pages/Layout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
