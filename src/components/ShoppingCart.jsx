import { Link } from "react-router-dom";

const ShoppingCart = () => {
    return (
        <div>
            <h5>Shopping Cart</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio delectus placeat culpa optio rerum accusantium sequi sint repellat, tempora labore assumenda blanditiis aut in voluptas, eius consequatur modi est ipsa.</p>
            <Link to='/checkout'>Comprar</Link>
        </div>
    )
}
export default ShoppingCart;