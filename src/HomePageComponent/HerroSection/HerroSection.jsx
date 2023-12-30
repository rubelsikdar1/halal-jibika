import Style from "./HerroSection.module.css";
import { Link } from 'react-router-dom';

const HerroSection = () => {
  return (
    <div className={Style.bg}>
      <div className="container">
        <div className={Style.innerContainer}>
          <div className={Style.left}>
            <div className={Style.innerTextBox}>
              <h2 className={Style.subHead}>4536+ Jobs listed</h2>
              <h1 className={Style.mainHad}>Find your Dream Job</h1>
              <h4 className={Style.h4}>
                We provide online instant cash loans with quick approval that
                suit <br /> your term length Upload Your Resume
              </h4>
              <div className={Style.btnBox}>
                <Link to={"/jobs"}><button className={Style.button}>Explore Now</button></Link>
                <button className={Style.button}>Find Job</button>
              </div>
            </div>
          </div>
          <div className={Style.right}></div>
        </div>
      </div>
    </div>
  );
};

export default HerroSection;
