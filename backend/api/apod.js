const { getApodData } = require('../Service/apodService');

module.exports = async (req, res) => {
  try {
    const data = await getApodData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro na rota /api/apod:', error.message);
    res.status(500).json({ error: error.message });
  }
};
