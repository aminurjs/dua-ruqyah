import Navbar from "@/components/Navbar";
import Setting from "@/components/Setting";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="h-full flex gap-8 items-start">
        <Sidebar />
        <div className="flex-1 h-full">
          <Navbar />

          <div className="w-1/5 h-[calc(100%-80px)]">
            <Setting />
          </div>
        </div>
      </div>
    </>
  );
}
