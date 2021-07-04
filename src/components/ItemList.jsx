import React from 'react'
import {Item} from '../components/Item'
import {Loader} from '../components/Loader'

const ItemList = ({items}) => {

    return (
        <div className="itemRow">
            {items.length !== 0 ? items.map(item=><Item key={item.id} item={item} initial = {item.stock === 0 ? 0 : 1}/>) : <Loader/>}
        </div>
    )
}

export {ItemList}