function ItemDetail({id, title, description, price, pictureUrl}) {

    return (
        <div id={'itemDetail_' + id} className="itemDetail">
            <h3 id={'itemDetailTitle_' + id} className="itemDetailTitle">{title}</h3>
            <img src={pictureUrl} id={'itemDetailImage_' + id} className="itemDetailImage" alt="product" />
            <p id={'itemDetailDescription_' + id} className="itemDetailDescription">{description}</p>
            <h2 id={'itemDetailPrice_' + id} className="itemDetailPrice">$ {price}</h2>           
        </div>
    );
}

export {ItemDetail};