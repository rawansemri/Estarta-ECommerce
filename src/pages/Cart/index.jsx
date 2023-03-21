import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { addToCart } from '../../redux/cart/actions'
import { removeFromCart } from '../../redux/cart/actions'


const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item));
  }

  const total = cartItems.reduce((total, current) => {
    return total + current?.price * current?.quantity;
  }, 0);

  return (
    <div className={styles.itemsContainer}>
      {cartItems.length > 0 ? (
        <>
          Total : ${total}
      {cartItems.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <img className={styles.itemImage} src={item.image_link} />
            <div className={styles.itemDesc}>
              <div> {item.name} </div>
              <div>$ {item.price} </div>
              <div className={styles.quantityContainer}>
                <button onClick={() => handleRemoveFromCart(item)}>-</button>
                <input
                  className={styles.quantity}
                  type="text"
                  value={item?.quantity}
                />
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </div>
          </div>
        );
      })} </>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
