import Link from "next/link";

const NotFound = () => {
  return (
    <div className="max-w-5xl px-5 p-10 mx-auto w-full">
      <div className="bg-white rounded shadow px-5 p-10 w-full">
        <h1 className="text-[80px] md:text-[120px] text-primary font-extrabold text-center">
          4<span className="text-dark">0</span>4
        </h1>
        <h2 className="text-2xl lg:text-3xl text-center font-semibold capitalize mb-5">
          The page you are requested could not found
        </h2>
        <div className="text-center">
          <Link href="/">
            <button className=" mt-5 mb-5 bg-primary rounded-sm p-3 px-10 text-white uppercase font-medium duration-300">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
