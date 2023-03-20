import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchProducts } from '../../redux/products/actions'
import { addToCart } from '../../redux/cart/actions'
import styles from "./styles.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.productsReducer)

  useEffect(() => {
 dispatch(FetchProducts());

}, [])

function handleAddToCart(product){
  console.log("inside handle add")
  dispatch(addToCart(product));
}
   


  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {return (
        <div className={styles.product}>
        <div key={product.id}></div>
        <img className={styles.productImage} src={product.image_link} />
        <div> {product.name} </div>
        <div> {new Array(product.rating).fill("⭐").map((star) => (<span>{star}</span>) )}</div>
        <div> {product.price} $ </div>
        <div><button onClick={()=>handleAddToCart(product)}>Add to cart</button></div>
        </div>       
      )})}
    </div>
  )
}
export default Products;
