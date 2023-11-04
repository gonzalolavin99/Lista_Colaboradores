import React from 'react'
import Table from 'react-bootstrap/Table';
import { BaseColaboradores } from '../js/colaboradores';


const Listado = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {BaseColaboradores.map((colaborador,index)=>(
        <tr  key={colaborador.id}>
          <td>{index+1}</td>
          <td>{colaborador.nombre}</td>
          <td>{colaborador.correo}</td>
          <td>{colaborador.edad}</td>
          <td>{colaborador.cargo}</td>
          <td>{colaborador.telefono}</td>
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Listado