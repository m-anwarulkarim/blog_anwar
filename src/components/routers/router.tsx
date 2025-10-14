import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import { SmoothScrollHero } from "../../pages";
import AboutUs from "../about us/AboutUs";
import ContactUs from "../contact us/ContactUs";
import Error from "@/pages/Error";
import ArticlePage from "../Article";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: SmoothScrollHero,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "/articles/:slug",
        Component: ArticlePage,
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);
