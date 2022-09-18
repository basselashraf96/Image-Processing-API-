import express from "express";
import images from "./api/images";

const routes: express.Router = express.Router();

routes.use("/api/images", images);

routes.get(
  "/",
  (request: express.Request, response: express.Response): void => {
    response.send("hello from API");
  }
);

export default routes;
