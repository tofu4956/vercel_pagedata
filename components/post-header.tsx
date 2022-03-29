import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { DOMAIN_NAME } from "../lib/constants";

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
      <meta name="twitter:title" content={`${title} | ${DOMAIN_NAME}`} />
      <PostTitle>{title}</PostTitle>
      <div className="mb-4 sm:mx-0 md:mb-8">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-lg italic">
          <DateFormatter dateString={date} />
          <p> - Category: {category}</p>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
