import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default Router;
