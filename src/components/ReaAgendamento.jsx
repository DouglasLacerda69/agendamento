import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ReaAgendamento() {
  const [data, setData] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [turma, setTurma] = useState('');
  const [aulas, setAulas] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  const hoje = new Date();
  const seteDiasDepois = new Date();
  seteDiasDepois.setDate(hoje.getDate() + 7);

  const formatarData = (data) => data.toISOString().split('T')[0];

  const handleAgendar = () => {
    if (!data || !equipamento || !turma || aulas.length === 0) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    setCarregando(true);

    // Simulação de envio de dados
    setTimeout(() => {
      const dados = { data, equipamento, turma, aulas };
      console.log('Dados para agendamento:', dados);
      setMensagem('Agendamento realizado com sucesso!');
      setCarregando(false);

      // Opcional: limpar campos após sucesso
      setData('');
      setEquipamento('');
      setTurma('');
      setAulas([]);
    }, 1000);
  };

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  // Função para alternar seleção de aula
  const toggleAula = (aula) => {
    setAulas((prev) =>
      prev.includes(aula)
        ? prev.filter((a) => a !== aula)
        : [...prev, aula]
    );
  };

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
        <h2 style={tituloStyle}>Agendamento</h2>

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

        <div style={inputGroupStyle}>
          <label htmlFor="data" style={labelStyle}>Data</label>
          <input
            id="data"
            type="date"
            style={inputStyle}
            min={formatarData(hoje)}
            max={formatarData(seteDiasDepois)}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="equipamento" style={labelStyle}>Equipamento</label>
          <select
            id="equipamento"
            style={inputStyle}
            value={equipamento}
            onChange={(e) => setEquipamento(e.target.value)}
          >
            <option value="">Selecione o equipamento</option>
            {[
              'Caixa de som', 'Projetor', 'Laboratório de Biologia', 'Laboratório de Física',
              'Laboratório de Hardware', 'Laboratório de Informática', 'Laboratório de Línguas',
              'Laboratório de Matemática', 'Laboratório de Química', 'Refeitório', 'Quadra', 'Auditório'
            ].map((item, idx) => (
              <option key={idx} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="turma" style={labelStyle}>Turma</label>
          <select
            id="turma"
            style={inputStyle}
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
          >
            <option value="">Selecione a turma</option>
            {[1, 2, 3].flatMap(ano => (
              ['Administração', 'Agropecuária', 'Energias Renováveis', 'Finanças', 'Informática'].map((curso, idx) => {
                const nome = `${ano}º Ano - ${curso}`;
                return <option key={`${ano}-${idx}`} value={nome}>{nome}</option>;
              })
            ))}
          </select>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Aula(s)</label>
          <div style={aulasBtnContainerStyle}>
            {[...Array(9)].map((_, i) => {
              const aula = `${i + 1}ª aula`;
              const selecionada = aulas.includes(aula);
              return (
                <button
                  key={aula}
                  type="button"
                  onClick={() => toggleAula(aula)}
                  style={{
                    ...aulaBtnStyle,
                    backgroundColor: selecionada ? '#2e8b57' : '#f0fff4',
                    color: selecionada ? 'white' : '#2e8b57',
                    border: selecionada ? '2px solid #2e8b57' : '1px solid #8fd19e',
                  }}
                >
                  {aula}
                </button>
              );
            })}
          </div>
          {aulas.length > 0 && (
            <div style={{ marginTop: 8, fontSize: '0.95em', color: '#064273' }}>
              Selecionadas: {aulas.join(', ')}
            </div>
          )}
        </div>

        <button
          onClick={handleAgendar}
          style={{ ...botaoStyle, opacity: carregando ? 0.7 : 1 }}
          disabled={carregando}
        >
          {carregando ? 'Agendando...' : 'Agendar'}
        </button>

        {/* Botão para cancelar agendamento */}
        <button
          onClick={() => navigate('/cancelar-agendamento')}
          style={{ ...botaoStyle, marginTop: '16px', backgroundColor: '#c0392b' }}
        >
          Cancelar Agendamento
        </button>
      </div>
    </div>
  );
}

// Estilos organizados
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
  textAlign: 'center',
  marginBottom: '20px'
};

const inputGroupStyle = { marginBottom: '16px' };

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

const aulasBtnContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '8px'
};

const aulaBtnStyle = {
  padding: '8px 14px',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  outline: 'none',
  minWidth: '90px',
  transition: 'all 0.2s'
};

export default ReaAgendamento;

