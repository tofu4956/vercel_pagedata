import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Article = ({ posts }: Props): JSX.Element => {
  return (
    <section>
      <h2 className="mb-8 max-w-3xl mx-auto text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Article
      </h2>
      <div className="grid grid-cols-1 max-w-3xl md:gap-x-16 md:gap-y-32 lg:gap-x-32 gap-y-20  mb-32 mx-auto">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default Article;
