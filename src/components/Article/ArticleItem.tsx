import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router"; // ✅ useNavigate

interface CardItemProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const ArticleItem: React.FC<CardItemProps> = ({
  title,
  image,
  description,
  link,
}) => {
  const navigate = useNavigate(); // ✅ useNavigate

  const handleClick = () => {
    navigate(link); // v6 এ navigate()
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={handleClick} // ✅
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
