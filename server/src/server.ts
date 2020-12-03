import express from 'express'; // Micro framework
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Route params: identifica o alvo da ação
// /route/:params

// Query params: paginação, ordenação, filtros
// request.query