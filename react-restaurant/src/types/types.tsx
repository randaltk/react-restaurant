export type IRestaurant = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: false;
  url: string;
  review_count: number;
  categories: [
    {
      alias: string;
      title: string;
    }
  ];
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  transactions: [];
  location: {
    address1: string;
    address2: null;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: [];
  };
  phone: string;
  display_phone: string;
  distance: number;
};

export interface IRestaurantsResponse {
  businesses: IRestaurant[];
}
export type IBffResponse = {
  statusCode: number;
  headers: Object;
  body: string;
};

export type ICardProps = {
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
  url: string;
};
