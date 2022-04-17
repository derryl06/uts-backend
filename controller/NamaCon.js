const { AmbilNamaModel } = require("../model/NamaModel");
const AmbilNama = async (req, res) => {
  const data = await AmbilNamaModel();
  res.json({ dataNama: data });
};

module.exports = { AmbilNama };
