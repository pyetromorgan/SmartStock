export const login = async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    if (usuario === 'admin' && senha === '123456') {
      const token = Buffer.from(`admin-mock-id:${Date.now()}`).toString('base64');
      return res.json({
        token,
        user: {
          id: "mock-id-admin",
          nome: "Administrador",
          cargo: "Farmacêutico Chefe",
          iniciais: "AD"
        }
      });
    }
    return res.status(401).json({ mensagem: 'Usuário ou senha incorretos.' });
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno.', detalhe: error.message });
  }
};