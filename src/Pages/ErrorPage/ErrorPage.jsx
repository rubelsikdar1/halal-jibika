import { Link } from "react-router-dom";
import Style from "./ErrorPage.module.css";
// import "./cks.css"
const ErrorPage = () => {
  return (
    <div>
      <div >
        <section className={Style.page404}>
          <div >
            <div className={Style.row}>
              <div >
                <div >
                  <div className={Style.fourZeroBourBg}>
                    <h1 > 404</h1>
                  </div>
                  <div className={Style.contantBox404}>
                    <h3 className="h2">Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <Link to={"home"} className={Style.link404}>
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
