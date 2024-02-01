import Image from "next/image";
import Link from "next/link";
const icons = [
  "home 1.svg",
  "54-menu-2.svg",
  "memorize 1.svg",
  "3-keep-minus.svg",
  "books 1.svg",
  "dua-info 1.svg",
  "ruqyah 1.svg",
];

const Sidebar = () => {
  return (
    <div className="flex items-center justify-between flex-col h-full max-h-[930px] bg-white rounded-3xl px-3.5 py-5 overflow-y-auto">
      <div>
        <Image src="/icons/logo.png" alt="logo" width={73} height={73} />
      </div>
      <div className="flex gap-6 items-center flex-col">
        {icons.map((icon) => (
          <Link className="bg-gray-200 rounded-full p-2" href="#" key={icon}>
            <Image src={`./icons/${icon}`} alt={icon} width={20} height={20} />
          </Link>
        ))}
      </div>
      <div className="bg-primary p-4 rounded-lg">
        <Image
          src="./icons/bxs_donate-heart.svg"
          alt="bxs_donate-heart"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
};

export default Sidebar;
