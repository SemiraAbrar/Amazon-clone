import React, { useState, useContext } from "react";
import { auth } from "../../Utility/Firebase";
import classes from "./Signup.module.css";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actiontype";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData=useLocation();
  console.log(navStateData);
  //console.log(user);
  // console.log(password,email);
  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      //firebase authentication
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          // navigate("/");
          navigate(navStateData?.state?.redirect ||"/");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          // navigate("/");
           navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    }
    //console.log(e.target.name);
  };
  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small style={{
              padding:"5px",
              textAlign:"center",
              color:"red",
              fontWeight:"bold",
            }}>
              {navStateData.state.msg}
            </small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name=""
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInBtn}
          >
            {loading.signIn ? (
              <ClipLoader color="#e3c359" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you are agree to the AMAZON FAKE CLONE Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and Our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#e3c359" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
