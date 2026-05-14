import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/categorys",
        Component: Categories,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
