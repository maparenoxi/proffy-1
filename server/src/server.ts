import express from 'express';

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Route params: identifica o alvo da ação
// /route/:params

// Query params: paginação, ordenação, filtros
// request.query

app.get('/', (request, response) => {
    return response.json({ message: "Hello World" });
});

app.listen(3333);