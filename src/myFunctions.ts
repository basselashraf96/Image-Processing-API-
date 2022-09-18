import path from "path";
import sharp from "sharp";
import fs from "fs";

export const imagesFullPath = path.resolve(__dirname, "../assets/images/full");
export const imagesThumbPath = path.resolve(
  __dirname,
  "../assets/images/thumb"
);

interface inputs {
  filename?: string;
  width?: string;
  height?: string;
}
export const resize = async (input: inputs): Promise<null | string> => {
  if (!(input.filename && input.width && input.height)) {
    return null; // Nothing to do
  }
  if (isNaN(Number(input.width)) == true || Number(input.width) <= 0) {
    return null;
  }
  if (isNaN(Number(input.height)) == true || Number(input.height) <= 0) {
    return null;
  }

  const originalLocation: string = path.resolve(
    imagesFullPath,
    `${input.filename}.jpg`
  );
  if (!fs.existsSync(originalLocation)) {
    return "invalid file Name";
  }

  const thumbLocation: string = path.resolve(
    imagesThumbPath,
    `${input.filename}_${input.width}x${input.height}.jpg`
  );

  if (!fs.existsSync(thumbLocation)) {
    try {
      await sharp(originalLocation)
        .resize(Number(input.width), Number(input.height))
        .toFile(thumbLocation);
      console.log("image resized");
      return "sharp resized image";
    } catch (error) {
      console.log(error);
      throw new Error("Error occurred while processing image");
    }
  } else {
    console.log("File Exists");
    return "data already resized from sharp";
  }
};
