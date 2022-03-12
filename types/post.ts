import Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  category: string;
  tags: string[];
  private: boolean;
};

export default PostType;
