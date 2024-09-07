"use client";
import { useState } from "react";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";

const settings = [
  { id: 1, icon: "/icons/language.svg", name: "Language Setting" },
  { id: 2, icon: "/icons/general.svg", name: "General Setting" },
  { id: 3, icon: "/icons/54-menu-2.svg", name: "Font Setting" },
  { id: 4, icon: "/icons/54-menu-2.svg", name: "Appearance Setting" },
];
const Settings = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const { language, setLanguage } = useLanguage();

  const handleOpenIndex = (id) => {
    openIndex === id ? setOpenIndex(null) : setOpenIndex(id);
  };

  return (
    <div className=" bg-white 2xl:max-h-[930px] rounded-3xl h-full 2xl:h-[calc(100%-20px)] 2xl:px-4 pt-6 pb-5  overflow-y-auto">
      <h2 className="text-xl font-bold text-center text-dark mb-6">Setting</h2>
      <div className="space-y-3">
        {settings.map((setting) => (
          <div key={setting.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => handleOpenIndex(setting.id)}
              className={`flex text-gray-1 gap-2 items-center pl-2 border-l-[5px] ${
                setting.id === openIndex ? "border-primary" : "border-transparent"
              } pr-4 py-2.5 bg-dua-bg rounded-lg focus:rounded-l-sm w-full`}
            >
              <span className="bg-[#E8F0F5] rounded-full p-2">
                <Image src={setting.icon} alt={setting.name} height={24} width={24} />
              </span>
              <span>{setting.name}</span>
            </button>
            {setting.id === 1 && openIndex === 1 && (
              <div className="py-4 rounded-b-lg">
                <div className="flex flex-row gap-x-3 mx-4 justify-center">
                  <button
                    onClick={() => setLanguage("english")}
                    className={` ${
                      language === "english"
                        ? "bg-primary text-white"
                        : "text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf]"
                    }  rounded-md w-29 h-10 text-sm xs:w-full sm:w-full`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("bangla")}
                    className={` ${
                      language === "bangla"
                        ? "bg-primary text-white"
                        : "text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf]"
                    }  rounded-md w-29 h-10 text-sm xs:w-full sm:w-full`}
                  >
                    বাংলা
                  </button>
                </div>
              </div>
            )}
            {setting.id === 4 && openIndex === 4 && (
              <div class="px-4 pb-1 rounded-b-lg">
                <div class=" flex flex-row justify-between">
                  <p class="mt-7 mb-4 text-title text-sm dark:text-dark-text">Night Mode</p>
                  <div class="mt-7 mb-4">
                    <button
                      class="bg-gray-300
          relative inline-flex h-5 w-10 z-[1] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-switch-:rb9:"
                      role="switch"
                      type="button"
                      tabindex="0"
                      aria-checked="false"
                      data-headlessui-state=""
                    >
                      <span class="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        class="translate-x-0
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
