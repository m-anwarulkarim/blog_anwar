import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArticleData } from "./ArticleData";
import { Card } from "../ui/card";

export const RelatedArticles: React.FC<{ currentSlug: string }> = ({
  currentSlug,
}) => {
  const navigate = useNavigate();
  const allRelated = ArticleData.filter((a) => !a.link.endsWith(currentSlug));

  const initialCount = 5; // শুরুতে ৫টা কার্ড
  const scrollLoadCount = 6; // scroll করলে ৬টা কার্ড load হবে
  const loadMoreCount = 6; // Load More এ ৬টা করে আসবে

  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      // যখন scrollbar নিচের দিকে আসে, scrollLoadCount অনুযায়ী নতুন কার্ড দেখানো
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 50
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + scrollLoadCount, allRelated.length)
        );
        setShowLoadMore(true);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [allRelated.length]);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + loadMoreCount, allRelated.length)
    );
  };

  const handleCollapse = () => {
    setVisibleCount(initialCount);
    setShowLoadMore(false);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold mb-2 dark:text-gray-100">
        আরও পড়ুন
      </h2>

      {/* Scrollable container */}
      <div className="max-h-[600px] overflow-y-auto" ref={scrollRef}>
        {allRelated.slice(0, visibleCount).map((article) => (
          <Card
            key={article.id}
            className="p-2 flex items-center gap-3 cursor-pointer hover:bg-accent transition"
            onClick={() => navigate(article.link)}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-sm font-medium dark:text-gray-200">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                {article.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More / Collapse buttons */}
      <div className="flex gap-2 mt-2">
        {showLoadMore && visibleCount < allRelated.length && (
          <button onClick={handleLoadMore} className="text-blue-500 text-sm">
            আরও দেখুন
          </button>
        )}
        {visibleCount > initialCount && (
          <button onClick={handleCollapse} className="text-gray-500 text-sm">
            সংক্ষেপে দেখুন
          </button>
        )}
      </div>
    </div>
  );
};
