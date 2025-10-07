import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import { SmoothScrollHero } from "../home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SmoothScrollHero,
    children: [
      // {
      //   index: true,
      //   Component: SmoothScrollHero,
      // },
    ],
  },
]);
