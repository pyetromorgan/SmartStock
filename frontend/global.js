const API_URL = "https://smartstock-239f.onrender.com"; 
//const API_URL = "http://localhost:8890";

document.addEventListener("DOMContentLoaded", () => {
  verificarSessao();
  configurarEventosGlobais();
  carregarMedicamentosNosModais();
  verificarAlertasGlobais(); 
});

function verificarSessao() {
  const token = localStorage.getItem('token');
  const dadosUser = localStorage.getItem('user');
  
  if (!token && !window.location.pathname.includes('login.html')) {
    window.location.href = 'login.html';
    return;
  }

  if (dadosUser) {
    const user = JSON.parse(dadosUser);
    const av = document.getElementById('user-av');
    const name = document.getElementById('user-name');
    const role = document.getElementById('user-role');
    
    if (av) av.textContent = user.iniciais || "??";
    if (name) name.textContent = user.nome;
    if (role) role.textContent = user.cargo;
  }
}

function configurarEventosGlobais() {
  document.getElementById('btn-trigger-entrada')?.addEventListener('click', () => openModal('modal-entrada'));
  document.getElementById('btn-trigger-saida')?.addEventListener('click', () => openModal('modal-saida'));
  
  document.getElementById('btn-toggle-alerts')?.addEventListener('click', () => {
    const panel = document.getElementById('alert-panel');
    if (panel) {
      panel.classList.toggle('open');
      if (panel.classList.contains('open')) {
        verificarAlertasGlobais(); 
      }
    }
  });

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  document.getElementById('btn-logout')?.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
  });

  document.getElementById('btn-confirmar-entrada')?.addEventListener('click', executarEntrada);
  document.getElementById('btn-confirmar-saida')?.addEventListener('click', executarSaida);
}

function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function toast(mensagem, tipo = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const elemento = document.createElement('div');
  elemento.className = `toast ${tipo}`;
  elemento.innerHTML = message || mensagem;
  container.appendChild(elemento);
  setTimeout(() => elemento.remove(), 3500);
}

async function verificarAlertasGlobais() {
  const badge = document.querySelector('.noti-badge');
  let panel = document.getElementById('alert-panel');
  if (!badge) return;

  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'alert-panel';
    panel.style.position = 'absolute';
    panel.style.right = '2rem';
    panel.style.top = '70px';
    panel.style.width = '340px';
    panel.style.background = 'var(--card)';
    panel.style.border = '1px solid var(--border)';
    panel.style.borderRadius = 'var(--radius)';
    panel.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    panel.style.zIndex = '9999';
    panel.style.display = 'none'; 
    panel.style.flexDirection = 'column';
    panel.style.maxHeight = '450px';
    
  
    const wrapper = document.querySelector('.main-wrapper') || document.body;
    wrapper.appendChild(panel);
  }


  if (panel.classList.contains('open')) {
    panel.style.display = 'flex';
  } else {
    panel.style.display = 'none';
  }

  try {
    const res = await fetch(`${API_URL}/produtos`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    const produtos = await res.json();
    
    let alertas = [];
    const hoje = new Date();
    const trintaDiasLista = new Date();
    trintaDiasLista.setDate(hoje.getDate() + 30); 

    produtos.forEach(p => {
      if (p.qtd_estoque <= 5) {
        alertas.push({
          tipo: 'critico',
          msg: `<strong>${p.nome}</strong> está com estoque crítico (${p.qtd_estoque} ${p.unidade_medida || 'un'}).`
        });
      }

      if (p.dataValidade) {
        const dataVal = new Date(p.dataValidade);
        if (dataVal <= hoje) {
          alertas.push({ 
            tipo: 'vencido', 
            msg: `🚨 <strong>${p.nome}</strong> está com o lote VENCIDO!` 
          });
        } else if (dataVal <= trintaDiasLista) {
          alertas.push({ 
            tipo: 'aviso', 
            msg: `⏳ <strong>${p.nome}</strong> vence em breve (${dataVal.toLocaleDateString('pt-BR')}).` 
          });
        }
      }
    });

    if (alertas.length > 0) {
      badge.textContent = alertas.length;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }

    if (panel) {
      panel.innerHTML = `
        <div style="padding: 1.25rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
          <h3 style="font-family: var(--serif); color: var(--text); margin: 0; font-size: 1.2rem;">Notificações de Risco</h3>
          <button onclick="document.getElementById('alert-panel').classList.remove('open'); document.getElementById('alert-panel').style.display = 'none';" style="background:none; border:none; color:var(--muted); cursor:pointer; font-size:1.5rem; line-height: 1;">&times;</button>
        </div>
        <div style="padding: 1rem; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 0.75rem;" id="alert-list-container"></div>
      `;

      const listContainer = document.getElementById('alert-list-container');
      if (alertas.length === 0) {
        listContainer.innerHTML = `<p style="color: var(--muted); text-align: center; margin-top: 2rem; font-size: 0.9rem;">Nenhum alerta pendente. Estoque seguro! ✨</p>`;
        return;
      }

      alertas.forEach(alerta => {
        const item = document.createElement('div');
        let corBorda = 'var(--amber)';
        let corBg = 'rgba(244, 196, 48, 0.05)';
        
        if (alerta.tipo === 'critico' || alerta.tipo === 'vencido') {
          corBorda = 'var(--red)';
          corBg = 'rgba(229, 57, 53, 0.05)';
        }

        item.style = `border-left: 4px solid ${corBorda}; background: ${corBg}; padding: 0.85rem 1rem; border-radius: 4px; font-size: 0.85rem; line-height: 1.4; color: var(--text);`;
        item.innerHTML = alerta.msg;
        listContainer.appendChild(item);
      });
    }

  } catch (e) {
    console.error("Erro ao processar painel de alertas globais", e);
  }
}

async function executarEntrada() {
  const dados = {
    produtoId: document.getElementById('me-prod').value,
    quantidade: parseFloat(document.getElementById('me-qtd').value),
    tipo: "ENTRADA",
    dataValidade: document.getElementById('me-val').value ? new Date(document.getElementById('me-val').value).toISOString() : null,
    usuario: JSON.parse(localStorage.getItem('user'))?.nome || "Sistema"
  };

  if (!dados.produtoId || !dados.quantidade) {
    toast("Preencha os campos obrigatórios! ⚠️", "red");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/movimentacoes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(dados)
    });
    if (res.ok) {
      toast("Entrada registrada! ✅", "green");
      closeModal('modal-entrada');
      
      if(window.location.pathname.includes('dashboard.html')) {
        window.location.reload();
      } else {
        verificarAlertasGlobais();
      }
    }
  } catch (err) { toast("Erro ao registrar entrada", "red"); }
}

async function executarSaida() {
  const dados = {
    produtoId: document.getElementById('ms-prod').value,
    quantidade: parseFloat(document.getElementById('ms-qtd').value),
    tipo: "SAIDA",
    usuario: JSON.parse(localStorage.getItem('user'))?.nome || "Sistema"
  };

  if (!dados.produtoId || !dados.quantidade) {
    toast("Preencha os campos obrigatórios! ⚠️", "red");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/movimentacoes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(dados)
    });
    if (res.ok) {
      toast("Saída registrada! 📤", "green");
      closeModal('modal-saida');
      
      if(window.location.pathname.includes('dashboard.html')) {
        window.location.reload();
      } else {
        verificarAlertasGlobais();
      }
    }
  } catch (err) { toast("Erro ao registrar saída", "red"); }
}

async function carregarMedicamentosNosModais() {
  const me = document.getElementById('me-prod');
  const ms = document.getElementById('ms-prod');
  if (!me || !ms) return;

  try {
    const res = await fetch(`${API_URL}/produtos`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    const produtos = await res.json();
    
    let options = '<option value="">Selecione...</option>';
    produtos.forEach(p => { options += `<option value="${p.id}">${p.nome}</option>`; });
    me.innerHTML = options;
    ms.innerHTML = options;
  } catch(e) { console.error("Erro nos modais de movimentação", e); }
}