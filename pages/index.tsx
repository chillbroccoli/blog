import Head from "next/head";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

import { postFilePaths, POSTS_PATH } from "@/utils/pathsUtils";

import Bio from "@/components/Bio";
import RecentPosts from "@/components/RecentPosts";

export type Post = {
  content: string;
  data: Record<string, string>;
  filePath: string;
};

type HomePageProps = {
  posts: Post[];
};

const Home = ({ posts }: HomePageProps) => {
  return (
    <div>
      <Head>
        <title>Kacper Malek</title>
      </Head>
      <Bio />
      <RecentPosts posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    })
    .sort((a: Post, b: Post) => Number(b.data.id) - Number(a.data.id))
    .slice(0, 3);

  return { props: { posts } };
}

export default Home;
