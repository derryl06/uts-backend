const { readFileSync } = require("fs");
const AmbilNamaModel = async () => {
  const nama = await readFileSync("model/Nama.json", "utf-8");
  return JSON.parse(nama);
};

module.exports = { AmbilNamaModel };
