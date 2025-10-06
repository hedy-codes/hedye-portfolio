import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <FaHome />
        </Link>
        <Link to={"/skills"}>مهارت ها </Link>
        <Link to={"/projects"}>پروژه ها </Link>
        <Link to={"/contact"}>تماس </Link>
      </header>
    </div>
  );
}
