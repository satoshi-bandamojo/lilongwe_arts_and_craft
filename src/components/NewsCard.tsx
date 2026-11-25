import { ArrowRight } from 'lucide-react';
import type { NewsArticle } from '../types/lcac';
import { EditorialImage } from './EditorialImage';

interface NewsCardProps {
  article: NewsArticle;
  onSelect: (article: NewsArticle) => void;
}

export function NewsCard({ article, onSelect }: NewsCardProps) {
  return (
    <article className="group flex flex-col bg-[#F7F2E8] border border-[#272522]/12 rounded-lg overflow-hidden">
      {article.image && (
        <div className="aspect-[16/10] overflow-hidden bg-[#E7DEC9]">
          <EditorialImage
            src={article.image}
            alt={article.imageAlt ?? article.title}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-[#272522]/65 mb-2.5">
          <span className="font-medium text-[#963F2D]">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedAt}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-[#272522] leading-snug">
          {article.title}
        </h3>
        <p className="mt-2.5 text-sm text-[#272522]/80 leading-relaxed flex-1">
          {article.summary}
        </p>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => onSelect(article)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#963F2D] hover:text-[#7A3223] cursor-pointer"
          >
            <span>Read update</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
