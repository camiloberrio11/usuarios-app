import React, { Fragment } from 'react'
import Usuario from './Usuario'
import ButtonVolver from './ButtonVolver'

const Usuarios = () => {
  const listadoUsuarios = [
    {
      "id": 27,
      "name": "Inder Khatri",
      "email": "inder_khatri@gislason-reichel.biz",
      "gender": "Female",
      "status": "Active",
      "created_at": "2020-10-20T03:50:04.664+05:30",
      "updated_at": "2020-10-20T03:50:04.664+05:30"
    },
    {
      "id": 28,
      "name": "Aatmaj Chattopadhyay",
      "email": "aatmaj_chattopadhyay@bernier.com",
      "gender": "Female",
      "status": "Active",
      "created_at": "2020-10-20T03:50:04.683+05:30",
      "updated_at": "2020-10-20T03:50:04.683+05:30"
    },
    {
      "id": 30,
      "name": "Vishwamitra Nair Esqi.",
      "email": "esq_vishwamitra_nair@berge.com",
      "gender": "Female",
      "status": "Inactive",
      "created_at": "2020-10-20T03:50:04.732+05:30",
      "updated_at": "2020-10-20T15:41:04.059+05:30"
    },
  ]
  return (
    <>
      <h2 className="text-center my-5">Listado de usuarios</h2>
      {/* {error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error </p> : null }
    {cargando ? <p className="text-center">Cargando...</p>: null } */}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {listadoUsuarios.length === 0 ? 'No hay usuarios disponibles' : (
            listadoUsuarios.map(usuario => (<Usuario key={usuario.id} usuario={usuario} />))
          )}
        </tbody>
      </table>
      <ButtonVolver />
    </>
  )
}

export default Usuarios