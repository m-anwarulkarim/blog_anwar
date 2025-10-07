import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./components/routers/router";
import { ThemeProvider } from "./components/theme/theme-provider";
import { MantineProvider } from "@mantine/core";
import { theme } from "./components/theme/MantineTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />{" "}
      </ThemeProvider>
    </MantineProvider>
  </StrictMode>
);
