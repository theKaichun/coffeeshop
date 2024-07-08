import express from "express";
import axios from "axios";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/api/reviews", async (req, res) => {
  try {
    const placeId = "ChIJDaWk9KirQjQRsoIv7XzFqEc";
    const apiKey = "AIzaSyDCrUfSfLJCfkGEwpq3o4dSHz9F8ew5I5M";

    if (!placeId || !apiKey) {
      throw new Error("Missing environment variables");
    }

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
    console.log(JSON.stringify(response.data, null, 2));

    if (!response.data.result || !response.data.result.reviews) {
      throw new Error("No reviews found");
    }

    res.json(response.data.result.reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
