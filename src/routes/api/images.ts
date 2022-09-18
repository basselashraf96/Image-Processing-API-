import express from "express";
import path from "path";
import { resize } from "../../myFunctions";
import { imagesThumbPath } from "../../myFunctions";
import { imagesFullPath } from "../../myFunctions";
import fs from "fs";

const images: express.Router = express.Router();
images.get(
  "/",
  async (
    request: express.Request,
    response: express.Response
  ): Promise<void | string> => {
    const thumbLocation: string = path.resolve(
      imagesThumbPath,
      `${request.query.filename}_${request.query.width}x${request.query.height}.jpg`
    );
    const originalPath: string = path.resolve(
      imagesFullPath,
      `${request.query.filename}.jpg`
    );
    if (
      !(request.query.filename && request.query.width && request.query.height)
    ) {
      response.send("you have to enter all parameters");
    }
    if (!fs.existsSync(originalPath)) {
      response.send("invalid file Name");
    }
    if (Number(request.query.width) <= 0) {
      response.send("you entered a negative width value");
    }
    if (Number(request.query.height) <= 0) {
      response.send("you entered a negative height value");
    }
    if (isNaN(Number(request.query.width)) == true) {
      response.send("you entered a non integer width number");
    }
    if (isNaN(Number(request.query.height)) == true) {
      response.send("you entered a non integer height number");
    }
    await resize(request.query);
    response.sendFile(thumbLocation);
  }
);

export default images;
