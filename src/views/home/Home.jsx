import React from 'react'
import { Layout } from '../../components/layouts/Layout'
import { ItemListContainer } from '../../components/ItemListContainer'

const Home = () => {
    return (
        <Layout>
            <div className="main">
                <h1>Home</h1>
                <ItemListContainer/>
            </div>
        </Layout>
    )
}

export { Home }