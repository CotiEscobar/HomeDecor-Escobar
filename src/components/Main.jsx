import ItemDetailContainer from './ItemDetailContainer.jsx';
import ItemListContainer from './ItemListContainer';
import ShoppingCart from './ShoppingCart.jsx';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout.jsx';

const Main = () => {
    return (
        <main>
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
        </main>
    )
}

export default Main;