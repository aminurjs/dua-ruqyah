import { dataFetching } from "@/lib/utils";
import Image from "next/image";
import Audio from "./Audio";

const DuaFull = async ({ subcatId }) => {
  const data = await dataFetching(
    `http://localhost:5000/duas?subcat_id=${subcatId}`
  );
  return (
    <>
      {data.map((item) => (
        <div className="rounded-xl bg-white p-6 my-5" key={item.id}>
          <div className="flex items-center gap-3">
            <Image
              src="https://duaruqyah.com/assets/duacard.svg"
              alt="DuaCard"
              height={35}
              width={35}
            />
            <h2 className="font-medium text-title">{item.dua_name_en}</h2>
          </div>
          {item.top_en && (
            <p className="text-lg leading-8 to-black my-5">{item.top_en}</p>
          )}
          {item.clean_arabic && (
            <p className="text-right text-2xl leading-loose to-black mb-5">
              {item.clean_arabic}
            </p>
          )}
          {item.dua_arabic && (
            <p className="text-right text-2xl leading-loose to-black mb-5">
              {item.dua_arabic}
            </p>
          )}
          {item.transliteration_en && (
            <p className="italic text-lg leading-8 to-black mb-5">
              <span className="font-medium">Transliteration: </span>
              {item.transliteration_en}
            </p>
          )}
          {item.translation_en && (
            <p className="text-lg leading-8 to-dark mb-5">
              <span className="font-medium">Translation: </span>
              {item.translation_en}
            </p>
          )}
          {item.refference_en && (
            <p className="text-lg leading-8 to-black mb-5">
              <span className="block text-title">Reference:: </span>
              {item.refference_en}
            </p>
          )}
          <div className="flex justify-end items-center">
            {item.audio && (
              <div className="flex-grow flex-1">
                <Audio audio={item.audio} />
              </div>
            )}
            <div className=" flex gap-5">
              <button>
                <Image
                  src="https://duaruqyah.com/assets/others/copy.svg"
                  alt="copy"
                  height={24}
                  width={24}
                />
              </button>
              <button>
                <Image
                  src="https://duaruqyah.com/assets/others/bookmark.svg"
                  alt="bookmark"
                  height={24}
                  width={24}
                />
              </button>
              <button>
                <Image
                  src="https://duaruqyah.com/assets/others/plan.svg"
                  alt="plan"
                  height={24}
                  width={24}
                />
              </button>
              <button>
                <Image
                  src="https://duaruqyah.com/assets/others/share.svg"
                  alt="share"
                  height={24}
                  width={24}
                />
              </button>
              <button>
                <Image
                  src="https://duaruqyah.com/assets/others/report.svg"
                  alt="report"
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DuaFull;
