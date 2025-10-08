import { CenterImage } from "./CenterImage";
import { ParallaxImages } from "./ParallaxImages";

const SECTION_HEIGHT = 2100;

export const Home = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className=" w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};
