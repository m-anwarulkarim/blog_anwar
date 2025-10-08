import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import { SmoothScrollHero } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: SmoothScrollHero,
      },
      {},
    ],
  },
]);
