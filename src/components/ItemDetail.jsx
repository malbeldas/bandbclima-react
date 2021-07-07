import { useState } from 'react'
import { Link } from 'react-router-dom';
import {ItemCount} from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

function ItemDetail({item}) {

    const [buying, setBuying] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);

    function add(cantidadAgregada) {

        if(cantidadAgregada === 0){
            alert(`Debes agregar al menos un producto al carrito`)
        }else{
            setBuying(true);
            setQuantity(cantidadAgregada);
            addItem(item, cantidadAgregada);
    
            alert(`Se han agregado ${cantidadAgregada} del producto ${item.title}`)
        }
    }

    return (
        <>
        <div className="itemDetails">
            <h3 id={'itemDetailTitle_' + item.id}>{item.title}</h3>
            <img className="itemDetailImage" src={item.pictureUrl} id={'itemDetailImage_' + item.id} alt="product" />
        </div>
        <div className="itemDetails">
            <p id={'itemDetailDescription_' + item.id}>{item.description}</p>
            <h2 id={'itemDetailPrice_' + item.id}>$ {item.price}</h2>
            <div className="">
                { !buying ? <ItemCount onAdd={add} stock={item.stock} initial = {item.stock === 0 ? 0 : 1} /> : <> <Link to={'/cart'}><button type="button" className="">Terminar compra</button></Link> </>}
            </div>           
        </div>
        </>
    );
}

export {ItemDetail};