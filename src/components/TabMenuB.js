"use client";

import Image from "next/image";
import { icons } from "./Sidebar";
import { useToast } from "@/hooks/use-toast";
import { showUnAvailableToast } from "./toast";

const TabMenuB = () => {
  const { toast } = useToast();

  return (
    <div className="-translate-y-1/2 relative top-1/2">
      <div className="flex gap-6 items-center justify-evenly ">
        {icons.map((icon) => (
          <span
            onClick={() => showUnAvailableToast(toast)}
            className="bg-icon-bg rounded-full p-2 cursor-pointer"
            href="#"
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
    </div>
  );
};

export default TabMenuB;
