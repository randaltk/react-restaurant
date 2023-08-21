import styles from "../styles/rating-star.module.scss";
import { useState } from "react";
export default function StarRating(props: any) {
  return (
    <div className="star-rating">
      {new Array(props.rating).fill(null).map((star, index) => (
        <i className={props.rating ? styles.on : styles.off}>&#9733;</i>
      ))}
    </div>
  );
}
