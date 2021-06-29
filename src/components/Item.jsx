import {ItemCount} from '../components/ItemCount'
import {Link} from 'react-router-dom';

function Item({item, initial}) {

    return (
        <div id={'itemCount_' + item.id} className="itemCount">
            <Link to={`/product/${item.id}`}>
                <h3 id={'itemCountTitle_' + item.id} className="itemCountTitle">{item.title}</h3>
                <img src={item.pictureUrl} id={'itemCountImage_' + item.id} className="itemCountImage" alt="product" />
                <p id={'itemCountDescription_' + item.id} className="itemCountDescription">{item.description}</p>
                <h2 id={'itemCountPrice_' + item.id} className="itemCountPrice">$ {item.price}</h2>
            </Link>            
            <ItemCount stock={item.stock} initial={initial}/>
        </div>
    );
}

export {Item};