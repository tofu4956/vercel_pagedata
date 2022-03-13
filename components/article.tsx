import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Article = ({ posts }: Props): JSX.Element => {
  return (
    <section>
      <h2 className="mx-auto mb-8 max-w-3xl text-6xl font-bold tracking-tighter leading-tight md:text-7xl">
        Article
      </h2>
      <div className="grid grid-cols-1 gap-y-20 mx-auto mb-32 max-w-3xl md:gap-x-16  md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Article;
