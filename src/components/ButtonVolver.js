import React from 'react'
import { Link } from 'react-router-dom'

const ButtonVolver = () => {
  return (
    <div className="container">
    <a className="btn btn-warning nuevo-post d-block d-md-inline-block mt-8"> <Link to={'/'}>Volver</Link></a>
  </div>
  )
}

export default ButtonVolver
