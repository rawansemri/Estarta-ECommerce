
import styles from "./styles.module.css";
import React, { useState } from "react";
import magic from "../../lib/magic-sdk";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  async function handleLogin() {
    try {
      const res = await magic.auth.loginWithMagicLink({ email });
      if (res){
        navigate('/')
      }
    } catch (error) {
      
    }
    // dispatch(Login(email));
  }
  return (
    <div className={styles.loginContainer}>
    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>

    <button className={styles.loginBtn} onClick={handleLogin} >
      Login
    </button>
  </div>
);
}