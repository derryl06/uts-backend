const express = require("express");
const App = express();
const NamaRoute = require("./route/NamaRoute");

App.use("/nama", NamaRoute);
App.listen(3200, () => {
  console.log("server lancar");
});
