import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/reviews", async (req, res) => {
  try {
    const placeId = "ChIJOwg_06VPwokRYv534QaPC8g";
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

    res.json(response.data.result.reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    res.status(500).send("Error fetching reviews");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
