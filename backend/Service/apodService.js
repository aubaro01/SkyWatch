const axios = require('axios');
const { NASA_APOD_URL, NASA_API_KEY } = require('../Config/config');

const getApodData = async () => {
  try {
    const response = await axios.get(NASA_APOD_URL, {
      params: {
        api_key: NASA_API_KEY
      },
      timeout: 10000 // 10 segundos de timeout
    });

    if (response.status !== 200) {
      throw new Error(`A API da NASA retornou erro: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('A requisição à API da NASA demorou mais de 10 segundos!');
    }
    throw new Error('Erro ao buscar dados da NASA: ' + error.message);
  }
};

module.exports = {
  getApodData
};
