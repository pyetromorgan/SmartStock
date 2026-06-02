import { Router } from 'express';
import { criarProduto, listarProdutos, deletarProduto } from '../controllers/produtoController.js';

const router = Router();

router.post('/', criarProduto);
router.get('/', listarProdutos);
router.delete('/:id', deletarProduto); 

export default router;