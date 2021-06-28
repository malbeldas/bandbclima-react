import React from 'react'
import { Layout } from '../../components/layouts/Layout'
import { ItemDetailContainer } from '../../components/ItemDetailContainer'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const {id} = useParams();

    return (
        <Layout>
            <div className="main">
                <ItemDetailContainer id={id}/>
            </div>
        </Layout>
    )
}

export { ProductDetail }