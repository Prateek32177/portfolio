import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { themes } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// First, create a function to get button classes (put this in a utils file or component)
export const getButtonClasses = (theme: keyof typeof themes) => {
  const baseClasses = "text-zinc-900";

  const themeClasses = {
    emerald: "bg-emerald-500 hover:bg-emerald-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    pink: "bg-rose-500 hover:bg-rose-600",
  }[theme];

  return `${baseClasses} ${themeClasses}`;
};
