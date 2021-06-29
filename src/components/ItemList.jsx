import React from 'react'
import {Item} from '../components/Item'

const ItemList = ({items}) => {

    return (
        <div className="itemRow">
            {items.length !== 0 ? items.map(item=><Item key={item.id} item={item} initial='1'/>) : <h1>Cargando...</h1>}
        </div>
    )
}

export {ItemList}