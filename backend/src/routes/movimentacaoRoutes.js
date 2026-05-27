import { Router } from 'express';
import { criarMovimentacao, listarMovimentacoes } from '../controllers/movimentacaoController.js';

const router = Router();

router.post('/', criarMovimentacao);
router.get('/', listarMovimentacoes);

export default router;