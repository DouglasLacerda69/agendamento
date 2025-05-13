function dashboard() {
    return (
      <div style={{
        margin: 0,
        padding: 0,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #d6f5d6, #cce6ff)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Barra superior */}
        <header style={{
          backgroundColor: '#2e8b57',
          padding: '20px',
          color: 'white',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          Painel de Controle
        </header>
  
        {/* Conteúdo principal */}
        <main style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            width: '100%',
            maxWidth: '1000px'
          }}>
            {/* Card 1 */}
            <div style={{
              backgroundColor: '#f0fff4',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderLeft: '6px solid #2e8b57'
            }}>
              <h3 style={{ color: '#064273', marginBottom: '10px' }}>Agendamentos</h3>
              <p style={{ color: '#333' }}>Visualize e gerencie os agendamentos ativos.</p>
            </div>
  
            {/* Card 2 */}
            <div style={{
              backgroundColor: '#f0fff4',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderLeft: '6px solid #2e8b57'
            }}>
              <h3 style={{ color: '#064273', marginBottom: '10px' }}>Equipamentos</h3>
              <p style={{ color: '#333' }}>Consulte o cadastro de equipamentos disponíveis.</p>
            </div>
  
            {/* Card 3 */}
            <div style={{
              backgroundColor: '#f0fff4',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderLeft: '6px solid #2e8b57'
            }}>
              <h3 style={{ color: '#064273', marginBottom: '10px' }}>Turmas</h3>
              <p style={{ color: '#333' }}>Veja quais turmas estão cadastradas no sistema.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default dashboard;
  