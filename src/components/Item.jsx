import { useState } from 'react';
import { useValueContext } from '../contexts/CartContext';
import {ItemCount} from '../components/ItemCount'
import {Link} from 'react-router-dom';

function Item({item, initial}) {

    const [buying, setBuying] = useState(false);
    const [, setQuantity] = useState(0);
    const {addItem} = useValueContext();

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
        <div id={'itemCount_' + item.id} className="itemCount">
            <Link to={`/product/${item.id}`}>
                <h3 id={'itemCountTitle_' + item.id} className="itemCountTitle">{item.title}</h3>
                <img src={item.pictureUrl} id={'itemCountImage_' + item.id} className="itemCountImage" alt="product" />
                <p id={'itemCountDescription_' + item.id} className="itemCountDescription">{item.description}</p>
                <h2 id={'itemCountPrice_' + item.id} className="itemCountPrice">$ {item.price}</h2>
            </Link>            
            <div className="">
                { !buying ? <ItemCount onAdd={add} stock={item.stock} initial = {item.stock === 0 ? 0 : initial} /> : <> <Link to={'/cart'}><button type="button" className="">Terminar compra</button></Link> </>}
            </div> 
        </div>
    );
}

export {Item};