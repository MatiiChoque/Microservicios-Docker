const axios = require("axios");

const urlConexion = "http://database:8004/Character";

module.exports = {
  list: async () => {
    const results = await axios.get(urlConexion);
    return results.data;
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
  update: async (id) => {
    const { data } = await axios.update(`${urlConexion}/${id}`);
    return data;
  },
};
