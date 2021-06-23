import React from 'react'
import {Item} from '../components/Item'

let products = [{
    id: 0,
    title: 'Aire Acondicionado 1',
    description: 'Aire acondicionado BGH split frío/calor 3000 frigorías blanco 220V BS35WCCR',
    price: 55999,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_694117-MLA40282485103_122019-O.webp',
    stock: 5
},
{
    id: 1,
    title: 'Aire Acondicionado 2',
    description: 'Aire acondicionado Hyundai split inverter frío/calor 2924 frigorías blanco 220V HY6INV-3200FC',
    price: 48590,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_997089-MLA40009455563_122019-O.webp',
    stock: 0
},
{
    id: 2,
    title: 'Aire Acondicionado 3',
    description: 'Aire acondicionado Midea split inverter frío/calor 4506 frigorías blanco 220V MSABIC-18H-01F',
    price: 79999,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_790830-MLA41186141828_032020-O.webp',
    stock: 4
}]

const ItemList = () => {

    const items = products.map(({id, title, description, price, pictureUrl, stock})=>(
            <Item initial='1' id={id} title={title} description={description} price={price} pictureUrl={pictureUrl} stock={stock} />
        ))

    return (
        <div className="itemRow">
            {items}
        </div>
    )
}

export {ItemList}