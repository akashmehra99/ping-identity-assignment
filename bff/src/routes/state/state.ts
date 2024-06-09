import { Router } from "express";

export const routerState = Router();

routerState.get("/:stateId", async (req, res) => {
  const stateId = req.params.stateId;
  try {
    const data = await fetch(
      `https://api.covidtracking.com/v1/states/${stateId}/daily.json`
    );
    const dataToJson = await data.json();
    res.send(dataToJson.reverse());
  } catch (err) {
    res.send(err);
  }
});

routerState.get("/:stateId/current", async (req, res) => {
  const stateId = req.params.stateId;
  try {
    const data = await fetch(
      `https://api.covidtracking.com/v1/states/${stateId}/current.json`
    );
    const dataToJson = await data.json();
    res.send(dataToJson);
  } catch (err) {
    res.send(err);
  }
});
