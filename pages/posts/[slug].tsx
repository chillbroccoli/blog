import type { GetStaticPaths, GetStaticProps } from "next";

import fs from "fs";
import path from "path";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

import { POSTS_PATH, postFilePaths } from "@/utils/pathsUtils";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Pre,
  Code,
  Blockquote,
  UL,
  ULItem,
  Strong,
  EM,
  CustomImage,
  CustomLink,
} from "@/components/MDXComponents";
import Alert from "@/components/Alert";
import SandboxFrame from "@/components/SandboxFrame";

type Frontmatter = {
  title: string;
  date?: string;
};

type PostPageProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontmatter: Frontmatter;
};

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: CustomLink,
  p: Paragraph,
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  ul: UL,
  li: ULItem,
  strong: Strong,
  em: EM,
  Head,
  Image: CustomImage,
  Alert,
  SandboxFrame,
};

export default function PostPage({ source, frontmatter }: PostPageProps) {
  return (
    <div>
      <div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontmatter.title}
        </h1>
        {frontmatter.date && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {frontmatter.date}
          </p>
        )}
      </div>

      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeCodeTitles,
        [
          rehypePrism,
          {
            showLineNumbers: true,
          },
        ],
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontmatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
