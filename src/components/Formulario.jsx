import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [numero, setNumero] = useState('');
  const [errores, setErrores] = useState({});

  const validarCampos = () => {
    const nuevosErrores = {};

    if (!nombre) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }
    if (!correo) {
      nuevosErrores.correo = 'El correo es obligatorio';
    }
    if (!edad) {
      nuevosErrores.edad = 'La edad es obligatoria';
    }
    if (!cargo) {
      nuevosErrores.cargo = 'El cargo es obligatorio';
    }
    if (!numero) {
      nuevosErrores.numero = 'El número es obligatorio';
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validarCampos();

    if (Object.keys(nuevosErrores).length === 0) {
      onAgregarColaborador({ nombre, correo, edad, cargo, numero });
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setNumero('');
    } else {
      setErrores(nuevosErrores);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <p className="text-danger">{errores.nombre}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <p className="text-danger">{errores.correo}</p>}
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          {errores.edad && <p className="text-danger">{errores.edad}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
          {errores.cargo && <p className="text-danger">{errores.cargo}</p>}
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Número"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          {errores.numero && <p className="text-danger">{errores.numero}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;
