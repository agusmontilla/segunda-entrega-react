import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProductos, getCategoriaProductos} from '../../asyncmock';
import Itemlist from '../ItemList/ItemList';
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
  const [productos, setProductos]= useState([])

  const {idCategoria}= useParams()

    useEffect(()=>{
        const funcion = idCategoria ? getCategoriaProductos: getProductos

        funcion(idCategoria)
            .then(res => setProductos(res))
    }, [idCategoria])

  return (
    <>

    <h2 className='texto'>{props.greeting}</h2>
    <ItemList productos={productos}/>
    
    </>
  )
}

export default ItemListContainer