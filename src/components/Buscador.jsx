import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [consulta, setConsulta] = useState('');

  const handleConsultaChange = (e) => {
    setConsulta(e.target.value);
  };

  const buscarColaboradores = () => {
    onBuscar(consulta);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaboradores"
        value={consulta}
        onChange={handleConsultaChange}
      />
      <button className='buscar' onClick={buscarColaboradores}>Buscar</button>
    </div>
  );
};

export default Buscador;
