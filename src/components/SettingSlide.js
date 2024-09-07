import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Settings from "./Settings";

const SettingSlide = () => {
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
      <SheetContent className=" rounded-l-3xl">
        <Settings />
      </SheetContent>
    </Sheet>
  );
};

export default SettingSlide;
