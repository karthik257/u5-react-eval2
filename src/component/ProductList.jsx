import React from "react";
import styles from "./Product.module.css";


function ProductList({ product }) {
  return (
    <>
      {product.map((item) => (
        <div key={item.id} className={styles.divContainer}>
          <div>{item.title}</div>
          <div>₹ {item.cost}</div>
          <div>
            <img src={item.image} alt="pic" className={styles.imgsz} />
          </div>
          <div>{item.category}</div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
