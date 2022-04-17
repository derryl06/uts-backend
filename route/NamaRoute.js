const { Router } = require("express");
const { AmbilNama } = require("../controller/NamaCon");
const route = Router();
route.get("/", (req, res) => {
  AmbilNama(req, res);
});

module.exports = route;
