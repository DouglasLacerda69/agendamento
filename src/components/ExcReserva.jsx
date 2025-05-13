function ExcReserva() {
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
          borderLeft: '8px solid #2e8b57',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#2e8b57',
            marginBottom: '20px'
          }}>Reserva Excluída</h2>
  
          <p style={{
            fontSize: '16px',
            color: '#064273'
          }}>
            Sua reserva foi excluída com sucesso.
          </p>
        </div>
      </div>
    );
  }
  
  export default ExcReserva;
  