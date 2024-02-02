"use client";

import { dataFetching } from "@/lib/utils";
import Image from "next/image";
import Category from "./Category";
import { useEffect, useState } from "react";
import "./categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [searchCategories, setSearchCategories] = useState(null);
  useEffect(() => {
    const data = async () => {
      const res = await dataFetching("http://localhost:5000/categories");
      setCategories(res);
    };
    data();
  }, []);
  const subCat = async (id) => {
    const data = await dataFetching(
      `http://localhost:5000/subcategories?cat_id=${id}`
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
    <div className="rounded-lg bg-white w-1/3 mb-20 xl:mb-3 ">
      <div className="bg-primary rounded-t-lg p-4 ">
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
      </div>
    </div>
  );
};

export default Categories;
