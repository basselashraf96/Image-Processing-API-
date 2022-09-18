import express from "express";
import routes from "./routes/index";

const app = express();
const port = 4000;

app.use(routes);

app.listen(port, () => {
  console.log(`litening at port ${port}`);
});
export default app;
