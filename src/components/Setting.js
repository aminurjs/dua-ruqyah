import Image from "next/image";

const settings = [
  { id: 1, icon: "./icons/language.svg", name: "Language Setting" },
  { id: 2, icon: "./icons/general.svg", name: "General Setting" },
  { id: 3, icon: "./icons/54-menu-2.svg", name: "Font Setting" },
  { id: 4, icon: "./icons/54-menu-2.svg", name: "Appearance Setting" },
];
const Setting = () => {
  return (
    <div className="w-1/5 bg-white max-h-[930px] rounded-3xl h-full px-4 pt-6 pb-5 overflow-y-auto  overflow-x-hidden">
      <h2 className="text-xl font-bold text-center text-dark mb-6">Setting</h2>
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
  );
};

export default Setting;
