const axios = require('axios');
const { NASA_APOD_URL, NASA_API_KEY } = require('../Config/config');

const getApodData = async () => {
  try {
    const response = await axios.get(NASA_APOD_URL, {
      params: {
        api_key: NASA_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados da NASA: ' + error.message);
  }
};

module.exports = {
  getApodData
};
