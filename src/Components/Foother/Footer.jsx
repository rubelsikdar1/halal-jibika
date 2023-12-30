import Style from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
// import "./f.css";

const Footer = () => {
  return (
    <div className={Style.mainBox}>
      <div className="container">
        <footer className={Style.footer}>
          <div className="container">
            <div className={Style.row}>
              <div className={Style.footerCol}>
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our services</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                  <li>
                    <a href="#">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div className={Style.footerCol}>
                <h4>get help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">shipping</a>
                  </li>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">order status</a>
                  </li>
                  <li>
                    <a href="#">payment options</a>
                  </li>
                </ul>
              </div>
              <div className={Style.footerCol}>
                <h4>online shop</h4>
                <ul>
                  <li>
                    <a href="#">watch</a>
                  </li>
                  <li>
                    <a href="#">bag</a>
                  </li>
                  <li>
                    <a href="#">shoes</a>
                  </li>
                  <li>
                    <a href="#">dress</a>
                  </li>
                </ul>
              </div>
              <div className={Style.footerCol}>
                <h4>follow us</h4>
                <div className="socialLinks">
                  
                    <dir className={Style.icons}> <BsFacebook size={30} color="white" /> </dir>
                    <dir className={Style.icons}> <FaTwitter size={30} color="white" /></dir>
                    <dir className={Style.icons}> <FaInstagram size={30} color="white" /></dir>
                    <dir className={Style.icons}> <IoLogoLinkedin size={30} color="white" /></dir> 
                  
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
