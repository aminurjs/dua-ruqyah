import Dua from "./Dua";

const SubCat = ({ subCat, duasCat, duas }) => {
  return (
    <div className="relative py-2">
      <span className="bg-primary w-2 h-2 rounded-full absolute top-6  -left-1" />
      <h2
        onClick={() => duasCat(subCat.subcat_id)}
        className="text-dark font-semibold text-sm cursor-pointer ml-4 py-2 text-left"
      >
        {subCat.subcat_name_en}
      </h2>
      {duas.length > 0 && (
        <div>
          {duas[0].subcat_id === subCat.subcat_id && (
            <div>
              {duas?.map((dua) => (
                <Dua key={dua.id} dua={dua} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubCat;
