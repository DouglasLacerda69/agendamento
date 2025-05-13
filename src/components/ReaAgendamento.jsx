function ReaAgendamento() {
    return (
      <div style={{
        margin: 0,
        padding: 0,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #d6f5d6, #cce6ff)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#f0fff4',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          padding: '40px',
          width: '340px',
          borderLeft: '8px solid #2e8b57'
        }}>
          <h2 style={{
            marginTop: 0,
            color: '#2e8b57',
            textAlign: 'center'
          }}>Agendamento</h2>
  
          {/* Nome do solicitante */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Nome</label>
            <input type="text" placeholder="Digite seu nome" style={inputStyle} />
          </div>
  
          {/* Data do agendamento */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Data</label>
            <input type="date" style={inputStyle} />
          </div>
  
          {/* Equipamento */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Equipamento</label>
            <input type="text" placeholder="Ex: Notebook, Projetor..." style={inputStyle} />
          </div>
  
          {/* Aula de 1 a 9 */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Aula</label>
            <select style={inputStyle}>
              <option value="">Selecione a aula</option>
              {[...Array(9)].map((_, i) => (
                <option key={i} value={i + 1}>{`${i + 1}ª aula`}</option>
              ))}
            </select>
          </div>
  
          {/* Botão */}
          <button style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#2e8b57',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Agendar
          </button>
        </div>
      </div>
    );
  }
  
  // Estilos reutilizáveis
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
  
  export default ReaAgendamento;
  
  