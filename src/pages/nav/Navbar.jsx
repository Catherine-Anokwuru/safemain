import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Carousel from "../hero/Carousel";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const submenuHandle = (e) => {
    if (!e.target.classList.contains("sublinks")) {
      setPageId(null);
    }
  };
  return (
    <>
      <nav className="nav" onMouseOver={submenuHandle}>
        {/* <div className="nav-div"> */}
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
          <button className="bars" onClick={openSidebar}>
            <FaBars />
          </button>
          <Navlinks />
        {/* </div> */}
      </nav>
    </>
  );
};
export default Navbar;
