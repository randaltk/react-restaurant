import styles from "../styles/card.module.scss";
import StarRating from "./star-rating";

export default function Card(props: any) {
  return (
    <>
      <div className={styles.card}>
        <img src={props.imageUrl} alt="Restaurant"></img>
        <div className={styles.container}>
          <h4>
            <b className={styles.cardName}>{props.name}</b>
          </h4>
        </div>

        <StarRating rating={props.rating} />

        <p>{props.price}</p>

        <a href={props.url} target="_blank">
          View
        </a>
      </div>
    </>
  );
}
