import {ItemCount} from './ItemCount'

function ItemDetail({item}) {

    return (
        <>
        <div className="itemDetails">
            <h3 id={'itemDetailTitle_' + item.id}>{item.title}</h3>
            <img className="itemDetailImage" src={item.pictureUrl} id={'itemDetailImage_' + item.id} alt="product" />
        </div>
        <div className="itemDetails">
            <p id={'itemDetailDescription_' + item.id}>{item.description}</p>
            <h2 id={'itemDetailPrice_' + item.id}>$ {item.price}</h2>
            <ItemCount stock={item.stock} initial='1'/>           
        </div>
        </>
    );
}

export {ItemDetail};