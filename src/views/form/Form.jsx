import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout'
import firebase from 'firebase';
import '@firebase/firestore'
import { CartContext } from '../../contexts/CartContext';
import { dataBase } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

const Form = () => {
    const { cart } = useContext(CartContext);   
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState(''); 
    const [comentarioPedido, setComentarioPedido] = useState('');   
    const [orderId, setOrderId] = useState(null);
    const [sent, setSent] = useState(false);  

    function onNameChange(event) {setName(event.target.value)}
    function onPhoneChange(event) {setPhone(event.target.value)}  
    function onEmailChange(event) {setEmail(event.target.value)}
    function onEmailConfirmChange(event) {setEmailConfirm(event.target.value)}

    async function createOrder() {
        setSent(true);
        
        //Creo mis objetos buyer e items
        const user = { name, phone, email }
        const cart = cart.map( p => ({ id: p.id, name: p.name, quantity: p.quantity, subtotal: p.price * p.quantity }) )
        //const total = cart.map( p => p.price * p.quantity )
        let sum;
        const total = cart.map(elem => sum = 0 + elem);
        
        //Creo nueva orden en colección de Firestore
        const orders = dataBase.collection('ordenes');
        const newOrder = { user: user,
                           cart: cart,
                           date: firebase.firestore.Timestamp.fromDate(new Date()),
                           total: total}
        
        //Obtengo el ID de la order
        try {
        const {id} = await orders.add(newOrder);
        setOrderId(id); //Success
        //cleanList();
        } catch(err) {
            console.log('Error'); //Error
        }
    }    

    if(orderId) {
        return <>
                <div className="container">
                    <h2>Compra realizada exitosamente.<br/>El ID de tu orden es {orderId}</h2>
                    <Link className="btn btn-outline-danger m-3" to={`/`}>Volver a Home</Link>                  
                </div>   
            </>
    }

    return <Layout>
            <div className="container">
                <div className="">
                    <h4>Completá el formulario con tus datos para confirmar la compra.</h4>
                </div>
                
                <div className="">
                    <form>
                        <label>Nombre</label>
                        <input value={name} type="text" id="name" placeholder="Nombre" onChange={onNameChange}/>
                        <label>Telefono</label>
                        <input value={phone} type="number" id="phone" placeholder="Telefono" onChange={onPhoneChange}/>
                        <label>Email</label>
                        <input value={email} type="email" id="email" placeholder="Email" onChange={onEmailChange}/>
                        <label>Confirm Email</label>
                        <input value={emailConfirm} type="email" id="emailconfirm" placeholder="Confirmar Email" onChange={onEmailConfirmChange}/>                                              
                        <hr/>
                        <button className="" type="submit" disabled={ !name || !phone || !email || (emailConfirm !== email) || sent } onClick={createOrder} style={{ marginBottom: '30px'}}>Confirmar</button>
                    </form>
                </div>
            </div>                        
        </Layout>
}

export {Form};