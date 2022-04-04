import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { JSDOM } from 'jsdom';

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | string[] | boolean;
  };

  const items: Items = {};
  const meta: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
      meta[field] = data[field];
    }
  });

  return { items, meta };
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  // sort posts by date in descending order
  const postitems = posts
    .map((post) => {
      return post.items;
    })
    .sort((post1, post2) => (post1["date"] > post2["date"] ? -1 : 1));
  return postitems;
}

export function getOGPdata(url: string) {
  const elemregex = /og:/;
  type Params = {
    [key: string]: string | null;
  };
  const parambuf : Params = {};  
  const params = fetch(url).then((res) => res.text()).then(text => {
    const jsdom = new JSDOM(text);
    const headelem = jsdom.window.document.getElementsByTagName('meta');
    Array.from(headelem).map(v => {
      const property = String(v.getAttribute("property"));
      if(!property) return;
      parambuf[property.replace(elemregex, "")] = v.getAttribute("content");
    })
    return parambuf;
  })
  return params;
}