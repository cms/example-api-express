import express from "express";
import routes from "./api/v1/routes/routes";
import config from "config";
import bodyParser from "body-parser";

const { token } = config.get("localserver");
const app = express();
app.disable("x-powered-by");
app.set("config-token", token);

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/v1/cbs/", routes);

// Catch 404 and forward to error handler
app.use((_req, res, next) => {
  res.status(404);
  res.send("404: Not Found");
  next();
});

// Error handler
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).render("error", {
    message: err.message
  });
});

export default app;
