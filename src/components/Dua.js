import Image from "next/image";
import React from "react";

const Dua = ({ dua, cat_name_en }) => {
  return (
    <a
      href={`/dua/${cat_name_en.toLowerCase().replace(/ /gi, "-")}/${dua.cat_id}#section-${
        dua.subcat_id
      }-dua-${dua.dua_id}`}
      className="flex items-center gap-2 mt-2"
    >
      <Image
        src="https://duaruqyah.com/assets/duaarrow.svg"
        alt="arrow"
        width={18}
        height={18}
        className="-translate-y-1 ml-2"
      />
      <h4 className="text-[13px] text-left cursor-pointer text-2xs my-3 w-[95%] dark:text-gray-300 ">
        {dua?.dua_name_en}
      </h4>
    </a>
  );
};

export default Dua;
