import ItemDetailContainer from './ItemDetailContainer.jsx';
import ItemListContainer from './ItemListContainer';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <main>
        {/*<ItemListContainer 
        greeting='Bienvenidos a mi tienda!' />
    <ItemDetailContainer />*/}
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
        </main>
    )
}

export default Main;