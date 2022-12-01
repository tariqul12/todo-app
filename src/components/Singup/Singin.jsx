import React, { useState } from "react";
import "./Singin.css";
import firebaseConfig from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Singup() {
  const auth = getAuth();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("Fill the all details!");

  let handleSubmit = () => {
    if (!name && !email && !password) {
      setErr("Fill the all details!");
    } else if (!name) {
      setErr("Enter your Name");
    } else if (!email) {
      setErr("Enter your Email");
    } else if (!password) {
      setErr("Enter your Password");
    } else if (password.length > 7) {
      setErr("Password need minimum 8 character");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setErr("");
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  };

  return (
    <>
      <div className="center">
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          method=""
        >
          <div className="txt_field">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <p>{err}</p>
          <div className="pass">Forgot Password?</div>
          <input onClick={handleSubmit} type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Singup;
