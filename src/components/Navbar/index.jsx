import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsCart4 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/auth/actions";

export const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const nav = useNavigate();
  const [isUserOpened, setIsUserOpened] = useState(false);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(Logout()).then((res) => {
      if (res) {
        nav("/");
      }
    });
  }

  return (
    <nav>
      {!isAuth && (
        <Link to="/" className={styles.logo}>
          Estarta E-commerce
        </Link>
      )}
    
      {isAuth && (
        <Link to="/products" className={styles.logo}>
          Estarta E-commerce
        </Link>)
      }
      {!isAuth && (
        <div>
          <Link to="/login">
            <button className={styles.loginBtn}>
              Login <BsArrowRightShort size={20} />
            </button>
          </Link>
        </div>
      )}
      {isAuth && (
        <>
          <div className={styles.logoutContainer}>
            <div className={styles.navLinks}>
              <div className={styles.productsNav}>
                <NavLink to="/products">Products</NavLink>
              </div>
              <Link to="/carts" className={styles.cartIcon}>
                <div className={styles.cartCount}>{cartItems?.length}</div>
                <BsCart4 size={25} />
              </Link>
            </div>
            <button
              className={styles.userBtn}
              onClick={() => setIsUserOpened(!isUserOpened)}
            >
              <AiOutlineUser size={20} />
            </button>
            {isUserOpened && (
              <div className={styles.logoutBox}>
                {user?.email}
                <a className={styles.logoutText} onClick={handleLogout}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};
