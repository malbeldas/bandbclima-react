function ItemDetail({item}) {

    return (
        <div id={'itemDetail_' + item.id} className="itemDetail">
            <h3 id={'itemDetailTitle_' + item.id} className="itemDetailTitle">{item.title}</h3>
            <img src={item.pictureUrl} id={'itemDetailImage_' + item.id} className="itemDetailImage" alt="product" />
            <p id={'itemDetailDescription_' + item.id} className="itemDetailDescription">{item.description}</p>
            <h2 id={'itemDetailPrice_' + item.id} className="itemDetailPrice">$ {item.price}</h2>           
        </div>
    );
}

export {ItemDetail};