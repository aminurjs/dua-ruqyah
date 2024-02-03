import { redirect } from "next/navigation";

const page = () => {
  redirect("/home");

  return <div></div>;
};

export default page;
