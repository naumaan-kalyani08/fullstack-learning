import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import WithHeaderFooter from "../CommonLayouts/withHeaderFooter";
import About from "../pages/About";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
const MainRouter = () => {
  const routes = createBrowserRouter([
    {
      element: <WithHeaderFooter />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <About /> },
        { path: "/contact-us", element: <ContactUs /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);
  return <RouterProvider router={routes} />;
};

export default MainRouter;
