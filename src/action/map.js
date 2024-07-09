"use server";

const axios = require("axios");

export async function getMapReviews() {
  const placeId = "ChIJDaWk9KirQjQRsoIv7XzFqEc";
  const apiKey = "AIzaSyDCrUfSfLJCfkGEwpq3o4dSHz9F8ew5I5M";

  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/place/details/json",
    {
      params: {
        place_id: placeId,
        fields: "reviews",
        key: apiKey,
      },
    }
  );

  if (!response.data.result || !response.data.result.reviews) {
    throw new Error("No reviews found");
  }

  return response.data.result.reviews;
}
