
import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import { Login } from '../../redux/auth/actions'
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth, loading} = useSelector(state => state.authReducer)
  async function handleLogin() {
    dispatch(Login(email));
  }
  useEffect(() => {
    if (isAuth) navigate("/products");
  }, [isAuth]);
  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>

    <button disabled={loading} className={styles.loginBtn} onClick={handleLogin} >
      {loading ? 'loading...' : 'Login'}
    </button>
  </div>
);
}

export default LoginPage;