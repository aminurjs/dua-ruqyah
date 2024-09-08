import useLanguage from "@/hooks/useLanguage";
import { dataFetching } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Audio from "./Audio";
import { LoadingCard } from "./loading";
import { useToast } from "@/hooks/use-toast";
import { showCopiedToast, showUnAvailableToast } from "./toast";

const DuaFullPage = ({ id }) => {
  const [duas, setDuas] = useState([]);
  const { language } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const getData = async () => {
      const loadedDuas = await dataFetching(`/api/duas?subcat_id=${id}`);
      setDuas(loadedDuas);
    };
    getData();
  }, [id]);

  return (
    <div>
      {duas.length ? (
        <>
          {duas.map((item, i) => (
            <DuaFull key={item.id} item={item} language={language} toast={toast} i={i} />
          ))}
        </>
      ) : (
        <LoadingCard />
      )}
    </div>
  );
};

export default DuaFullPage;

const DuaFull = ({ item, language, toast, i }) => {
  const handleCopy = () => {
    const formattedText = `${i + 1}. ${language === "english" ? item.dua_name_en : item.dua_name_bn}

${item.top_en ? (language === "english" ? item.top_en : item.top_bn) : ""}

${item.clean_arabic ? item.clean_arabic : ""}

${
  item.transliteration_en
    ? language === "english"
      ? item.transliteration_en
      : item.transliteration_bn
    : ""
}

${item.translation_en ? (language === "english" ? item.translation_en : item.translation_bn) : ""}

${
  item.refference_en
    ? language === "english"
      ? "Reference: " + item.refference_en
      : "রেফারেন্স: " + item.refference_bn
    : ""
}

Copied From:
Dua & Ruqyah (Hisnul Muslim)
${window.location.href}
`;

    navigator.clipboard
      .writeText(formattedText)
      .then(() => {
        showCopiedToast(toast);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      id={`section-${item.subcat_id}-dua-${item.dua_id}`}
      className="rounded-xl bg-white dark:bg-dark-2 p-6 my-5"
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
          <button title="Copy" onClick={() => handleCopy()}>
            <Image
              src="https://duaruqyah.com/assets/others/copy.svg"
              alt="copy"
              height={24}
              width={24}
            />
          </button>
          <button title="Bookmark" onClick={() => showUnAvailableToast(toast)}>
            <Image
              src="https://duaruqyah.com/assets/others/bookmark.svg"
              alt="bookmark"
              height={24}
              width={24}
            />
          </button>
          <button title="Memorize" onClick={() => showUnAvailableToast(toast)}>
            <Image
              src="https://duaruqyah.com/assets/others/plan.svg"
              alt="plan"
              height={24}
              width={24}
            />
          </button>
          <button title="Share" onClick={() => showUnAvailableToast(toast)}>
            <Image
              src="https://duaruqyah.com/assets/others/share.svg"
              alt="share"
              height={24}
              width={24}
            />
          </button>
          <button title="Report" onClick={() => showUnAvailableToast(toast)}>
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
  );
};
