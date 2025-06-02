import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaCadastroUsuario() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!usuario.trim() || !senha || !confirmarSenha) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem.');
      return;
    }

    setCarregando(true);

    // Simulação de envio
    setTimeout(() => {
      console.log('Usuário cadastrado:', { usuario, senha });
      setMensagem('Usuário cadastrado com sucesso!');
      setUsuario('');
      setSenha('');
      setConfirmarSenha('');
      setCarregando(false);
      setTimeout(() => {
        navigate('/TelaLogin');
      }, 800);
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
        <h2 style={tituloStyle}>Cadastro de Usuário</h2>

        {/* Mensagem de retorno */}
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

        {/* Nome de usuário */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="usuario" style={labelStyle}>Nome de Usuário</label>
          <input
            id="usuario"
            type="text"
            placeholder="Digite seu nome"
            style={inputStyle}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        {/* Senha */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="senha" style={labelStyle}>Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Crie uma senha"
            style={inputStyle}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* Confirmar senha */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="confirmarSenha" style={labelStyle}>Confirmar Senha</label>
          <input
            id="confirmarSenha"
            type="password"
            placeholder="Repita a senha"
            style={inputStyle}
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>

        {/* Botão de cadastrar */}
        <button
          onClick={handleCadastro}
          style={{
            ...botaoStyle,
            opacity: carregando ? 0.7 : 1
          }}
          disabled={carregando}
        >
          {carregando ? 'Cadastrando...' : 'Cadastrar'}
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

export default TelaCadastroUsuario;
