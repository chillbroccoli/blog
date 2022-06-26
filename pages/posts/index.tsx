import { useState } from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { Search } from "tabler-icons-react";

import type { Post } from "@/pages/index";

import { postFilePaths, POSTS_PATH } from "@/utils/pathsUtils";

import Posts from "@/components/Posts";
import Head from "next/head";

type PostsPageProps = {
  posts: Post[];
};

export default function PostsPage({ posts }: PostsPageProps) {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    setFilteredPosts(
      posts.filter((post) =>
        post.data.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <h2 className="font-semibold text-3xl text-gray-700 dark:text-gray-200 mb-4">
        Blog
      </h2>

      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="posts-search"
            id="posts-search"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 py-2 px-4 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-neutral-800"
            placeholder="Search for posts..."
            value={search}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <Posts posts={filteredPosts} />
    </div>
  );
}

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
    .sort((a: Post, b: Post) => Number(b.data.id) - Number(a.data.id));

  return { props: { posts } };
}
