import { resize } from "../myFunctions";

describe("Test filename", (): void => {
  it("raises an error if any input is missing", async (): Promise<void> => {
    const error: null | string = await resize({
      filename: "",
      width: "200",
      height: "200"
    });
    expect(error).toBeNull();
  });

  it("raises an error if any input width or height is not a number", async (): Promise<void> => {
    const error: null | string = await resize({
      filename: "image",
      width: "string",
      height: "200"
    });
    expect(error).toBeNull();
  });
  it("raises an error if the width or height values entered is a negative number or 0", async (): Promise<void> => {
    const error: null | string = await resize({
      filename: "image",
      width: "200",
      height: "0"
    });
    expect(error).toBeNull();
  });
  it("raises an error if filename does not exist", async (): Promise<void> => {
    const error: null | string = await resize({
      filename: "image",
      width: "200",
      height: "200"
    });
    expect(error).toEqual("invalid file Name");
  });
});
