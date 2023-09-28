const axios = require("axios");
const urlConexion = "http://database:8004/Film";
module.exports = {
  list: async () => {
    const { data } = await axios.get(urlConexion);
    return data;
  },
  getOne: async (id) => {
    const { data } = await axios.get(`${urlConexion}/${id}`);
    return data;
  },
  create: async (character) => {
    const { data } = await axios.post(urlConexion, character);
    return data;
  },
  remove: async (id) => {
    const { data } = await axios.delete(`${urlConexion}/${id}`);
    return data;
  },
  update: async (id, film) => {
    const { data } = await axios.patch(`${urlConexion}/${id}`, film);
    return data;
  },
};
