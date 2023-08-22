const axios = require("axios");

exports.handler = async (event) => {
  try {
    const yelpApiKey = process.env.YELP_API_KEY;
    const url =
      "https://api.yelp.com/v3/businesses/search?term=food&location=San+Francisco&limit=50";

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
    });

    const responseBody = response.data;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Erro ao consultar a API do Yelp." }),
    };
  }
};
