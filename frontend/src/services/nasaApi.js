import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/apod`;

export const fetchApodData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da NASA', error);
    throw error;
  }
};
