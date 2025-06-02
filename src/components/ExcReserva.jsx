import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Necessário: React Router instalado

function ExcReserva() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Garante que o usuário veja a mensagem no topo
  }, []);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Botão de voltar */}
        <button
          onClick={() => navigate('/agendamento')}
          style={voltarStyle}
          aria-label="Voltar para agendamento"
        >
          ← Voltar
        </button>
        <h2 style={tituloStyle}>Reserva Excluída</h2>

        <p style={textoStyle}>
          Sua reserva foi excluída com sucesso.
        </p>

        <button
          style={botaoStyle}
          onClick={() => navigate('/')}
          aria-label="Voltar para a página inicial"
        >
          Voltar à Página Inicial
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
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardStyle = {
  backgroundColor: '#f0fff4',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '40px',
  maxWidth: '600px',
  width: '90%',
  borderLeft: '8px solid #2e8b57',
  textAlign: 'center',
  animation: 'fadeIn 0.5s ease-in-out'
};

const tituloStyle = {
  color: '#2e8b57',
  marginBottom: '20px',
  fontSize: '28px'
};

const textoStyle = {
  fontSize: '18px',
  color: '#064273'
};

const botaoStyle = {
  marginTop: '30px',
  padding: '10px 20px',
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

export default ExcReserva;

