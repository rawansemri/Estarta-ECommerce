
import styles from "./styles.module.css";
import React, { useState } from "react";
import { Login } from '../../redux/auth/actions'
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth, loading} = useSelector(state => state.authReducer)
  async function handleLogin() {
    dispatch(Login(email));

  }
  return (
    <div className={styles.loginContainer}>
    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>

    <button disabled={loading} className={styles.loginBtn} onClick={handleLogin} >
      {/* Login */}
      {loading ? 'loading...' : 'Login'}
    </button>
  </div>
);
}