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

export const deletarProduto = async (req, res) => {
  try {
    const { id } = req.params;

   
    const existe = await prisma.produto.findUnique({ where: { id } });
    if (!existe) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    
    await prisma.$transaction([
      prisma.movimentacao.deleteMany({ where: { produto_id: id } }),
      prisma.reposicao.deleteMany({ where: { produto_id: id } }),
      prisma.itemPedido.deleteMany({ where: { produto_id: id } }),
      prisma.produto.delete({ where: { id } }),
    ]);

    return res.status(200).json({ message: "Medicamento excluído com sucesso!" });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao deletar produto",
      error: error.message,
      code: error.code
    });
  }
};