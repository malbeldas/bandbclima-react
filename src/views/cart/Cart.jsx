import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Layout } from '../../components/layouts/Layout'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../components/CartItem'
import { Link } from 'react-router-dom'

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
                    <Link to={`/`}><button>Buy</button></Link>
                </Fragment> : 
                <Fragment>
                    <table className="cart-table">
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {cart.map(obj => <><CartItem item={obj.item} quantity={obj.quantity}/></>)}
                    </table>
                    <h2 className="total">Total {totalCharge()}</h2>
                    <button onClick={clearCart}>Vaciar carrito</button>
                    <Link to={`/cart-form`}><button>Terminar compra</button></Link>
                </Fragment>
                }
            </div>
        </Layout>
    )
}

export { Cart }