import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className={styles.logo}>
        Estarta E-commerce
      </Link>

      <div>
          <Link to="/login">
            <button className={styles.loginBtn}>
              Login <BsArrowRightShort size={20} />
            </button>
          </Link>
        </div>
    </nav>
  );
};
