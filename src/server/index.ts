import path from "path";
import express from "express";
import dotenv from "dotenv";

import renderApp from "./middlewares/renderApp";

dotenv.config();
const app = express();

const { PORT } = process.env;

console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("*", renderApp());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
