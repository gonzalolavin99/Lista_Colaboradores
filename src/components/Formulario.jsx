import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [numero, setNumero] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => handleInputChange(e, setNombre)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
            value={correo}
            onChange={(e) => handleInputChange(e, setCorreo)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            value={edad}
            onChange={(e) => handleInputChange(e, setEdad)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => handleInputChange(e, setCargo)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Número"
            value={numero}
            onChange={(e) => handleInputChange(e, setNumero)}
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
