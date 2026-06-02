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

    const tabelas = Object.keys(prisma);
    const nomeMovimentacao = tabelas.find(t => t.toLowerCase().includes('movimentacao'));

    if (nomeMovimentacao && prisma[nomeMovimentacao].deleteMany) {
      await prisma[nomeMovimentacao].deleteMany({
        where: {
          OR: [
            { produtoId: id },
            { id_produto: id },
            { produto: id }
          ]
        }
      });
    }

    const produtoDeletado = await prisma.produto.delete({
      where: { id: id }
    });

    return res.status(200).json({ message: "Medicamento excluído com sucesso!", produtoDeletado });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao excluir o medicamento.", error: error.message });
  }
};