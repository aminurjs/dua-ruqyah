import { redirect } from "next/navigation";

const page = () => {
  redirect("/categories");

  return <div></div>;
};

export default page;
