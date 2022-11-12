import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/Root";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

export enum RoutesEnum {
  Root = "/",
  Home = "/",
  Profile = "/profile",
}

const Router = createBrowserRouter([
  {
    path: RoutesEnum.Root,
    element: <RootLayout />,
    children: [
      {
        path: RoutesEnum.Home,
        element: <HomePage />,
      },
      {
        path: RoutesEnum.Profile,
        element: <ProfilePage />,
      },
    ],
  },
]);

export default Router;
