import "dotenv/config";

import routes from "./routes";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

// app.use("/", (req, res) => res.send("API 🟢"));
app.use(express.json());
app.use(cors());

// ejm: http://localhost:3000/static/1-img-01.webp
app.use("/static", express.static("public/images"));

app.use(routes);
console.clear();

app.listen(PORT, () => {
  console.log(`🟢 API --> ${PORT}`);
});
