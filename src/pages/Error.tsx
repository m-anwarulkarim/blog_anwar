import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Error: React.FC = () => {
  return (
    <section className="relative z-10 bg-white dark:bg-gray-900 py-[120px] overflow-hidden">
      <div className="container mx-auto text-center max-w-[400px]">
        {/* 404 Title */}
        <h2 className="mb-2 text-[50px] sm:text-[80px] md:text-[100px] font-bold text-gray-900 dark:text-gray-100 animate-pulse-slow">
          404
        </h2>

        {/* Subtitle */}
        <h4 className="mb-3 text-[22px] font-semibold text-gray-800 dark:text-gray-200">
          Oops! That page can’t be found
        </h4>

        {/* Description */}
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          The page you are looking for may be deleted
        </p>

        {/* Go Home Button using shadcn/ui Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="rounded-lg px-8 py-3 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition"
          >
            Go To Home
          </Button>
        </Link>
      </div>

      {/* Gradient animated layers */}
      <div className="absolute inset-0 -z-10 flex items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-pink-200/20 via-purple-200/20 to-transparent dark:from-white/10 dark:to-transparent animate-shimmer"></div>
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-yellow-200/20 via-green-200/20 to-transparent dark:from-white/10 dark:to-transparent animate-shimmer delay-200"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-blue-200/20 via-pink-200/20 to-transparent dark:from-white/10 dark:to-transparent animate-shimmer delay-400"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-purple-200/20 via-pink-200/20 to-transparent dark:from-white/10 dark:to-transparent animate-shimmer delay-600"></div>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .animate-shimmer { animation: shimmer 3s linear infinite; }
          @keyframes pulse-slow { 0%,100%{opacity:1;}50%{opacity:0.7;} }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default Error;
