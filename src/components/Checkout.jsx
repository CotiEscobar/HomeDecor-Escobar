import { db } from '../utils/firebase';
import { addDoc, collection} from 'firebase/firestore';

const Checkout = () => {

    const handleBuy = () => {
        const collectionVentas = collection(db,"ventas");
        
        const ventaData = {
            buyer : {
                name: "hola",
                phone: 234567,
                email: "test@test.com"
            },
            items : [{id:1, title: "test"}],
            date : null,
            total: null
        }

        const consulta = addDoc(collectionVentas, ventaData)
        consulta
            .then(resultado=>{
                console.log(resultado);
            })
            .catch(error=>{
                console.log(error);
            })

    }

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleBuy}>Guardar</button>
        </div>
    )
}
export default Checkout;