import DuaFull from "@/components/DuaFull";
import { connectToDatabase } from "@/lib/mongodb";
import { cookies } from "next/headers";

const Duas = async ({ params }) => {
  const subcatId = parseInt(params.id, 10);
  const cookieStore = cookies();
  const language = cookieStore.get("language")?.value || "english";

  // Function to fetch data from MongoDB
  async function fetchSubcategories(cat_id) {
    const { db } = await connectToDatabase();
    const subcategoriesCollection = db.collection("subcategories");
    const subcategories = await subcategoriesCollection.find({ cat_id }).toArray();
    return subcategories;
  }
  const data = await fetchSubcategories(subcatId);

  return (
    <div className="h-[calc(100vh-160px)] xl:h-[calc(100vh-95px)] overflow-y-auto w-full scroll-smooth transition-all duration-500 ease-in-out">
      {data.map((item) => (
        <div id={`scat-${item.subcat_id}`} key={item.id}>
          <h1
            id={`section-${item.subcat_id}`}
            className="bg-white rounded-xl p-4 font-medium text-dark mb-5"
          >
            <span className="text-primary">
              {language === "english" ? "Section: " : "পরিচ্ছেদঃ "}
            </span>

            {language === "english" ? item.subcat_name_en : item.subcat_name_bn}
          </h1>
          <DuaFull subcatId={item.subcat_id} language={language} />
        </div>
      ))}
    </div>
  );
};

export default Duas;
