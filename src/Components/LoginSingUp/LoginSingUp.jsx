import { useState } from "react";
import Style from "./LoginSingUp.module.css";
import { Link } from "react-router-dom";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle,  } from "react-firebase-hooks/auth";
import auth from "./../../firebase.config";

const LoginSingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInEmail, setLogInEmail]= useState();
  const [logInPass, setLogInPass]= useState();
  const [toggle, setToggle] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [
      signInWithEmailAndPassword,
      singInuser,
      singInloading,
      singInerror,
    ] = useSignInWithEmailAndPassword(auth);


  const submitHandaler = (e) => {
    e.preventDefault();
  };
  const handleLogInBtn= (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(logInEmail,logInPass);
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return alert("loding.....");
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );}
  return (
    <div className={Style.body}>
      <div
        className={
          toggle ? `${Style.container} ${Style.active}` : Style.container 
        }
        id="container"
      >
        <div className={`${Style.formContainer} ${Style.signUp}`}>
          <form onClick={submitHandaler}>
            <h1>Create Account</h1>
            <div className={Style.socialIcons}>
              <Link to={""} className="icon">
                <IoLogoGoogleplus />
              </Link>
              <Link to={""} className="icon" >
              <FaGithub />
              </Link>
              <Link to={""} className="icon">
              <FaFacebookF />
              </Link>
              <Link to={""} className="icon">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your email for registeration</span>
            {/* <input type="text" placeholder="Name" /> */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => createUserWithEmailAndPassword(email, password)}> Register </button>
          </form>








        </div>
        <div className={`${Style.formContainer} ${Style.signIn}`}>
          <form onClick={submitHandaler}>
            <h1>Sign In</h1>
            <div className={Style.socialIcons}>
              <Link to={""} className="icon" onClick={()=>signInWithGoogle()}>
                <IoLogoGoogleplus />
              </Link>
              <Link to={""} className="icon" onClick={()=>signInWithGithub()} >
              <FaGithub />
              </Link>
              <Link to={""} className="icon">
              <FaFacebookF />
              </Link>
              <Link to={""} className="icon">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" value={logInEmail} onChange={(e) => setLogInEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={logInPass} onChange={(e) => setLogInPass(e.target.value)} />
            <Link to={""}>Forget Your Password?</Link>
            <button  onClick={handleLogInBtn}>
              Sign In
            </button >
          </form>
        </div>
        <div className={Style.toggleContainer}>
          <div className={Style.toggle}>
            <div className={`${Style.togglePanel} ${Style.toggleLeft}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className={Style.hidden}  onClick={() => setToggle(false)}>
                Sign In
              </button>
            </div>
            <div className={`${Style.togglePanel} ${Style.toggleRight}`}>
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className={Style.hidden} onClick={()=> setToggle(true)}>
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
