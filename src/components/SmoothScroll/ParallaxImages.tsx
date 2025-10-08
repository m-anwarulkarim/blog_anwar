import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface ParallaxImgProps {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

interface ParallaxImagesProps {
  numImages?: number;
}

export const ParallaxImages = ({ numImages = 6 }: ParallaxImagesProps) => {
  const allImages: ParallaxImgProps[] = [
    {
      src: "./images/palestine-1.jpeg",
      alt: "Space launch 1",
      start: -100,
      end: 100,
      className: "w-1/3",
    },
    {
      src: "./images/palestine-3.webp",
      alt: "Space launch 2",
      start: 100,
      end: -120,
      className: "mx-auto w-2/3",
    },
    {
      src: "./images/palestine-6.jpeg",
      alt: "Orbiting satellite 1",
      start: -80,
      end: 80,
      className: "ml-auto w-1/3",
    },
    {
      src: "./images/palestine-4.jpg",
      alt: "Orbiting satellite 2",
      start: 0,
      end: -150,
      className: "ml-24 w-5/12",
    },
    {
      src: "./images/palestine-5.webp",
      alt: "Space launch 2",
      start: 100,
      end: -120,
      className: "mx-auto w-2/3",
    },

    // পরে আরও image যোগ করলে এখানে add করুন
  ];

  const images = allImages.slice(0, numImages);

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32 overflow-hidden space-y-16">
      {images.map((img, idx) => (
        <ParallaxImg key={idx} {...img} />
      ))}
    </section>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // footer-safe movement
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end * 0.7]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      ref={ref}
      className={`${className} rounded-3xl shadow-2xl overflow-hidden`}
      style={{ transform, opacity }}
    >
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </motion.div>
  );
};
