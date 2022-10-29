import { createBrowserRouter, Route, } from "react-router-dom";
import DeveloperPage from '../pages/Dev.page'
import MainPage from '../pages/Main.page'

// pages


// components

const router = createBrowserRouter([
    {
      path: "/dev",
      element: <DeveloperPage />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/auth",
      element: <MainPage />,
    },
  ]);

export default router