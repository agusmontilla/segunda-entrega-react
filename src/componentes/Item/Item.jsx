import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div>
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{precio}</p>
        <p>{id}</p>
        <Link to={`/item/${id}`} > Ver Detalles </Link>
    </div>
  )
}

export default Item