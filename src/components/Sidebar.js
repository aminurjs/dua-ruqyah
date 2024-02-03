import Image from "next/image";
import Link from "next/link";
export const icons = [
  "home",
  "alldua",
  "memorize",
  "bookmark",
  "ruqyah",
  "dua-info",
  "books",
];

const Sidebar = () => {
  return (
    <div className="flex mb-5 items-center justify-between flex-col h-[calc(100%-20px)] max-h-[930px] bg-white rounded-3xl px-3.5 py-5 overflow-y-auto">
      <div>
        <Image
          src="	https://duaruqyah.com/assets/dua-logo.svg"
          alt="logo"
          width={73}
          height={73}
        />
      </div>
      <div className="flex gap-6 items-center flex-col">
        {icons.map((icon) => (
          <Link className="bg-icon-bg rounded-full p-2" href="#" key={icon}>
            <Image
              src={`https://duaruqyah.com/assets/nav/${icon}.svg`}
              alt={icon}
              width={20}
              height={20}
            />
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
