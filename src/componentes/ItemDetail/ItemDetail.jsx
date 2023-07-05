import React from 'react'

export const ItemDetail = ({id, nombre, precio, imagen}) => {
  return (
    <div>
        <h3>{nombre}</h3>
        <h3>{precio}</h3>
        <h3>{id}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis atque temporibus eos. Soluta est error sint magnam, voluptatum, vitae, non totam iure dolor fugiat nostrum a adipisci illum porro aliquid.</p>
        <img src={imagen} alt="" />
    </div>
  )
}
