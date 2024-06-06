import express from "express";
import { routerCountry, routerState } from "./routes";

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use("/country", routerCountry);
app.use("/state", routerState);
