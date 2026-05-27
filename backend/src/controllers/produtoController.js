import prisma from '../config/prisma.js';

export const criarProduto = async (req, res) => {
  try {
    const novoProduto = await prisma.produto.create({
      data: req.body
    });
    return res.status(201).json(novoProduto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const listarProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    return res.json(produtos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};