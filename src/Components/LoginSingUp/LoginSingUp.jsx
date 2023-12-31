
import { useState } from "react";
import Style from "./LoginSingUp.module.css";
import { Link } from 'react-router-dom';
import { IoLogoGoogleplus } from "react-icons/io";


const submitHandaler = (e)=>{
    e.preventDefault();
}



const LoginSingUp = () => {
    const [toggle, setToggle] = useState(true);
    console.log(toggle);
  return (
    <div className={Style.body}>
      <div className={toggle ?`${Style.container}`:`${Style.container} ${Style.active}`} id="container">
        <div className={`${Style.formContainer} ${Style.signUp}`}>
          <form onClick={submitHandaler}> 
            <h1>Create Account</h1>
            <div className={Style.socialIcons}>
              < Link To={"" } className="icon">
              <IoLogoGoogleplus />
              </Link>
              < Link To={ ""} className="icon">
                <FaFacebookF/>
              </Link>
              < Link To={ ""} className="icon">
                <i className="fa-brands fa-github" />
              </Link>
              < Link To={ ""} className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </Link>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button >Sign In</button>
          </form>
        </div>
        <div className={`${Style.formContainer} ${Style.signIn}`}>
          <form onClick={submitHandaler}>
            <h1>Sign In</h1>
            <div className={Style.socialIcons}>
              < Link To={""} className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </Link>
              < Link To={"" } className="icon">
                <i className="fa-brands fa-facebook-f" />
              </Link>
              < Link To={"" } className="icon">
                <i className="fa-brands fa-github" />
              </Link>
              < Link To={ ""} className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </Link>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            < Link To={"" }>Forget Your Password?</Link>
            <button className={Style.hidden} onClick={()=> setToggle(true)} >Sign In</button>
          </form>
        </div>
        <div className={Style.toggleContainer}>
          <div className={Style.toggle}>
            <div className={`${Style.togglePanel} ${Style.toggleLeft}`} >
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className={Style.hidden} onClick={()=> setToggle(true)}>
                Sign In
              </button>
            </div>
            <div className={`${Style.togglePanel} ${Style.toggleRight}`}>
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className={Style.hidden} onClick={()=> setToggle(false)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSingUp;
