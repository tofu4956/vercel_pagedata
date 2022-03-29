import { useRouter } from "next/router";
import { FaTwitter, FaGetPocket, FaShareAlt, FaLink } from "react-icons/fa";
import { DOMAIN_NAME } from "../lib/constants";

type Props = {
  title: string;
};
type Handler = {
  title: string;
  urlParams: string | string[] | undefined;
};

const ClickOtherShareHandler = ({ title, urlParams }: Handler) => {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: "tofu4956's blog",
      url: `https://${DOMAIN_NAME}/posts/` + urlParams,
    });
  } else {
    location.href =
      `https://addtoany.com/share?url=https://${DOMAIN_NAME}/posts/` +
      urlParams;
  }
};

const ClickLinkCopyHandler = ({
  urlParams,
}: {
  urlParams: string | string[] | undefined;
}) => {
  if (typeof urlParams === "string")
    navigator.clipboard.writeText(`https://${DOMAIN_NAME}/posts/` + urlParams);
};

const PostShareFooter = ({ title }: Props): JSX.Element => {
  const router = useRouter();
  const urlParams = router.query["slug"];
  const icon_size = 24;
  return (
    <div className="flex right-0 justify-center space-x-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${title} %7C ${DOMAIN_NAME}%0Ahttps://${DOMAIN_NAME}/posts/${router.query["slug"]}`}
      >
        <FaTwitter size={icon_size} />
      </a>

      <a
        href={`https://getpocket.com/save?url=https://${DOMAIN_NAME}/posts/${router.query["slug"]}`}
      >
        <FaGetPocket size={icon_size} />
      </a>
      <button onClick={() => ClickLinkCopyHandler({ urlParams })}>
        <FaLink size={icon_size} />
      </button>
      <button
        onClick={() => {
          ClickOtherShareHandler({ title, urlParams });
        }}
      >
        <FaShareAlt size={icon_size} />
      </button>
    </div>
  );
};

export default PostShareFooter;
