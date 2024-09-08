"use client";

import useLanguage from "@/hooks/useLanguage";
import { dataFetching } from "@/lib/utils";
import { useEffect, useState } from "react";
import DuaFullPage from "./DuaFullPage";
import LoadingPage from "./loading";

const DuasPage = ({ id = 1 }) => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  useEffect(() => {
    const getData = async () => {
      const loadedData = await dataFetching(`/api/subcategories?cat_id=${id}`);
      setData(loadedData);
    };
    getData();
  }, [id]);

  return (
    <div className="h-[calc(100vh-145px)] xl:h-[calc(100vh-95px)] overflow-y-auto w-full scroll-smooth transition-all duration-500 ease-in-out">
      {data.length ? (
        <>
          {" "}
          {data.map((item) => (
            <div key={item.id}>
              <h1
                id={`section-${item.subcat_id}`}
                className="bg-white dark:bg-dark-2 rounded-xl p-4 font-medium text-dark dark:text-white mb-5"
              >
                <span className="text-primary">
                  {language === "english" ? "Section: " : "পরিচ্ছেদঃ "}
                </span>

                {language === "english" ? item.subcat_name_en : item.subcat_name_bn}
              </h1>
              <DuaFullPage id={item?.subcat_id} />
            </div>
          ))}
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default DuasPage;
