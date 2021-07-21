import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout'
import firebase from 'firebase';
import '@firebase/firestore'
import { CartContext } from '../../contexts/CartContext';
import { dataBase } from '../../firebase/firebase';

const Form = () => {

    const {cart} = useContext(CartContext)
    const [total, setTotal] = useState()
    const [order, setOrderId] = useState()
    const [userInfo, setUserInfo] = useState()
    const [, setLoading] = useState([])

    useEffect(()=>{
        setLoading(true)

        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        }

        console.log(newOrder)
        
        /* const orders = dataBase.collection('orders');

        orders.add(newOrder).then(({id}) => {
            setOrderId(id);
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        }) */
    }, [])
    
    const addUser = () => {
        
    }

    const totalCharge = () => {
        let charges = (cart.map(obj => (obj.item.price * obj.quantity)))
        let total = charges.reduce((acc, cur) => acc + cur)
        return setTotal(total)
    }

    return (
        <Layout>
            <form className="cart-form">
                <label for="name">Name</label>
                <input className="cart-input" type="text" id="name" name="name"/>
                
                <label for="phone">Phone</label>
                <input className="cart-input" type="number" id="phone" name="phone"/>
                
                <label for="email">Email</label>
                <input className="cart-input" type="email" id="email" name="email"/>
                
                <input type="button" value="Buy"/>
            </form> 
        </Layout>
    )
}

export { Form }