import { Router } from "express";
import { statesMap } from "../../constants/states.constants";

export const routerStateConstants = Router();

routerStateConstants.get("/", async (req, res) => {
  try {
    res.send(statesMap);
  } catch (err) {
    res.send(err);
  }
});
