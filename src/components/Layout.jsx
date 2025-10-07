import Header from "./Header";
import { Outlet } from "react-router-dom";
import { FaAngular, FaHtml5, FaLaptopCode, FaReact } from "react-icons/fa";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <FaReact className="absolute text-[80px] top-[20%] left-[10%] text-[#61dafb] opacity-20" />
        <FaLaptopCode className="absolute text-[100px] top-[60%] right-[10%] text-gray-800 opacity-10 rotate-[10deg]" />
        <FaHtml5 className="absolute text-[70px] top-[70%] left-[10%] text-[#e34c26] opacity-40 rotate-[20deg]" />
        <FaAngular className="absolute text-[70px] top-[20%] right-[10%] text-[#DE2836] opacity-40 rotate-[20deg]" />

        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
