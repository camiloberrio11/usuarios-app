import React from 'react'

const Usuario = ({usuario}) => {
  const { id, name, email} = usuario
  return (
    <tr>
      <td>{id}</td>
      <td><span className="font-ewight-bold"> {name}</span></td>
      <td>{email}</td>
    </tr>
  )
}

export default Usuario