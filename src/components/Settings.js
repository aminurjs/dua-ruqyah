"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";
import { useTheme } from "next-themes";

const Settings = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { setTheme, theme } = useTheme();

  const handleRefresh = () => {
    // router.push("/");
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenIndex = (id) => {
    openIndex === id ? setOpenIndex(null) : setOpenIndex(id);
  };

  const fallbackSettings = [
    {
      id: 1,
      icon: "/icons/language.svg",
      name: "Language Setting",
    },
    {
      id: 2,
      icon: "/icons/general.svg",
      name: "General Setting",
    },
    {
      id: 3,
      icon: "/icons/54-menu-2.svg",
      name: "Font Setting",
    },
    {
      id: 4,
      icon: "/icons/theme.svg",
      name: "Appearance Setting",
    },
  ];

  const settings = [
    {
      id: 1,
      icon: openIndex === 1 ? "/icons/language-active.svg" : "/icons/language.svg",
      name: language === "english" ? "Language Setting" : "ভাষা সেটিংস",
    },
    {
      id: 2,
      icon: openIndex === 2 ? "/icons/general-active.svg" : "/icons/general.svg",
      name: language === "english" ? "General Setting" : "জেনারেল সেটিংস",
    },
    {
      id: 3,
      icon: openIndex === 3 ? "/icons/font.svg" : "/icons/54-menu-2.svg",
      name: language === "english" ? "Font Setting" : "ফন্ট সেটিংস",
    },
    {
      id: 4,
      icon: openIndex === 4 ? "/icons/theme-active.svg" : "/icons/theme.svg",
      name: language === "english" ? "Appearance Setting" : "থিম সেটিংস",
    },
  ];

  return (
    <div className=" bg-white dark:bg-dark-2 2xl:max-h-[930px] rounded-3xl h-full 2xl:h-[calc(100%-20px)] 2xl:px-4 pt-6 pb-5  overflow-y-auto">
      <h2 className="text-xl font-bold text-center text-dark dark:text-white mb-6">
        {isMounted ? <p>{language === "english" ? "Setting" : "সেটিংস"}</p> : <p>Settings</p>}
      </h2>
      <div className="space-y-3">
        {isMounted ? (
          <>
            {" "}
            {settings.map((setting) => (
              <div
                key={setting.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <button
                  onClick={() => handleOpenIndex(setting.id)}
                  className={`flex gap-2 items-center pl-2 border-l-[5px] ${
                    setting.id === openIndex
                      ? "border-primary text-primary dark:bg-[#314A66]"
                      : "border-transparent text-gray-1 dark:text-gray-200  bg-dua-bg dark:bg-[#182C43]"
                  } pr-4 py-2.5 rounded-lg focus:rounded-l-sm w-full dark:hover:bg-[#314A66]`}
                >
                  <span className="bg-[#E8F0F5] dark:bg-dark-1 rounded-full p-2">
                    <Image src={setting.icon} alt={setting.name} height={24} width={24} />
                  </span>
                  <span>{setting.name}</span>
                </button>
                {setting.id === 1 && openIndex === 1 && (
                  <div className="py-4 rounded-b-lg bg-dua-bg dark:bg-[#182C43]">
                    <div className="flex flex-row gap-x-3 mx-4 justify-center">
                      <button
                        onClick={() => {
                          setLanguage("english"), handleRefresh();
                        }}
                        className={` ${
                          language === "english"
                            ? "bg-primary text-white"
                            : "text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:bg-[#314A66] dark:border-[#314A66]"
                        }  rounded-md w-29 h-10 text-sm w-full`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage("bangla"), handleRefresh();
                        }}
                        className={` ${
                          language === "bangla"
                            ? "bg-primary text-white"
                            : "text-black dark:text-[#e4e4e4]  border border-solid border-[#cccdcf] dark:bg-[#314A66] dark:border-[#314A66]"
                        }  rounded-md w-29 h-10 text-sm w-full`}
                      >
                        {isMounted ? <span>বাংলা</span> : <span>Bangla</span>}
                      </button>
                    </div>
                  </div>
                )}
                {setting.id === 4 && openIndex === 4 && (
                  <div class="px-4 pb-1 rounded-b-lg bg-dua-bg dark:bg-[#182C43]">
                    <div class=" flex flex-row justify-between">
                      <p class="mt-7 mb-4 text-title text-sm dark:text-dark-text">Night Mode</p>
                      <div class="mt-7 mb-4">
                        {theme === "light" ? (
                          <button
                            onClick={() => setTheme("dark")}
                            class="bg-gray-300
          relative inline-flex h-5 w-10 z-[1] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                          >
                            <span class="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              class="translate-x-0
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                            ></span>
                          </button>
                        ) : (
                          <button
                            onClick={() => setTheme("light")}
                            class="bg-primary
          relative inline-flex h-5 w-10 z-[1] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                          >
                            <span class="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              class="translate-x-5
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                            ></span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            {" "}
            {fallbackSettings.map((setting) => (
              <div
                key={setting.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <button
                  onClick={() => handleOpenIndex(setting.id)}
                  className={`flex text-gray-1 dark:text-gray-200 gap-2 items-center pl-2 border-l-[5px] ${
                    setting.id === openIndex ? "border-primary" : "border-transparent"
                  } pr-4 py-2.5 bg-dua-bg dark:bg-[#182C43] rounded-lg focus:rounded-l-sm w-full`}
                >
                  <span className="bg-[#E8F0F5] dark:bg-dark-1 rounded-full p-2">
                    <Image src={setting.icon} alt={setting.name} height={24} width={24} />
                  </span>
                  <span>{setting.name}</span>
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
