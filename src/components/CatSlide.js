import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import Categories from "./Categories";

const CatSlide = () => {
  return (
    <Sheet>
      <SheetTrigger className="block 2xl:hidden">
        <Image
          src="https://duaruqyah.com/assets/tab/home/settings.svg"
          alt="setting"
          height={30}
          width={30}
        />
      </SheetTrigger>
      <SheetContent side="left" className=" rounded-r-3xl">
        <Categories />
      </SheetContent>
    </Sheet>
  );
};

export default CatSlide;
