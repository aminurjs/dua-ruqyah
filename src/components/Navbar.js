import { ChevronDown } from "lucide-react";
import Image from "next/image";
import SettingSlide from "./SettingSlide";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-7 pb-4">
      <div className="w-4/5 flex justify-between items-center">
        <div>
          <h1 className="text-dark text-2xl font-semibold font-poppins">
            Dua Page
          </h1>
        </div>
        <div className="">
          <div className="relative w-72">
            <input
              type="text"
              className="placeholder:text-[#868686] py-3.5 px-4 bg-white w-full focus:outline-none focus:border-primary border border-transparent rounded-lg"
              placeholder="Search by Dua Name"
            />
            <button className="px-4 py-2.5 bg-[#F3F4F6] rounded-md absolute right-1 top-1/2 -translate-y-1/2">
              <Image
                src="./icons/search.svg"
                alt="search"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/5 flex justify-end items-center">
        <button className="flex gap-1 justify-center items-center">
          <Image
            src="./icons/profile.svg"
            alt="profile"
            width={45}
            height={45}
          />
          <ChevronDown className="h-5 w-5 text-dark" />
        </button>
        <SettingSlide />
      </div>
    </nav>
  );
};

export default Navbar;
