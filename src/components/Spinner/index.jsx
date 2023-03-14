import React from 'react'
import { ClipLoader } from 'react-spinners' 
import styles from "./styles.module.css";
export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <ClipLoader color="#53b7a3" size={100} />
      </div>
  )
}
