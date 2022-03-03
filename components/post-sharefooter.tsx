
import { useRouter } from "next/router";
import { FaTwitter, FaGetPocket, FaShareAlt } from "react-icons/fa";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  title: string;
};

const PostShareFooter = ({ title }: Props): JSX.Element => {
  const router = useRouter();
  const icon_size = 24;
  return (
      <div className="flex right-0 justify-center space-x-4">
        <a
          href={`https://twitter.com/intent/tweet?text=${title} https://korejyanaide.cyou/posts/${router.query['slug']}`}
        >
          <FaTwitter size={icon_size}/>
        </a>
      
        <a
          href={`https://getpocket.com/save?url=https://korejyanaide.cyou/posts/${router.query['slug']}`}
        >
          <FaGetPocket size={icon_size}/>
        </a>
        <a
          href={`https://addtoany.com/share?url=https://korejyanaide.cyou/posts/${router.query['slug']}`}
        >
          <FaShareAlt size={icon_size}/>
        </a>
    </div>
  );
};

export default PostShareFooter;
