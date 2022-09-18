import supertest from "supertest";
import app from "../index";
import { promises as fs } from "fs";
import path from "path";
import { imagesThumbPath } from "../myFunctions";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe("Test responses from endpoints", (): void => {
  describe("endpoint: /", (): void => {
    it("gets /", async (): Promise<void> => {
      const response: supertest.Response = await request.get("/");

      expect(response.status).toBe(200);
    });
  });

  describe("endpoint: /basel", (): void => {
    it("returns 404 for invalid endpoint", async (): Promise<void> => {
      const response: supertest.Response = await request.get("/basel");

      expect(response.status).toBe(404);
    });
  });
  it("tests actual endpoint api with correct url and parameters /api/images?filename=icelandwaterfall&width=250&height=250", async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      "/api/images?filename=icelandwaterfall&width=250&height=250"
    );
    expect(response.status).toBe(200);
  });
});
afterAll(async (): Promise<void> => {
  const thumbPath: string = path.resolve(
    imagesThumbPath,
    "icelandwaterfall_250x250.jpg"
  );

  await fs.access(thumbPath);
  fs.unlink(thumbPath);
});
