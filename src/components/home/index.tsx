// ========================
// ✅ Smooth Scroll Hero

import ReactLenis from "lenis/react";
import { Hero } from "./Hero";
import Footer from "../footer-04/footer-04";
import Header from "../layout/Header";

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
          {/* <Schedule /> */}
        </ReactLenis>
        <Footer />
      </div>
    </>
  );
};
