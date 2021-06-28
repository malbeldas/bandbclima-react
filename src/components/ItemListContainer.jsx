import React from 'react'
import {ItemList} from '../components/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {categoryId} = useParams();

    return (
        <>
            <ItemList category={categoryId}/>
        </>
    )
}

export {ItemListContainer}