import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <FaHome />
        </Link>
      </header>
    </div>
  );
}
