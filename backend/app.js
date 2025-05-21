// app.js
require('dotenv').config();  // Carrega as variáveis do arquivo .env
const express = require('express');
const cors = require('cors');
const apodRoutes = require('./Routes/apodRoute');

const app = express();
const PORT = 5000;

// Middleware para permitir requisições do frontend
app.use(cors());

// Usando as rotas definidas
app.use('/api', apodRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
