import Image from "next/image";
import { icons } from "./Sidebar";
import Link from "next/link";

const TabMenuB = () => {
  return (
    <div className="-translate-y-1/2 relative top-1/2">
      <div className="flex gap-6 items-center justify-evenly ">
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
    </div>
  );
};

export default TabMenuB;
