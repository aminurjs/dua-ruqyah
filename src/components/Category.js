import Subcategory from "@/app/[cat_name]/page";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <>
      <Link
        href={`/${category.cat_name_en.toLowerCase().replace(/ /g, "-")}`}
        className="flex p-3 gap-2.5 cursor-pointer text-black bg-white hover:bg-icon-bg transition-colors duration-300 rounded-xl"
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
    </>
  );
};

export default Category;
