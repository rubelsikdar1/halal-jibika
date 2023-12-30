// import Style from "./Header.module.css"
// import "./hd.css";
import Style from "./Header.module.css"

const Header = () => {
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#"> Jobs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Favorite</a>
              </li>
              <li>
                <a href="#">Logn </a>
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
