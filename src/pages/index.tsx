// ========================
// ✅ Smooth Scroll Hero

import ReactLenis from "lenis/react";
import Header from "../components/layout/Header";
import { DraggableCardDemo } from "@/components/hot-news/NewsCard";
import { Home } from "@/components/SmoothScroll/Home";
import { HeroSection } from "@/components/SmoothScroll/HeroSection";

// ========================
export const SmoothScrollHero = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="bg-zinc-950">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
            // infinite: true,
            // syncTouch: true,
          }}
        >
          <Home />
          <DraggableCardDemo />
        </ReactLenis>
      </div>
    </>
  );
};
