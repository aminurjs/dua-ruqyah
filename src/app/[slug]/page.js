import DuaFull from "@/components/DuaFull";
import { dataFetching } from "@/lib/utils";

const Duas = async ({ params, searchParams }) => {
  const data = await dataFetching(
    `https://duaruqyah-server.vercel.app/subcategories?cat_id=${
      searchParams.cat || 1
    }`
  );
  return (
    <div className="h-[calc(100vh-160px)] xl:h-[calc(100vh-95px)] overflow-y-auto w-full">
      {data.map((item) => (
        <div key={item.id}>
          <h1 className="bg-white rounded-xl p-4 font-medium text-dark mb-5">
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
