import DuasPage from "@/components/DuaPage";

const Home = ({ searchParams }) => {
  const { cat } = searchParams;
  return (
    <div>
      <DuasPage id={cat} />
    </div>
  );
};

export default Home;
