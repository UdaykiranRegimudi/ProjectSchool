import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const ram = "";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5">
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active ml-5 navItems">
            <NavLink className="nav-link" style={{ color: "black" }} to="/">
              HOME<span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active ml-5 navItems">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/dashboard"
            >
              DASHBOARD<span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active ml-5 navItems">
            <NavLink className="nav-link" to="#" style={{ color: "black" }}>
              PROJECT <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item ml-5 ">
            <NavLink className="nav-link" style={{ color: "black" }} to="#">
              PROBLEM STATEMNETS
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <NavLink className="nav-link" to="#" style={{ color: "black" }}>
              COLLEGES
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <NavLink className="nav-link" to="#" style={{ color: "black" }}>
              YOUR PROJECTS
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <NavLink
              className="nav-link"
              to="/about"
              style={{ color: "black" }}
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <NavLink
              className="nav-link"
              to="/contactus"
              style={{ color: "black" }}
            >
              CONTACT US
            </NavLink>
          </li>
          <li className="nav-item dropdown ml-5">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              RANKING
            </NavLink>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink className="dropdown-item" to="#">
                COLLEGES
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                PROGRAMMERS
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                PROJECTS
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
