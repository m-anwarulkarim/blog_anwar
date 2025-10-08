import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pb-5 h-screen">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <img
          src="./images/benner.jpg"
          alt="Educational Illustration"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg"
        />
      </motion.div>
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-20">
          🕌 সেজদার নিচে লুকানো কান্না ও কণ্ঠস্বর
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-10">
          যখন একজন মুসলমান আল-আকসার পবিত্র ভূমিতে সেজদায় যান, তখন তা শুধু ইবাদত
          নয়—একটি জাতির ইতিহাস, বেদনা, এবং আশা একত্রে মিশে যায়। এই সেজদার নিচে
          লুকিয়ে থাকে শতাব্দীর কান্না, হারানো ঘরবাড়ি, ভাঙা স্বপ্ন, এবং সেই
          কণ্ঠস্বর—যা দুনিয়ার কাছে বারবার বলেছে: "আমরা আছি, আমরা থাকব।"
          ফিলিস্তিনের প্রতিটি সেজদা যেন একেকটি প্রতিবাদ, একেকটি
          প্রার্থনা—স্বাধীনতার, শান্তির, এবং ন্যায়ের জন্য। আল-আকসা শুধু একটি
          মসজিদ নয়, এটি একটি আত্মপরিচয়ের মিনার। এখানে ইবাদত হয় চোখের জলে, হৃদয়ের
          ব্যথায়, এবং অটল বিশ্বাসে।
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          scroll to know more
        </button>
      </motion.div>
    </section>
  );
}
