import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  category: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  category,
}: Props): JSX.Element => {
  return (
    <>
      <meta name="twitter:title" content={title} />
      <PostTitle>{title}</PostTitle>
      <div className="mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-l italic">
          <DateFormatter dateString={date} />
          <p> - Category: {category}</p>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
