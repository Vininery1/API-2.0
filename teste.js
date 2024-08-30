const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

// Configurações do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Simples com Swagger',
      version: '1.0.0',
      description: 'Uma API simples documentada com Swagger',
    },
  },
  apis: ['./index.js'], // Defina o caminho para onde os comentários JSDoc estão localizados
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem-vindo à API!' });
});


app.post('/echo', (req, res) => {
  res.status(200).json(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
