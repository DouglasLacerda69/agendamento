import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CancelAg() {
  const [equipamento, setEquipamento] = useState('');
  const [motivo, setMotivo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleCancelar = () => {
    if (!equipamento.trim() || !motivo.trim()) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    setCarregando(true);

    // Simulação de requisição para cancelar agendamento
    setTimeout(() => {
      console.log('Cancelando agendamento:', { equipamento, motivo });
      setMensagem('Agendamento cancelado com sucesso!');
      setEquipamento('');
      setMotivo('');
      setCarregando(false);
      setTimeout(() => {
        navigate('/excluir-reserva');
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
          onClick={() => navigate('/agendamento')}
          style={voltarStyle}
          aria-label="Voltar para agendamento"
        >
          ← Voltar
        </button>
        <h2 style={tituloStyle}>Cancelar Agendamento</h2>

        {mensagem && (
          <div
            style={{
              marginBottom: '15px',
              color: mensagem.includes('sucesso') ? 'green' : 'red',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {mensagem}
          </div>
        )}

        {/* Campo: Nome do equipamento */}
        <div style={campoStyle}>
          <label htmlFor="equipamento" style={labelStyle}>
            Número do Equipamento
          </label>
          <input
            id="equipamento"
            type="text"
            value={equipamento}
            onChange={(e) => setEquipamento(e.target.value)}
            placeholder="Digite o nome do equipamento"
            style={inputStyle}
            aria-label="Nome do Equipamento"
          />
        </div>

        {/* Campo: Motivo do cancelamento */}
        <div style={campoStyle}>
          <label htmlFor="motivo" style={labelStyle}>
            Motivo do Cancelamento
          </label>
          <textarea
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Descreva o motivo"
            rows={4}
            style={{ ...inputStyle, resize: 'none' }}
            aria-label="Motivo do Cancelamento"
          />
        </div>

        {/* Botão de cancelar */}
        <button
          onClick={handleCancelar}
          style={{ ...botaoStyle, opacity: carregando ? 0.7 : 1 }}
          disabled={carregando}
        >
          {carregando ? 'Cancelando...' : 'Cancelar Agendamento'}
        </button>
      </div>
    </div>
  );
}

// 🎨 Estilos reutilizáveis
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
  borderLeft: '8px solid #2e8b57'
};

const tituloStyle = {
  marginTop: 0,
  color: '#2e8b57',
  textAlign: 'center'
};

const campoStyle = {
  marginBottom: '20px'
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

export default CancelAg;


