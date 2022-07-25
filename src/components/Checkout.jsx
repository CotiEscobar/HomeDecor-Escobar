import { db } from '../utils/firebase';
import { addDoc, collection} from 'firebase/firestore';
import { useState } from 'react';

const Checkout = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')


    const handleBuy = () => {
        const collectionVentas = collection(db,'ventas');
        
        const ventaData = {
            buyer : {
                name: 'hola',
                phone: 234567,
                email: 'test@test.com'
            },
            items : [{id:1, title: 'test'}],
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

    const handleSubmit = (e) => {
        e.preventDefault()

        const usuario = {name, tel, email}
        console.log(usuario)
    }


    const handleTelChange = (e) => {
        setTel(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
        
    }
    return (
        <div>
            <h1>Checkout</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleNameChange} type='text' id='nombre' placeholder='Nombre y Apellido' />
                </div>
                <div>
                    <input onChange={handleEmailChange} type='email' id='email' placeholder='Correo Electrónico'/>
                </div>
                <div>
                    <input onChange={handleTelChange} type='number' id='telefono' placeholder='Telefono'/>
                </div>
                
                <button>Finalizar Compra</button>
            </form>
            <button onClick={handleBuy}>Guardar</button>
        </div>
    )
}
export default Checkout;