import type { Post } from "@/pages/index";

import Posts from "../Posts";

type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl my-2 mt-6 font-bold tracking-tight text-black dark:text-white">
        Recently Published
      </h2>

      <Posts posts={posts} />
    </div>
  );
}
