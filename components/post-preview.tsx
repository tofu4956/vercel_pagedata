import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { CategoryBadge } from "./category-badge";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  category,
}: Props): JSX.Element => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h2 className="mb-2 font-title text-3xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h2>
      <div className="flex mb-4 text-lg">
        <DateFormatter dateString={date} />
        <CategoryBadge category={category} />
      </div>
      <p className="mb-4 font-post text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
