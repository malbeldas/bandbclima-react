import React from 'react'
import { Layout } from '../../components/layouts/Layout'
import ItemCount from '../../components/ItemCount'

const Home = () => {
    return (
        <Layout>
            <div className="main">
                <h1>Home</h1>

                <div className="itemRow">
                    <ItemCount stock='5' initial='1'/>
                    <ItemCount stock='0' initial='1'/>
                    <ItemCount stock='4' initial='1'/>
                </div>
            </div>
        </Layout>
    )
}

export { Home }