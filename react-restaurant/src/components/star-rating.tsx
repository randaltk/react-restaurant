import styles from "../styles/rating-star.module.scss";

const StarRating = (props: { rating: number }) => {
  const maxRating = 5;
  const filledStars = Math.floor(props.rating);
  const hasHalfStar = props.rating - filledStars >= 0.5;

  return (
    <div className={styles["star-rating"]}>
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={
            index < filledStars
              ? styles.star + " " + styles.filled
              : index === filledStars && hasHalfStar
              ? styles.star + " " + styles["half-filled"]
              : styles.star
          }
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
