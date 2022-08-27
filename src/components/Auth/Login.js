import React, { useState } from "react";
import styles from "./auth.module.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getProfile, setAuth} from '../../store/actions/authAction';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handSubmit = (e) => {
    e?.preventDefault();
    if (email !== "" && password !== "") {
      setErrorMessage('')
      signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // (async()=>{
          //   dispatch( await(getProfile(user.uid)));
          // })()
  
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
          // ..
        });
    }
  };

  

  return (
    <div className={styles.authBody}>
      <form onSubmit={handSubmit}  className={styles.authForm}>
       
        <h1 className="h3 mb-3 font-weight-normal">Giriş Yap</h1>
       
        <input
          value={email}
          onChange={({target:{value}})=>setEmail(value)}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
        />

        <input
         value={password}
         onChange={({target:{value}})=>setPassword(value)}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <div className="checkbox mb-3">
          <label style={{ textAlign: "end", width: "100%", cursor:'pointer' }} onClick={()=>{navigate('/signIn')}}>Üye değilim</label>
         <p className=" text-muted">{errorMessage}</p>
        </div>
        <button onClick={handSubmit} className="btn btn-lg btn-primary btn-block" type="submit">
          Giriş
        </button>
       
       
      </form>
    </div>
  );
};

export default Login;
