import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Bookmark } from "lucide-react";

interface Props {
  title: string;
}

export const ArticleActions: React.FC<Props> = ({ title }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        text: `এই আর্টিকেলটি দেখুন: ${title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("লিংক কপি হয়েছে!");
    }
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <Button
        variant={liked ? "default" : "outline"}
        size="icon"
        onClick={() => setLiked(!liked)}
      >
        <Heart
          className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : ""}`}
        />
      </Button>

      <Button variant="outline" size="icon" onClick={handleShare}>
        <Share2 className="h-5 w-5" />
      </Button>

      <Button
        variant={saved ? "default" : "outline"}
        size="icon"
        onClick={() => setSaved(!saved)}
      >
        <Bookmark
          className={`h-5 w-5 ${
            saved ? "fill-yellow-400 text-yellow-400" : ""
          }`}
        />
      </Button>
    </div>
  );
};
