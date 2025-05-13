function TelaLogin() {
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
        }}>Login</h2>

        {/* Nome de usuário */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Nome de Usuário</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            style={inputStyle}
          />
        </div>

        {/* Senha */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            style={inputStyle}
          />
        </div>

        {/* Esqueci minha senha */}
        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            onClick={() => alert('Redirecionar para recuperação de senha')}
            style={{
              background: 'none',
              border: 'none',
              color: '#064273',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
          >
            Esqueci minha senha
          </button>
        </div>

        {/* Botão de login */}
        <button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#2e8b57',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '10px'
        }}>
          Entrar
        </button>

        {/* Link para cadastro */}
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.9em', color: '#333' }}>Não tem conta?</span>
          <button
            onClick={() => alert('Redirecionar para tela de cadastro')}
            style={{
              marginLeft: '6px',
              background: 'none',
              border: 'none',
              color: '#064273',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
          >
            Cadastrar
          </button>
        </div>
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

export default TelaLogin;

  