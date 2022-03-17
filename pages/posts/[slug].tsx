import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { DOMAIN_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import PostShareFooter from "../../components/post-sharefooter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  MDXContent: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: string[];
};

const Post = ({ post, preview, MDXContent }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const ogHandler = (post: PostType) => {
    if (post.ogImage === "null")
      return `http://${DOMAIN_NAME}/api/ogp?title=${post.title}&excerpt=${post.excerpt}`;
    else return post.ogImage;
  };
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <div className="mb-24">
            <article className="mb-8">
              <Head>
                <title>
                  {post.title} | {DOMAIN_NAME}
                </title>
                <meta property="og:image" content={ogHandler(post)} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                category={post.category}
              />
              <PostBody content={MDXContent} />
            </article>
            <PostShareFooter title={post.title} />
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

type Items = {
  [key: string]: string | string[] | boolean;
};

export async function getStaticProps({ params }: Params) {
  const markdown = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "excerpt",
    "ogImage",
    "coverImage",
    "category",
    "tags",
    "private",
  ]);
  const post = markdown.items;
  const content = await markdownToHtml(post);

  return {
    props: {
      post: {
        ...post,
      },
      MDXContent: content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post["slug"],
        },
      };
    }),
    fallback: false,
  };
}
