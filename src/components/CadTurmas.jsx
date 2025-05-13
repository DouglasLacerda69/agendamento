import React from 'react';

function CadTurmas() {
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
        }}>Cadastro de Turma</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            color: '#064273',
            fontWeight: 'bold'
          }}>Nome da Turma</label>
          <input
            type="text"
            placeholder="Ex: 3º Ano A"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #8fd19e',
              borderRadius: '6px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            color: '#064273',
            fontWeight: 'bold'
          }}>Aula</label>
          <select
            defaultValue=""
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #8fd19e',
              borderRadius: '6px'
            }}
          >
            <option value="" disabled>Selecione a aula</option>
            <option>1ª Aula</option>
            <option>2ª Aula</option>
            <option>3ª Aula</option>
            <option>4ª Aula</option>
            <option>5ª Aula</option>
            <option>6ª Aula</option>
            <option>7ª Aula</option>
            <option>8ª Aula</option>
            <option>9ª Aula</option>
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
          Cadastrar Turma
        </button>
      </div>
    </div>
  );
}

export default CadTurmas;

  