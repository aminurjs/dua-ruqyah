import Image from "next/image";
import Audio from "./Audio";
import { connectToDatabase } from "@/lib/mongodb";

async function fetchDuas(subcatId) {
  const { db } = await connectToDatabase();
  const duasCollection = db.collection("dua");
  const duas = await duasCollection.find({ subcat_id: subcatId }).toArray();
  return duas;
}

const DuaFull = async ({ subcatId, language }) => {
  const data = await fetchDuas(subcatId);
  return (
    <>
      {data.map((item) => (
        <div
          id={`section-${item.subcat_id}-dua-${item.dua_id}`}
          className="rounded-xl bg-white p-6 my-5"
          key={item.id}
        >
          <div className="flex items-center gap-3">
            <Image
              src="https://duaruqyah.com/assets/duacard.svg"
              alt="DuaCard"
              height={35}
              width={35}
            />
            <h2 className="font-medium text-title">
              {language === "english" ? item.dua_name_en : item.dua_name_bn}
            </h2>
          </div>
          {item.top_en && (
            <p className="text-lg leading-8 to-black my-5">
              {language === "english" ? item.top_en : item.top_bn}
            </p>
          )}
          {item.clean_arabic && (
            <p className="text-right text-2xl leading-loose to-black mb-5">{item.clean_arabic}</p>
          )}
          {/* {item.dua_arabic && (
            <p className="text-right text-2xl leading-loose to-black mb-5">
              {item.dua_arabic}
            </p>
          )} */}
          {item.transliteration_en && (
            <p className="italic text-lg leading-8 to-black mb-5">
              <span className="font-medium">
                {language === "english" ? "Transliteration: " : "উচ্চারণঃ "}{" "}
              </span>
              {language === "english" ? item.transliteration_en : item.transliteration_bn}{" "}
            </p>
          )}
          {item.translation_en && (
            <p className="text-lg leading-8 to-dark mb-5">
              <span className="font-medium">
                {language === "english" ? "Translation: " : "অনুবাদঃ "}{" "}
              </span>
              {language === "english" ? item.translation_en : item.translation_bn}
            </p>
          )}
          {item.refference_en && (
            <p className="text-lg leading-8 to-black mb-5">
              <span className="block text-title">
                {language === "english" ? "Reference: " : "রেফারেন্স: "}
              </span>
              {language === "english" ? item.refference_en : item.refference_bn}
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
