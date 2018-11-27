import config from "config";
import app from "./app";

const { port = 3000, host = "0.0.0.0" } = config.get("localserver");
app.listen(port, host);
console.log(`Listening on ${host}:${port}`);
