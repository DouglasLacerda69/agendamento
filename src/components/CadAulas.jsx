function CadAulas() {
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
        }}>Cadastro de Aula</h2>

        {/* Nome da aula ou disciplina */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Nome da Aula</label>
          <input
            type="text"
            placeholder="Ex: Matemática, História..."
            style={inputStyle}
          />
        </div>

        {/* Professor responsável */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Professor</label>
          <input
            type="text"
            placeholder="Nome do professor"
            style={inputStyle}
          />
        </div>

        {/* Número da aula (1 a 9) */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Número da Aula</label>
          <select style={inputStyle}>
            <option value="">Selecione</option>
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 1}>{`${i + 1}ª aula`}</option>
            ))}
          </select>
        </div>

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
          Cadastrar Aula
        </button>
      </div>
    </div>
  );
}

// Estilos reaproveitados
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

export default CadAulas;
  