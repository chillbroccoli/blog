import clsx from "clsx";
import {
  AlertCircle,
  CircleX,
  CircleCheck,
  InfoCircle,
} from "tabler-icons-react";

type AlertProps = {
  type: "info" | "success" | "warning" | "danger";
  text: string;
};

function getIcon(type: AlertProps["type"]) {
  switch (type) {
    case "info":
      return (
        <InfoCircle
          className="h-5 w-5 text-blue-700 dark:text-blue-400"
          aria-hidden="true"
        />
      );
    case "success":
      return (
        <CircleCheck
          className="h-5 w-5 text-teal-700 dark:text-teal-400"
          aria-hidden="true"
        />
      );
    case "warning":
      return (
        <AlertCircle
          className="h-5 w-5 text-yellow-700 dark:text-yellow-400"
          aria-hidden="true"
        />
      );
    case "danger":
      return (
        <CircleX
          className="h-5 w-5 text-red-700 dark:text-red-400"
          aria-hidden="true"
        />
      );
    default:
      return (
        <InfoCircle
          className="h-5 w-5 text-blue-700 dark:text-blue-400"
          aria-hidden="true"
        />
      );
  }
}

function getColor(type: AlertProps["type"]) {
  switch (type) {
    case "info":
      return "text-blue-700 dark:text-blue-400";
    case "success":
      return "text-teal-700 dark:text-teal-400";
    case "warning":
      return "text-yellow-700 dark:text-yellow-400";
    case "danger":
      return "text-red-700 dark:text-red-400";
    default:
      return "text-blue-700 dark:text-blue-400";
  }
}

function getBackground(type: AlertProps["type"]) {
  switch (type) {
    case "info":
      return "bg-blue-500/50 dark:bg-blue-500/20";
    case "success":
      return "bg-teal-500/50 dark:bg-teal-500/20";
    case "warning":
      return "bg-yellow-500/50 dark:bg-yellow-500/20";
    case "danger":
      return "bg-red-500/50 dark:bg-red-500/20";
    default:
      return "bg-blue-500/50 dark:bg-blue-500/20";
  }
}

function getBorder(type: AlertProps["type"]) {
  switch (type) {
    case "info":
      return "border-blue-700 dark:border-blue-400";
    case "success":
      return "border-teal-700 dark:border-teal-400";
    case "warning":
      return "border-yellow-700 dark:border-yellow-400";
    case "danger":
      return "border-red-700 dark:border-red-400";
    default:
      return "border-blue-700 dark:border-blue-400";
  }
}

export default function Alert({ type = "info", text }: AlertProps) {
  return (
    <div
      className={clsx(
        "border-l-4 p-4 my-4",
        getBackground(type),
        getBorder(type)
      )}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">{getIcon(type)}</div>
        <div className="ml-3">
          <p className={clsx("text-md", getColor(type))}>{text}</p>
        </div>
      </div>
    </div>
  );
}
