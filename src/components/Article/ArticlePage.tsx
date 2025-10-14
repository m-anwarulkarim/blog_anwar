import React from "react";
import { useParams } from "react-router";
import { ArticleData } from "./ArticleData";

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ArticleData.find((a) => a.link.endsWith(slug!));

  if (!article) return <p className="text-center mt-10">Article not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img
        src={article.image}
        alt={article.title}
        className="w-full mb-4 rounded-lg"
      />
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
};

export default ArticlePage;
