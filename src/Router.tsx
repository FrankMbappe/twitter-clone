import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/Root";
import FeedPage from "./pages/FeedPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/feed",
        element: <FeedPage />,
      },
    ],
  },
]);

export default Router;
