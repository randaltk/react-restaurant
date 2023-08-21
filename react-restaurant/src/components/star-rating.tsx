import styles from "../styles/rating-star.module.scss";

export default function StarRating(props: any) {
  return (
    <div className="star-rating">
      {new Array(props.rating).fill(null).map(() => (
        <i className={props.rating ? styles.on : styles.off}>&#9733;</i>
      ))}
    </div>
  );
}
