# Smart Stock - Sistema Inteligente de Gestão de Inventário

O **Smart Stock** é uma aplicação web moderna desenvolvida para automatizar, monitorar e otimizar o controle de estoque e o fluxo de medicamentos e insumos em farmácias e unidades de saúde. 

A plataforma resolve problemas críticos de gestão, como a falta de visibilidade sobre níveis críticos de produtos, desperdício por vencimento e falhas no rastreamento de entradas e saídas de mercadorias.

---

## Demonstração em Produção (Link Netlify)

A interface de usuário final da aplicação está publicada e pronta para uso através do Netlify. Você pode acessar pelo link abaixo:

**[Acesse o Smart Stock no Netlify](https://stalwart-vacherin-b0fa7f.netlify.app/login)** ---

## Principais Funcionalidades

### Painel de Controle (Dashboard)
* Visualização em tempo real de métricas críticas do sistema.
* Gráficos e indicadores de volume total de itens e alertas visuais.

### Catálogo e Cadastro de Medicamentos
* Cadastro completo de fármacos contendo Nome, Marca/Laboratório, Preço Unitário e Unidade de Medida.
* Listagem inteligente em formato de grade (cards) para fácil leitura e gerenciamento.
* **Exclusão Segura:** Mecanismo inteligente no banco de dados que impede a existência de dados órfãos, limpando os históricos vinculados antes de remover o produto definitivamente.

### Movimentação de Estoque Automatizada
* Painéis integrados para lançamentos rápidos de Entradas e Saídas de produtos.
* Atualização automática e imediata do saldo em estoque baseado no tipo de movimentação realizada.
* Alertas visuais automáticos para medicamentos com estoque crítico (menor ou igual a 5 unidades).

---

## Arquitetura do Repositório

O projeto está dividido em módulos bem definidos para separar a interface do usuário das regras de negócio do servidor:

```text
├── Back-end/                  # Módulo do Servidor (API REST)
│   ├── src/
│   │   ├── controllers/      # Regras de negócio e transações com o banco (Prisma ORM)
│   │   └── routes/           # Endpoints e roteamento de requisições Express
│   └── README.md             # Documentação do desenvolvedor do Back-end
│
├── Docs/                      # Documentação de projeto e artefatos
│   └── Memorial Smart Stock.pdf
│
└── Front-end/                 # Interface gráfica hospedada no Netlify
    ├── dashboard.html
    ├── relatorios.html
    ├── cadastro.html
    └── global.js