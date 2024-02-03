const CatLoading = () => {
  return (
    <div className="space-y-3 mt-5">
      {[...Array(7)].map((movie, index) => (
        <li
          key={index}
          className="bg-gray-50 p-3 gap-2.5 flex items-start animate-pulse"
        >
          <span className="block h-14 w-14 rounded-lg bg-gray-200" />
          <div className="w-[calc(100%-56px)]">
            <p className="block h-4 rounded-lg bg-gray-200 mb-3"></p>
            <p className="block h-4 rounded-lg bg-gray-200"></p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CatLoading;
