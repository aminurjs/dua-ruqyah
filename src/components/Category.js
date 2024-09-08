"use client";

import Image from "next/image";
import SubCat from "./SubCat";
import { useRef, useState } from "react";
import { dataFetching } from "@/lib/utils";
import Link from "next/link";
import useLanguage from "@/hooks/useLanguage";

const Category = ({ category, subcategories, subCat }) => {
  const [duas, setDuas] = useState([]);
  const catRef = useRef(null);
  const { language } = useLanguage();

  const duasCat = async (id) => {
    const data = await dataFetching(`/api/duas?subcat_id=${id}`);
    setDuas(data);
  };
  const scrollToTop = async () => {
    if (catRef.current) {
      catRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div ref={catRef}>
        <Link
          key={category.cat_id}
          href={`/?cat=${category.cat_id}`}
          onClick={() => {
            subCat(category.cat_id);
            scrollToTop();
          }}
        >
          <div className="flex p-3 gap-2.5 cursor-pointer focus:bg-icon-bg  bg-white hover:bg-icon-bg dark:bg-dark-2 hover:dark:bg-dark-1 focus:dark:bg-dark-2 transition-colors duration-300 rounded-xl">
            <span className="block p-2.5 bg-icon-bg dark:bg-dark-1  rounded-lg">
              <Image
                src={`https://duaruqyah.com/assets/icon/${category.cat_icon}.svg`}
                alt={category.cat_icon}
                height={40}
                width={40}
              />
            </span>
            <div className="flex-1">
              <h2 className="text-dark dark:text-white font-semibold">
                {language === "english" ? category.cat_name_en : category.cat_name_bn}
              </h2>
              <p className="text-gray-1 dark:text-gray-200 text-sm mt-1">
                {language === "english" ? "Subcategory" : "সাব-ক্যাটেগরি"}: {category.no_of_subcat}
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-dark dark:text-white font-semibold">{category.no_of_dua}</h2>
              <p className="text-gray-1 dark:text-gray-200  text-sm mt-1">
                {" "}
                {language === "english" ? "Duas" : "দুয়া"}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {subcategories.length > 0 && (
        <div>
          {subcategories[0].cat_id === category.cat_id && (
            <div className="border-l-2 ml-10 my-2 py-1 border-dotted border-primary">
              {subcategories?.map((subcategory) => (
                <SubCat
                  key={subcategory.dua_id}
                  subCat={subcategory}
                  duasCat={duasCat}
                  duas={duas}
                  cat_name_en={category.cat_name_en}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
