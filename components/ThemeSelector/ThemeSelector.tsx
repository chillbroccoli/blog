import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { Moon, Sun, DeviceDesktop, Icon } from "tabler-icons-react";
import clsx from "clsx";

type Theme = {
  name: string;
  icon: Icon;
  value: string;
};

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
  { name: "System", value: "system", icon: DeviceDesktop },
];

export default function ThemeSelector(props: any) {
  const [selectedTheme, setSelectedTheme] = useState<Theme | undefined>();

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme.value);
    } else {
      setSelectedTheme(
        themes.find(
          (theme) =>
            theme.value === document.documentElement.getAttribute("data-theme")
        )!
      );
    }
  }, [selectedTheme]);

  return (
    <Listbox
      as="div"
      value={selectedTheme}
      onChange={setSelectedTheme}
      {...props}
    >
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-neutral-700 dark:ring-inset dark:ring-white/5">
        <span className="sr-only">{selectedTheme?.name}</span>
        <Sun className="hidden h-4 w-4 fill-gray-400 [[data-theme=light]_&]:block" />
        <Moon className="hidden h-4 w-4 fill-gray-400 [[data-theme=dark]_&]:block" />
        <Sun className="hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block" />
        <Moon className="hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block" />
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/5">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                "flex cursor-pointer select-none items-center rounded-[0.625rem] p-1",
                {
                  "text-gray-500": selected,
                  "text-neutral-900 dark:text-white": active && !selected,
                  "text-neutral-700 dark:text-gray-400": !active && !selected,
                  "bg-neutral-100 dark:bg-neutral-900/40": active,
                }
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-neutral-900/5 dark:bg-neutral-700 dark:ring-inset dark:ring-white/5">
                  <theme.icon
                    className={clsx("h-4 w-4", {
                      "fill-gray-400 dark:fill-gray-400": selected,
                      "fill-neutral-400": !selected,
                    })}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
