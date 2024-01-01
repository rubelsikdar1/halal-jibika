import Style from "./About.module.css";
// import AboutHerro from './../../Components/Svg/About/AboutHerro';

const About = () => {
  return (
    <div className={Style.bg}>
      <div className="container">
        <div className={Style.herroAria}>
          <div className={Style.left}>
            <h1>About Us </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              amet atque provident laboriosam eaque. Laboriosam quia placeat
              consequatur nihil vero, mollitia voluptatum necessitatibus sequi,
              debitis facilis quis sunt quae non.
            </p>
            <button>More Info </button>
          </div>
          <div className={Style.right}>
            <img className={Style.nam} src="./about-us-page-animate.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
