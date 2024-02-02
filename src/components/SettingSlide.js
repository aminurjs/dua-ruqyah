import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { settings } from "./Setting";

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
        <div className=" bg-white max-h-[930px] h-[calc(100%-20px)]  overflow-y-auto">
          <h2 className="text-xl font-bold text-center text-dark mb-6">
            Setting
          </h2>
          <div className="space-y-3">
            {settings.map((setting) => (
              <div key={setting.id}>
                <button className="flex text-gray-1 gap-2 items-center pl-2 border-l-[5px] border-transparent focus:border-primary pr-4 py-2.5 bg-dua-bg rounded-lg focus:rounded-l-sm w-full">
                  <span className="bg-[#E8F0F5] rounded-full p-2">
                    <Image
                      src={setting.icon}
                      alt={setting.name}
                      height={24}
                      width={24}
                    />
                  </span>
                  <span>{setting.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SettingSlide;
