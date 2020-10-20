import React, { useEffect } from 'react'
import Usuario from './Usuario'
import ButtonVolver from './ButtonVolver'
import { useSelector, useDispatch } from 'react-redux'
import { obtenerUsuariosAction } from '../actions/usuariosAction'

const Usuarios = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const cargarUsuarios = () => dispatch(obtenerUsuariosAction())
    cargarUsuarios()
  }, [])

  // Obteniendo estado
  const listadoUsuarios = useSelector(state => state.usuarios.usuarios)
  const error = useSelector(state => state.usuarios.error)
  const cargando = useSelector(state => state.usuarios.loading)
  return (
    <>
      <h2 className="text-center my-5">Listado de usuarios</h2>
      {error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error </p> : null}
      {cargando ? <p className="text-center">Cargando...</p> : null}
      {listadoUsuarios.length < 1 && (<p>No existen usuarios disponibles</p>)}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {listadoUsuarios.length > 0 &&  (
            listadoUsuarios.map(usuario => (<Usuario key={usuario.id} usuario={usuario} />))
          )}
        </tbody>
      </table>
      <ButtonVolver />
    </>
  )
}

export default Usuarios;