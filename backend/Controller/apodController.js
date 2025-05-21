const apodService = require('../Service/apodService');

const getApod = async (req, res) => {
  try {
    const data = await apodService.getApodData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getApod
};
