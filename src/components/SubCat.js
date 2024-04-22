import Dua from "./Dua";

const SubCat = ({ subCat, duasCat, duas, cat_name_en }) => {
  return (
    <div className="relative py-2">
      <span className="bg-primary w-2 h-2 rounded-full absolute top-6  -left-1" />
      <div onClick={() => duasCat(subCat.subcat_id)}>
        <a
          href={`/${cat_name_en.toLowerCase().replace(/ /gi, "-")}/${
            subCat.cat_id
          }#section-${subCat.subcat_id}`}
          className="text-dark block font-semibold text-sm cursor-pointer ml-4 py-2 text-left"
        >
          {subCat.subcat_name_en}
        </a>
      </div>
      {duas.length > 0 && (
        <div>
          {duas[0].subcat_id === subCat.subcat_id && (
            <div>
              {duas?.map((dua) => (
                <Dua key={dua.id} dua={dua} cat_name_en={cat_name_en} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubCat;
