import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaEsqueciSenha() {
  const [usuario, setUsuario] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleSolicitacao = () => {
    if (!usuario.trim()) {
      setMensagem('Por favor, informe o nome de usuário.');
      return;
    }

    setCarregando(true);

    // Simula envio da solicitação
    setTimeout(() => {
      setMensagem('Solicitação enviada com sucesso! Aguarde o contato do administrador.');
      setUsuario('');
      setCarregando(false);
    }, 1000);
  };

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Botão de voltar */}
        <button
          onClick={() => navigate('/TelaLogin')}
          style={voltarStyle}
          aria-label="Voltar para o login"
        >
          ← Voltar
        </button>
        <h2 style={tituloStyle}>Recuperar Senha</h2>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="usuario" style={labelStyle}>Nome de Usuário</label>
          <input
            id="usuario"
            type="text"
            placeholder="Digite seu nome de usuário"
            style={inputStyle}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <p style={mensagemStyle}>
          Sua solicitação será enviada ao administrador. Em breve, ele irá alterar sua senha e informá-la a você.
        </p>

        {mensagem && (
          <div style={{
            marginBottom: '15px',
            color: mensagem.includes('sucesso') ? 'green' : 'red',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {mensagem}
          </div>
        )}

        <button
          onClick={handleSolicitacao}
          style={{ ...botaoStyle, opacity: carregando ? 0.7 : 1 }}
          disabled={carregando}
        >
          {carregando ? 'Enviando...' : 'Solicitar Nova Senha'}
        </button>
      </div>
    </div>
  );
}

// Estilos reutilizáveis
const containerStyle = {
  margin: 0,
  padding: 0,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: 'linear-gradient(to right, #d6f5d6, #cce6ff)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardStyle = {
  backgroundColor: '#f0fff4',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '40px',
  width: '360px',
  borderLeft: '8px solid #2e8b57'
};

const tituloStyle = {
  marginTop: 0,
  color: '#2e8b57',
  textAlign: 'center'
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  color: '#064273',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #8fd19e',
  borderRadius: '6px'
};

const mensagemStyle = {
  fontSize: '0.95em',
  color: '#333',
  marginBottom: '20px',
  textAlign: 'center'
};

const botaoStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#2e8b57',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const voltarStyle = {
  background: 'none',
  border: 'none',
  color: '#064273',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '1em',
  marginBottom: '10px',
  textAlign: 'left',
  padding: 0
};

export default TelaEsqueciSenha;