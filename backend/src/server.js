import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import movimentacaoRoutes from './routes/movimentacaoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/produtos', produtoRoutes);
app.use('/movimentacoes', movimentacaoRoutes);

const PORT = 8890;
app.listen(PORT, () => {
  console.log(`Smart Stock Backend rodando em http://localhost:${PORT}`);
});