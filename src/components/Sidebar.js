"use client";

import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { showUnAvailableToast } from "./toast";
export const icons = ["home", "alldua", "memorize", "bookmark", "ruqyah", "dua-info", "books"];

const Sidebar = () => {
  const { toast } = useToast();

  return (
    <div className="flex mb-5 items-center justify-between flex-col h-[calc(100%-20px)] max-h-[930px] bg-white dark:bg-dark-2 rounded-3xl p-5 overflow-y-auto">
      <div>
        <Image src="https://duaruqyah.com/assets/dua-logo.svg" alt="logo" width={55} height={55} />
      </div>
      <div className="flex gap-6 items-center flex-col">
        {icons.map((icon) => (
          <span
            onClick={() => showUnAvailableToast(toast)}
            className="bg-icon-bg dark:bg-dark-1 rounded-full p-2 cursor-pointer"
            key={icon}
          >
            <Image
              src={`https://duaruqyah.com/assets/nav/${icon}.svg`}
              alt={icon}
              width={20}
              height={20}
            />
          </span>
        ))}
      </div>
      <div className="bg-primary p-3 rounded-lg">
        <Image src="/icons/bxs_donate-heart.svg" alt="bxs_donate-heart" width={25} height={25} />
      </div>
    </div>
  );
};

export default Sidebar;
