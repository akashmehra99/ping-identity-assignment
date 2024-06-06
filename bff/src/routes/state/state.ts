import { Router } from "express";

export const routerState = Router();

routerState.get("/", async (req, res) => {
  try {
    const data = await fetch(
      "https://api.covidtracking.com/v1/states/daily.json"
    );
    const dataToJson = await data.json();
    res.send(dataToJson);
  } catch (err) {
    res.send(err);
  }
});

routerState.get("/:stateId", (req, res) => {
  res.send(req.params.stateId);
});
