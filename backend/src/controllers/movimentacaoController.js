import prisma from '../config/prisma.js';

export const criarMovimentacao = async (req, res) => {
  const { produtoId, quantidade, tipo, usuario } = req.body;

  try {
    const qtdNum = parseFloat(quantidade);

    const novaMov = await prisma.movimentacao.create({
      data: {
        produto_id: produtoId,
        qtd_movimentacao: qtdNum,
        tipo: tipo,
        data: new Date(),
        usuario: usuario || 'Sistema'
      }
    });

  
    const valorAjuste = tipo.toUpperCase() === "ENTRADA" ? qtdNum : -qtdNum;
    
    await prisma.produto.update({
      where: { id: produtoId },
      data: {
        qtd_estoque: { increment: valorAjuste }
      }
    });

    return res.status(201).json(novaMov);
  } catch (error) {
    console.error("Erro ao criar movimentação:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const listarMovimentacoes = async (req, res) => {
  try {
    const movimentacoes = await prisma.movimentacao.findMany({
      include: {
        produto: {
          select: {
            nome: true
          }
        }
      },
      orderBy: {
        data: 'desc' 
      }
    });
    return res.json(movimentacoes);
  } catch (error) {
    console.error("Erro ao listar movimentações:", error);
    return res.status(500).json({ error: error.message });
  }
};