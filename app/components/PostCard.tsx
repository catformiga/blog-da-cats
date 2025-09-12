// app/components/PostCard.tsx (ex.: simplificado)
import Link from 'next/link';

export default function PostCard({
  slug,
  title,
  summary,
  date,
  author,
  tag,
  cover,
}: {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  tag: 'games' | 'doramas' | 'insp';
  cover?: string;
}) {
  const badge =
    tag === 'games'
      ? '🎮 Games'
      : tag === 'doramas'
      ? '📺 Doramas'
      : '💡 Inspiração';
  return (
    <article className="group rounded-2xl border border-black/5 hover:border-brand-500/40 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cover}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      )}
      <div className="p-5">
        <div className="mb-2 text-xs text-gray-500">{badge}</div>
        <Link href={`/data/posts/${slug}`} className="block">
          <h3 className="text-lg font-semibold group-hover:text-brand-600">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 line-clamp-2">{summary}</p>
        </Link>
        <div className="mt-4 text-xs text-gray-500">
          {new Date(date).toLocaleDateString('pt-BR')} • {author}
        </div>
      </div>
    </article>
  );
}
