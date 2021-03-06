import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ product }) => {

    const [unidades, setUnidades] = useState(false);

    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(product, quantity)
        setUnidades(true)
    }
    return (
        <section>
            <img src={product.pictureUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {unidades ? 
            <div>
                <Link to='/cart'><button>Terminar compra</button></Link>
                <Link to='/'><button onClick={()=>setUnidades(0)}>Seguir comprando</button></Link>
            </div>  
            :
            <ItemCount 
            stock={5} 
            initial={1}
            onAdd={onAdd}
            />
            }
        </section>
    )
}

export default ItemDetail;



/*if (unidades === true) {
        <div>
           <button>Terminar compra</button>
           <button onClick={()=>setUnidades(0)}>Seguir comprando</button>
        </div>
    } else {
        <div>
            <ItemCount 
            stock={5} 
            initial={product >= 1 ? 1 : 0}
            onAdd={onAdd}
            />
        </div>
    }*/