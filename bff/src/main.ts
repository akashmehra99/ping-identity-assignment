import express from "express";
import { routerCountry, routerState, routerStateConstants } from "./routes";
var cors = require("cors");

const app = express();
const PORT = 4000;

const allowlist = ["http://localhost:3000"];
const corsOptionsDelegate = function (req: any, callback: any) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(cors(corsOptionsDelegate));
app.use("/country", routerCountry);
app.use("/states", routerState);
app.use("/state/map", routerStateConstants);
