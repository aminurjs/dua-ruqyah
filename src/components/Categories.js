import { dataFetching } from "@/lib/utils";
import Image from "next/image";
import Category from "./Category";

const Categories = async () => {
  const categories = await dataFetching("http://localhost:5000/categories");
  return (
    <div className="rounded-lg bg-white">
      <div className="bg-primary rounded-t-lg p-4 ">
        <p className="text-white text-center">Categories</p>
      </div>
      <div className="relative mx-3 py-4">
        <input
          type="text"
          className="placeholder:text-[#868686] py-3 pr-4 pl-12 bg-white w-full focus:outline-none focus:border-primary border-2 border-gray-300 rounded-lg"
          placeholder="Search by Dua Name"
        />
        <button className="p-2.5  absolute left-1 top-1/2 -translate-y-1/2">
          <Image src="./icons/search.svg" alt="search" width={24} height={24} />
        </button>
      </div>
      <div className="space-y-3 px-3 h-[calc(100%-153px)] overflow-y-auto">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
