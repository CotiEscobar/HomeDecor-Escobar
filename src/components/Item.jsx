import { Link } from "react-router-dom";

const Item = ( {id, title, description, price, pictureUrl, category} ) => {

    return (
        <article key={id} className='item-box' id={id}>
            <img src={pictureUrl} alt={title} className='item-image'/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <i>{category}</i>
            <Link to={`/item/ ${id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item;