const LoadingPage = () => {
  return (
    <ul className="h-[calc(100vh-160px)] xl:h-[calc(100vh-95px)] overflow-y-auto">
      {[...Array(3)].map((movie, index) => (
        <li key={index} className="relative animate-pulse">
          <h1 className="bg-white rounded-xl p-4 mb-5">
            <span className="block h-4 rounded-lg bg-gray-200" />
          </h1>
          <div className=" w-full rounded-xl bg-white p-6 my-5">
            <p className="mt-2 h-4 w-2/3 rounded-lg bg-gray-200 mb-5"></p>
            <p className="mt-2 block h-4 rounded-lg bg-gray-200 mb-2"></p>
            <p className="mt-2 block h-4 rounded-lg bg-gray-200 mb-2"></p>
            <p className="mt-2 block h-4 rounded-lg bg-gray-200 mb-2"></p>
            <p className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200 mb-12"></p>
            <p className="mt-2 h-4 w-1/3 rounded-lg bg-gray-200 mb-2"></p>
            <p className="mt-2 h-4 w-2/3 rounded-lg bg-gray-200 mb-8"></p>
            <div className="flex justify-between">
              <div className="flex-1 flex-grow">
                <span className="inline-block h-6 w-6 rounded-full bg-gray-200" />
              </div>
              <div>
                <span className="inline-block h-5 w-5 rounded-full bg-gray-200 ml-5" />
                <span className="inline-block h-5 w-5 rounded-full bg-gray-200 ml-5" />
                <span className="inline-block h-5 w-5 rounded-full bg-gray-200 ml-5" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LoadingPage;
