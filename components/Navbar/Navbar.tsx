import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import ThemeSelector from "@/components/ThemeSelector";

export default function Navbar() {
  const router = useRouter();

  const tabs = [
    { name: "Home", href: "/", current: router.route === "/" },
    { name: "Posts", href: "/posts", current: router.route === "/posts" },
  ];

  return (
    <header className="py-4">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current)?.name ?? ""}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:flex justify-between items-center">
        <nav className="flex " aria-label="Tabs">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.href}>
              <a
                className={clsx(
                  tab.current
                    ? "font-semibold text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600/30"
                    : "text-gray-500 font-normal hover:bg-gray-200 dark:hover:bg-gray-600/30",
                  "px-3 py-2 rounded-md"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            </Link>
          ))}
        </nav>

        <div className="relative z-50">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}
