import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
