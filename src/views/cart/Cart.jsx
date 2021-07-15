import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Layout } from '../../components/layouts/Layout'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../components/CartItem'

const Cart = () => {

    const {cart, clearCart} = useContext(CartContext)

    let emptyCart;
    cart.length === 0 ? emptyCart = true : emptyCart = false

    const totalCharge = () => {
        if(!emptyCart){
            let charges = (cart.map(obj => (obj.item.price * obj.quantity)))
            return charges.reduce((acc, cur) => acc + cur)
        }
    }

    return (
        <Layout>
            <div className="main">
                <h1>Cart</h1>
                <hr/>
                {
                emptyCart ? 
                <Fragment>
                    <h2>The cart is empty</h2>
                </Fragment> : 
                <Fragment>
                    {cart.map(obj => <><CartItem item={obj.item} quantity={obj.quantity}/><hr/></>)}
                    <h2 className="total">Total {totalCharge()}</h2>
                    <button onClick={clearCart}>Vaciar carrito</button>
                    <button>Terminar compra</button>
                </Fragment>
                }
            </div>
        </Layout>
    )
}

export { Cart }