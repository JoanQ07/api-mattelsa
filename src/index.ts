import "dotenv/config";

import routes from "./routes";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

// app.use("/", (req, res) => res.send("API 🟢"));
app.use(express.json());
app.use(cors());
app.use("/static", express.static("public"));
app.use(routes);
console.clear();

app.listen(PORT, () => {
  console.log(`🟢 API --> ${PORT}`);
});
