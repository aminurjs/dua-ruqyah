import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const dataFetching = async (params) => {
  const res = await fetch(params);
  const repo = await res.json();
  return repo;
};
