import { ArrowLeft } from 'lucide-react';
import type { NewsArticle } from '../types/lcac';
import { EditorialImage } from './EditorialImage';

interface ArticleDetailViewProps {
  article: NewsArticle;
  onBack: () => void;
}

export function ArticleDetailView({ article, onBack }: ArticleDetailViewProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#963F2D] hover:text-[#7A3223] mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        <span>Back to News &amp; Events</span>
      </button>

      <div className="text-xs text-[#272522]/70 mb-3">
        <span className="font-medium text-[#963F2D]">{article.category}</span>
        <span aria-hidden="true" className="mx-2">·</span>
        <span>{article.publishedAt}</span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#272522] leading-tight">
        {article.title}
      </h2>

      {article.image && (
        <div className="mt-8 aspect-[16/9] rounded-lg overflow-hidden border border-[#272522]/12">
          <EditorialImage
            src={article.image}
            alt={article.imageAlt ?? article.title}
            containerClassName="w-full h-full"
          />
        </div>
      )}

      <div className="mt-8 space-y-5 text-base text-[#272522]/85 leading-[1.75] max-w-prose">
        {article.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
