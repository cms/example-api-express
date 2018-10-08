import { Router } from "express";
import validationsController from "./controllers/validations";

const routes = Router();

/**
 * GET home page
 */
routes.get("/", (req, res) => {
  res.json({ message: "CBS API v1" });
});

/**
 * GET /validations
 *
 * 	Información para enrutamiento de web services.
 *
 */
routes.get("/validations", validationsController);

export default routes;
