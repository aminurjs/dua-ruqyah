"use client";

import Image from "next/image";
import SubCat from "./SubCat";
import { useState } from "react";
import { dataFetching } from "@/lib/utils";
import Link from "next/link";

const Category = ({ category, subcategories, subCat }) => {
  const [duas, setDuas] = useState([]);
  const duasCat = async (id) => {
    const data = await dataFetching(
      `https://duaruqyah-server.vercel.app/duas?subcat_id=${id}`
    );
    setDuas(data);
  };
  return (
    <div>
      <Link
        href={`/${category.cat_name_en.toLowerCase().replace(/ /gi, "-")}?cat=${
          category.cat_id
        }`}
        onClick={() => subCat(category.cat_id)}
        className="flex p-3 gap-2.5 cursor-pointer focus:bg-icon-bg  bg-white hover:bg-icon-bg transition-colors duration-300 rounded-xl"
      >
        <span className="block p-2.5 bg-icon-bg rounded-lg">
          <Image
            src={`https://duaruqyah.com/assets/icon/${category.cat_icon}.svg`}
            alt={category.cat_icon}
            height={40}
            width={40}
          />
        </span>
        <div className="flex-1">
          <h2 className="text-dark font-semibold">{category.cat_name_en}</h2>
          <p className="text-gray-1 text-sm mt-1">
            Subcategory: {category.no_of_subcat}
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-dark font-semibold">{category.no_of_dua}</h2>
          <p className="text-gray-1 text-sm mt-1">Duas</p>
        </div>
      </Link>

      {subcategories.length > 0 && (
        <div>
          {subcategories[0].cat_id === category.cat_id && (
            <div className="border-l-2 ml-10 my-2 py-1 border-dotted border-primary">
              {subcategories?.map((subcategory) => (
                <SubCat
                  key={subcategory.id}
                  subCat={subcategory}
                  duasCat={duasCat}
                  duas={duas}
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
