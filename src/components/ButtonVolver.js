import React from 'react'
import { Link } from 'react-router-dom'

const ButtonVolver = () => {
  return (
    <div className="container">
    <button className="btn btn-warning nuevo-post d-block d-md-inline-block mt-8"> <Link to={'/'}>Volver</Link></button>
  </div>
  )
}

export default ButtonVolver
