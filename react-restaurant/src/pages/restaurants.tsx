import { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";

import api from "../services/client";

import { Spinner } from "../components/spinner";
import Card from "../components/card";
import {
  IBffResponse,
  IRestaurant,
  IRestaurantsResponse,
} from "../types/types";
import { AxiosResponse } from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurantsResponse>({
    businesses: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");

  const fetchRestaurants = () => {
    setIsLoading(true);

    api
      .get("")
      .then(function (res: AxiosResponse<IBffResponse>) {
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
      <div>
        <h2>Restaurants</h2>

        <div className={styles.homeWrapper}>
          <div className={styles.homeContent}>
            {restaurants?.businesses?.map((item: IRestaurant, i: number) => (
              <Card
                key={i}
                name={item.name}
                imageUrl={item.image_url}
                url={item.url}
                price={item.review_count}
                rating={item.rating}
              />
            ))}
          </div>

          {isLoading && <Spinner />}
          {err && <p>Error: {err}</p>}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
