"use client";

import { dataFetching } from "@/lib/utils";
import Image from "next/image";
import Category from "./Category";
import { useEffect, useState } from "react";
import "./categories.css";
import CatLoading from "./CatLoading";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [searchCategories, setSearchCategories] = useState(null);
  useEffect(() => {
    const data = async () => {
      const res = await dataFetching(
        "https://duaruqyah-server.vercel.app/categories"
      );
      setCategories(res);
    };
    data();
  }, []);
  const subCat = async (id) => {
    const data = await dataFetching(
      `https://duaruqyah-server.vercel.app/subcategories?cat_id=${id}`
    );
    setSubcategories(data);
  };
  const handleSearch = (e) => {
    const searchInput = e.target.value;
    const searched = categories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchCategories(searched);
  };
  return (
    <div className="lg:rounded-lg bg-white lg:w-1/3 mb-20 xl:mb-3 ">
      <div className="bg-primary lg:rounded-t-lg p-4 ">
        <p className="text-white text-center">Categories</p>
      </div>
      <div className="relative mx-3 py-4">
        <input
          type="text"
          name="search"
          onChange={handleSearch}
          className="placeholder:text-[#868686] py-3 pr-4 pl-12 bg-white w-full focus:outline-none focus:border-primary border-2 border-gray-300 rounded-lg"
          placeholder="Search by Dua Name"
        />
        <span className="p-2.5  absolute left-1 top-1/2 -translate-y-1/2">
          <Image
            src="../icons/search.svg"
            alt="search"
            width={24}
            height={24}
          />
        </span>
      </div>
      <div className="space-y-3 px-3 h-[calc(100%-153px)] overflow-y-auto">
        {searchCategories ? (
          <div>
            <p className="text-title font-medium text-sm text-start mb-5">
              Search Results:
            </p>
            {searchCategories?.length === 0 ? (
              <div className="mt-4">
                <div className="flex flex-col gap-y-10 items-center justify-center h-[50vh]">
                  <Image
                    className="w-1/3"
                    src="	https://duaruqyah.com/assets/no-data-found.svg"
                    alt="no-data-found"
                    width={220}
                    height={140}
                  />
                  <p className="text-xl leading-4">No Result Found</p>
                </div>
              </div>
            ) : (
              <>
                {searchCategories.map((category) => (
                  <Category
                    key={category.id}
                    category={category}
                    subCat={subCat}
                    subcategories={subcategories}
                  />
                ))}
              </>
            )}
          </div>
        ) : (
          <>
            {categories.length === 0 ? (
              <CatLoading />
            ) : (
              <>
                {categories.map((category) => (
                  <Category
                    key={category.id}
                    category={category}
                    subCat={subCat}
                    subcategories={subcategories}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
