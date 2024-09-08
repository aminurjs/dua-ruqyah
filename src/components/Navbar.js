"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import SettingSlide from "./SettingSlide";
import CatSlide from "./CatSlide";
import useLanguage from "@/hooks/useLanguage";
import { useToast } from "@/hooks/use-toast";
import { showUnAvailableToast } from "./toast";

const Navbar = () => {
  const { language } = useLanguage();
  const { toast } = useToast();

  return (
    <nav className="flex justify-between bg-white dark:bg-dark-1 xl:bg-transparent items-center gap-7 mb-4 -mx-5 lg:-mx-10 xl:mx-0 px-5 md:px-10 xl:px-0 -mt-5 xl:mt-0 py-2.5 xl:py-0">
      <div className="xl:w-4/5 flex justify-between items-center flex-1 flex-grow">
        <div className="flex-1 flex-grow flex gap-2 items-center">
          <div className="inline-block xl:hidden">
            <CatSlide />
          </div>
          <h1 className="text-dark dark:text-white text-2xl font-semibold font-poppins">
            {language === "english" ? "Dua Page" : "দুয়া পেজ"}
          </h1>
        </div>
        <div className="hidden sm:block">
          <div className="relative w-48 lg:w-72">
            <input
              type="text"
              className="placeholder:text-[#868686] py-2.5 lg:py-3.5 px-4 bg-white dark:bg-dark-2 w-full focus:outline-none focus:border-primary border border-gray-200 dark:border-gray-600 rounded-lg"
              placeholder="Search by Dua Name"
            />
            <button
              onClick={() => showUnAvailableToast(toast)}
              className="px-4 py-1.5 lg:py-2.5 bg-[#F3F4F6] dark:bg-dark-1 rounded-md absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Image src="/icons/search.svg" alt="search" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-1/5 flex justify-end items-center">
        <button
          onClick={() => showUnAvailableToast(toast)}
          className="flex gap-1 justify-center items-center"
        >
          <Image src="/icons/profile.svg" alt="profile" width={45} height={45} />
          <ChevronDown className="h-5 w-5 text-dark" />
        </button>
        <SettingSlide />
      </div>
    </nav>
  );
};

export default Navbar;
