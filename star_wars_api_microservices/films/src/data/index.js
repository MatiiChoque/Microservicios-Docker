const films = require("./films.json");

module.exports = {
  list: async () => {
    return films;
  },
  create: async () => {
    throw Error("Hay un error en la BDD creando un film");
  },
};
