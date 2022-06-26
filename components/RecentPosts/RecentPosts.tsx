import type { Post } from "@/pages/index";

import Link from "next/link";

type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl my-2 mt-6 font-bold tracking-tight text-black dark:text-white">
        Recently Published
      </h2>

      <div className="flex flex-col">
        {posts.map((post: Post) => (
          <div key={post.filePath} className="flex flex-col my-2">
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a className="text-2xl my-2 font-semibold tracking-tight text-blue-500 hover:text-blue-700 transition-colors duration-500 ease-in-out">
                {post.data.title}
              </a>
            </Link>
            <p className="text-sm text-black leading-7 dark:text-gray-400 mb-1">
              {post.data.description}
            </p>
            <h5>{post.data.date}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
