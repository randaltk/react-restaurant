import { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";

import api from "../services/client";

import { Spinner } from "../components/spinner";
import Card from "../components/card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");

  const fetchRestaurants = () => {
    setIsLoading(true);
    api
      .get("")
      .then(function (res: any) {
        return res;
      })
      .then(function (res) {
        const result = JSON.parse(res.data.body);
        return result;
      })
      .then(function (result) {
        return setRestaurants(result);
      })
      .catch(() => setError("Ooops there was an error"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <div className={styles.homeWrapper}>
        <h2>Restaurants</h2>

        <div className={styles.homeContent}>
          {restaurants?.businesses?.map((item: any, i: any) => (
            <Card
              index={i}
              name={item.name}
              imageUrl={item.image_url}
              url={item.url}
              price={item.review_count}
              rating={5}
            />
          ))}
          {isLoading && <Spinner />}
          {err && <p>Error: {err}</p>}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
