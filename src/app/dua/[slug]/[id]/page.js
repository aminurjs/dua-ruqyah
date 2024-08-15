import DuaFull from "@/components/DuaFull";
import { connectToDatabase } from "@/lib/mongodb";

const Duas = async ({ params }) => {
  const subcatId = parseInt(params.id, 10);

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
            <span className="text-primary">Section: </span>
            {item.subcat_name_en}
          </h1>
          <DuaFull subcatId={item.subcat_id} />
        </div>
      ))}
    </div>
  );
};

export default Duas;
