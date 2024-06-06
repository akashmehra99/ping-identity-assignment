import { Router } from "express";

export const routerCountry = Router();

routerCountry.get("/", async (req, res) => {
  try {
    const data = await fetch("https://api.covidtracking.com/v1/us/daily.json");
    const dataToJson = await data.json();
    res.send(dataToJson);
  } catch (err) {
    res.send(err);
  }
});
