import styles from "../styles/card.module.scss";
import StarRating from "./star-rating";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card(props: any) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.mobileFlexView}>
          <div className={styles.imageWrapper}>
            <LazyLoadImage
              src={props.imageUrl}
              width={300}
              height={120}
              className="img"
              alt="Image Alt"
              effect="blur"
            />
          </div>
          <div className={styles.mobileFlexViewColumn}>
            <div className={styles.container}>
              <h4>
                <b className={styles.cardName}>{props.name}</b>
              </h4>
            </div>

            <StarRating rating={props.rating} />

            <p>{props.price}</p>

            <button className={styles.btnDefault}>
              <a href={props.url} rel="noreferrer" target="_blank">
                VIEW
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
