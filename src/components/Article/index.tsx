import React from "react";
import { useParams } from "react-router";
import { ArticleData } from "./ArticleData";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { ArticleActions } from "./ArticleActions";
import { RelatedArticles } from "./RelatedArticles";
import { ScrollToTopButton } from "./ScrollToTopButton";
const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ArticleData.find((a) => a.link.endsWith(slug!));

  if (!article) return <p className="text-center mt-10">Article not found!</p>;

  return (
    <>
      <ReadingProgressBar />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-25 gap-8">
        {/* মূল আর্টিকেল */}
        <div className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold mb-4 dark:text-gray-100">
            {article.title}
          </h1>
          <ArticleActions title={article.title} />

          <img
            src={article.image}
            alt={article.title}
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {article.description.repeat(6)}
          </p>
        </div>

        {/* সাইডবার */}
        <aside className="w-full lg:w-1/3">
          <RelatedArticles currentSlug={slug!} />
        </aside>
      </div>

      <ScrollToTopButton />
    </>
  );
};

export default ArticlePage;
