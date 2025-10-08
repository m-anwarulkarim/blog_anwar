import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

export const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1700], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1700], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const SECTION_HEIGHT = 1700;
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 700],
    ["190%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 700],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(./images/benner.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
