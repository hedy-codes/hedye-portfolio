import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="w-[600px] h-[70px] py-3 mt-7 mx-auto rounded-lg flex items-center justify-center gap-20 text-white bg-blue-800 shadow-lg shadow-blue-600">
        <Link to={"/"}>
          <FaHome className="text-3xl" />
        </Link>
        <Link to={"/skills"}>مهارت ها </Link>
        <Link to={"/projects"}>پروژه ها </Link>
        <Link to={"/contact"}>تماس </Link>
      </header>
    </div>
  );
}
