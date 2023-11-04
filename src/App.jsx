import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Listado from './components/Listado';
import { BaseColaboradores } from './js/colaboradores';
import Buscador from './components/Buscador';
import "./App.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [colorAlerta, setColorAlerta] = useState('');
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([]);

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre &&
      nuevoColaborador.correo &&
      nuevoColaborador.edad &&
      nuevoColaborador.cargo &&
      nuevoColaborador.numero
    ) {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensaje('Colaborador agregado exitosamente');
      setColorAlerta('success');
    } else {
      setMensaje('Por favor, complete todos los campos');
      setColorAlerta('danger');
    }
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setMensaje('Colaborador eliminado exitosamente');
    setColorAlerta('success');
  };

  const filtrarColaboradores = (busqueda) => {
    if (busqueda) {
      const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
        return (
          colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
          colaborador.edad.toString().includes(busqueda) ||
          colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
          colaborador.telefono.toString().includes(busqueda)
        );
      });

      setColaboradoresFiltrados(colaboradoresFiltrados);
    } else {
      setColaboradoresFiltrados(colaboradores); 
    }
  };

  return (
    <div className="container">
      <h1>Lista de Colaboradores</h1>
      <Formulario onAgregarColaborador={agregarColaborador} />
      <Alert mensaje={mensaje} color={colorAlerta} />
      <Buscador onBuscar={filtrarColaboradores} />
      <Listado colaboradores={colaboradoresFiltrados.length > 0 ? colaboradoresFiltrados : colaboradores} onEliminarColaborador={eliminarColaborador} />
    </div>
  );
};

export default App;
