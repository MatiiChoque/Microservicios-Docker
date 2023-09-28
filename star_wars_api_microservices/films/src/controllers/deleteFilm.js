const data = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await data.remove(id);
  response(res, 200, film);
};
