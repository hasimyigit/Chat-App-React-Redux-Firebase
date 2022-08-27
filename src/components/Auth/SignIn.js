import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { dbAddUser, setProfile } from "../../store/actions/authAction";
import styles from "./auth.module.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const handSubmit = (e) => {
    e?.preventDefault();

    if (email !== "" && password !== "" && userName !== "") {
      setErrorMessage("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          let [first, last] = userName.split(" ");
          let dbUser = {
            uid: user.uid,
            email: user.email,
            avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`,
            name: userName,
          };
          dbAddUser(dbUser);
          dispatch(setProfile(dbUser));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);

          // ..
        });
    }
  };

  return (
    <div className={styles.authBody}>
      <form onSubmit={handSubmit} className={styles.authForm}>
       
        <h1 className="h3 mb-3 font-weight-normal">Üye ol </h1>

        <input
          value={userName}
          onChange={({ target: { value } }) => setUserName(value)}
          type="text"
          id="userName"
          className="form-control"
          placeholder="User Name"
        />

        <input
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
        />

        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <div className="checkbox mb-3">
          <label
            style={{ textAlign: "end", width: "100%", cursor: "pointer" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Üyeyim
          </label>
          {errorMessage && <p className="text-muted">{errorMessage}</p>}
        </div>
        <button
          onClick={handSubmit}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Üye ol
        </button>
        
      </form>
    </div>
  );
};

export default SignIn;
