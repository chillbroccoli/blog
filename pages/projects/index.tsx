import Head from "next/head";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque eros sit amet libero interdum, in eleifend est tincidunt. Etiam pretium tincidunt ligula ac aliquet. ",
    image: "/project-1.jpg",
    stack: ["React", "Next.js", "TypeScript"],
    link: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque eros sit amet libero interdum, in eleifend est tincidunt. Etiam pretium tincidunt ligula ac aliquet. ",
    image: "/project-2.jpg",
    stack: ["React", "Next.js", "TypeScript"],
    link: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque eros sit amet libero interdum, in eleifend est tincidunt. Etiam pretium tincidunt ligula ac aliquet. ",
    image: "/project-3.jpg",
    stack: ["React", "Next.js", "TypeScript"],
    link: "#",
    githubLink: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <h2 className="font-semibold text-3xl text-gray-700 dark:text-gray-200 mb-4">
        Projects
      </h2>

      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col my-8 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="w-full h-[275px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full"
              />
            </div>

            <div className="px-4 py-4">
              <h2 className="font-semibold text-2xl text-gray-700 dark:text-gray-200 mb-4">
                {project.title}
              </h2>

              <div className="flex flex-wrap my-4">
                {project.stack.map((stack) => (
                  <span
                    key={stack}
                    className="inline-block bg-gray-500 dark:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 dark:text-gray-700 mr-2"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="flex items-center mt-4">
                <a
                  href={project.link}
                  className="px-2 py-1 rounded-xl bg-transparent hover:bg-indigo-500 border border-indigo-500 text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-700 ease-in-out"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  className="ml-2 px-2 py-1 rounded-xl bg-transparent hover:bg-indigo-500 border border-indigo-500 text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-700 ease-in-out"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
