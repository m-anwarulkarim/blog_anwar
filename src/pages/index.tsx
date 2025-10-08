// ========================
// ✅ Smooth Scroll Hero

import ReactLenis from "lenis/react";
import { Hero } from "../components/SmoothScroll/Hero";
import Header from "../components/layout/Header";
import { DraggableCardDemo } from "@/components/hot-news/NewsCard";

// ========================
export const SmoothScrollHero = () => {
  return (
    <>
      <Header />
      <div className="bg-zinc-950">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
            // infinite: true,
            // syncTouch: true,
          }}
        >
          <Hero />
          <DraggableCardDemo />
        </ReactLenis>
      </div>
    </>
  );
};
