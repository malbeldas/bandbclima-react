import {ItemCount} from '../components/ItemCount'
import {Link} from 'react-router-dom';

function Item({stock, initial, id, title, description, price, pictureUrl}) {

    return (
        <div id={'itemCount_' + id} className="itemCount">
            <Link to={`/product/${id}`}>
                <h3 id={'itemCountTitle_' + id} className="itemCountTitle">{title}</h3>
                <img src={pictureUrl} id={'itemCountImage_' + id} className="itemCountImage" alt="product" />
                <p id={'itemCountDescription_' + id} className="itemCountDescription">{description}</p>
                <h2 id={'itemCountPrice_' + id} className="itemCountPrice">$ {price}</h2>
            </Link>            
            <ItemCount stock={stock} initial={initial}/>
        </div>
    );
}

export {Item};