import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArticleData } from "./ArticleData";
import { ArticleItem } from "./ArticleItem";

export const ArticleGrid = () => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(ArticleData.length / cardsPerPage);

  const startIndex = (page - 1) * cardsPerPage;
  const currentCards = ArticleData.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="flex flex-col items-center space-y-8 py-8 w-full">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-2 sm:px-4">
        {currentCards.map((card) => (
          <ArticleItem
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Button
          onClick={handleBack}
          disabled={page === 1}
          variant="outline"
          className="rounded-full"
        >
          Back
        </Button>
        <span className="text-gray-600">
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={page === totalPages}
          className="rounded-full"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
