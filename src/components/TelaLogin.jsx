import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!usuario.trim() || !senha.trim()) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    setCarregando(true);

    // Simulando verificação assíncrona
    setTimeout(() => {
      if (usuario === 'admin' && senha === '1234') {
        setMensagem('Login realizado com sucesso!');
        setTimeout(() => {
          navigate('/agendamento');
        }, 800);
      } else {
        setMensagem('Usuário ou senha inválidos.');
      }
      setCarregando(false);
    }, 1000);
  };

  // Autoesmaecer mensagem após 3 segundos
  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  // Ajuste global para ocupar todo o fundo
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.documentElement.style.height = '100vh';
  }, []);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={tituloStyle}>Login</h2>

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
            placeholder="Digite sua senha"
            style={inputStyle}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* Feedback */}
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

        {/* Esqueci minha senha */}
        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            onClick={() => navigate('/esqueci-senha')}
            style={linkStyle}
          >
            Esqueci minha senha
          </button>
        </div>

        {/* Botão de login */}
        <button
          onClick={handleLogin}
          style={{ ...botaoStyle, opacity: carregando ? 0.7 : 1 }}
          disabled={carregando}
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>

        {/* Link para cadastro */}
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span style={{ fontSize: '0.9em', color: '#333' }}>Não tem conta?</span>
          <button
            onClick={() => navigate('/cadastro')}
            style={{ ...linkStyle, marginLeft: '6px' }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

// Estilos reaproveitados
const containerStyle = {
  minHeight: '100vh',
  width: '100%',
  background: 'linear-gradient(to right, #d6f5d6, #cce6ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};


const cardStyle = {
  backgroundColor: '#f0fff4',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '40px',
  width: '900px',
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

const linkStyle = {
  background: 'none',
  border: 'none',
  color: '#064273',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '0.9em'
};

export default TelaLogin;
