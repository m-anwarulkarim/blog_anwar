import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import { SmoothScrollHero } from "../../pages";
import AboutUs from "../about us/AboutUs";
import ContactUs from "../contact us/ContactUs";
import Error from "@/pages/Error";

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
        path: "/*",
        Component: Error,
      },
    ],
  },
]);
