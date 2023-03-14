import React from 'react'
import { ClipLoader } from 'react-spinners' 
export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}><ClipLoader color="#53b7a3" size={50} /></div>
  )
}
