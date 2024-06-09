import { Router } from "express";

export const routerCountry = Router();

routerCountry.get("/", async (req, res) => {
  try {
    const data = await fetch("https://api.covidtracking.com/v1/us/daily.json");
    const dataToJson = await data.json();
    res.send(dataToJson.reverse());
  } catch (err) {
    res.send(err);
  }
});

routerCountry.get("/current", async (req, res) => {
  try {
    const data = await fetch(
      "https://api.covidtracking.com/v1/us/current.json"
    );
    const dataToJson = await data.json();
    res.send(dataToJson[0]);
  } catch (err) {
    res.send(err);
  }
});
