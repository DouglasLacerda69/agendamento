function CadEquipamento() {
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
        width: '360px',
        borderLeft: '8px solid #2e8b57'
      }}>
        <h2 style={{
          marginTop: 0,
          color: '#2e8b57',
          textAlign: 'center'
        }}>Cadastro de Equipamento</h2>

        {/* Nome do equipamento */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Nome do Equipamento</label>
          <input
            type="text"
            placeholder="Ex: Projetor, Notebook..."
            style={inputStyle}
          />
        </div>

        {/* Número do equipamento */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Número do Equipamento</label>
          <input
            type="text"
            placeholder="Ex: 001, 002..."
            style={inputStyle}
          />
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
          Cadastrar Equipamento
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

export default CadEquipamento;
