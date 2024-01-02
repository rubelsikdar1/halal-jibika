
import { useContext } from "react";
import Style from "./Header.module.css"
import { NavLink } from 'react-router-dom';
import jobContext from "../../Context/JobLIstContext/JobContext";

const Header = () => {
  const {favorite} = useContext(jobContext);

  return (
    <div className={Style.bg}>
      <div className="container">
        <nav className={Style.navbar}>
          <div className={Style.navbarContainer}>
            <input type="checkbox" name="" id="" />
            <div className={Style.hamburgerLines}>
              <span className={`${Style.line} ${Style.line1}`} />
              <span className={`${Style.line} ${Style.line2}`} />
              <span className={`${Style.line} ${Style.line2}`} />
            </div>
            <ul className={Style.menuItems}>
              <li>
                <NavLink to={"home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"jobs"}> Jobs</NavLink>
              </li>
              <li>
                <NavLink to={"about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"favorite"}>Favorite({favorite.length})</NavLink>
              </li>
              <li>
                <NavLink to={"login"}>Login </NavLink>
              </li>
              <li>
                <NavLink to={"login"}>Logout </NavLink>
              </li>
            </ul>
            <img className={Style.logo} src="halal-jibika-logo.png" alt="" />
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;
