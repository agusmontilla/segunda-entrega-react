import Item from "../Item/Item"

const Itemlist = ({productos}) => {
  return (
    <div>

      {productos.map(prod => <Item key={prod.id} {...prod} /> )}
      
    </div>
  )
}

export default Itemlist