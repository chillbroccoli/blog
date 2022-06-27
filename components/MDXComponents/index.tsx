import React from "react";
import Image from "next/image";
import Link from "next/link";

type CustomImageProps = {
  src: string;
  alt: string;
  height: string;
};

function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className="text-6xl mt-6 mb-1 font-bold tracking-tight text-black dark:text-white"
    />
  );
}

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className="text-4xl mt-6 mb-1 font-bold tracking-tight text-black dark:text-white"
    />
  );
}

function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className="text-2xl mt-6 mb-1 font-bold tracking-tight text-black dark:text-white"
    />
  );
}

function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      {...props}
      className="text-xl mt-6 mb-1 font-bold tracking-tight text-black dark:text-white"
    />
  );
}

function H5(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      {...props}
      className="text-lg mt-6 mb-1 font-bold tracking-tight text-black dark:text-white"
    />
  );
}

function H6(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      {...props}
      className="text-md mt-6 mb-1 font-bold tracking-tight text-black dark:text-white"
    />
  );
}

function Paragraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className="text-gray-700 dark:text-gray-300 py-4 leading-8 tracking-tight font-medium"
    />
  );
}

function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      className="rounded-xl bg-gray-900 py-2 px-3 my-4 border border-gray-600 shadow-2xl overflow-x-auto"
    />
  );
}

function Code(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <code
      {...props}
      className="rounded-md bg-black font-bold text-white py-0.5 px-1.5"
    />
  );
}

function Blockquote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className="text-gray-700 px-2 tracking-tight italic rounded-lg mb-4 border-l-4 border-gray-600"
    />
  );
}

function UL(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className="list-disc list-inside" />;
}

function ULItem(props: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...props}
      className="my-2 text-gray-600 dark:text-gray-400 font-medium"
    />
  );
}

function Strong(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <strong {...props} className="font-bold" />;
}

function EM(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <em
      {...props}
      className="italic text-sm text-gray-600 dark:text-gray-400"
    />
  );
}

function CustomLink(props: React.HTMLAttributes<HTMLAnchorElement>) {
  // @ts-ignore
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className="text-blue-500 hover:text-blue-600 underline">
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-600 underline"
      {...props}
    />
  );
}

function CustomImage({ src, alt, height }: CustomImageProps) {
  return (
    <div
      className="relative w-full my-4"
      style={{ height: height ? height : "400px" }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="rounded-xl shadow-2xl w-full h-full"
      />
    </div>
  );
}

export {
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
};
