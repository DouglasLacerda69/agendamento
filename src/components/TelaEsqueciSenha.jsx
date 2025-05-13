function TelaEsqueciSenha() {
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
        }}>Recuperar Senha</h2>

        {/* Nome de usuário */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Nome de Usuário</label>
          <input
            type="text"
            placeholder="Digite seu nome de usuário"
            style={inputStyle}
          />
        </div>

        {/* Mensagem de instrução */}
        <p style={{
          fontSize: '0.95em',
          color: '#333',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Sua solicitação será enviada ao administrador. Em breve, ele irá alterar sua senha e informá-la a você.
        </p>

        {/* Botão para enviar solicitação */}
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
          Solicitar Nova Senha
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

export default TelaEsqueciSenha;


  