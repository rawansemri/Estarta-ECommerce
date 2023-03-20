import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.divHome}>
      <h1>Welcome to Estarta-ECommerce</h1>
      <p>Please Login</p>
      <Link to="/login">
        <button className={styles.loginHomeBtn}>
          Login <BsArrowRightShort size={20} />
        </button>
      </Link>
    </div>
  );
};

export default Home;
