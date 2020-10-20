import React from 'react'
import { Link } from 'react-router-dom'

const ButtonGetUsuario = () => {
  return (
    <div className="container btn-action">
    <a className="btn btn-danger nuevo-post d-block d-md-inline-block mt-8"> <Link to={'/usuarios'}>Obtener usuarios</Link></a>
    <hr />
    </div>
  )
}

export default ButtonGetUsuario
