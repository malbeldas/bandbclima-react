import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../components/ItemDetail'
import {Loader} from '../components/Loader'
import { dataBase } from '../firebase/firebase'

const ItemDetailContainer = (id) => {

    const [item, setItem] = useState([])
    const [, setLoading] = useState([])

    useEffect(()=>{
        setLoading(true)
        
        const productsCollection = dataBase.collection('products')
        const item = productsCollection.doc(id.id)

        item.get().then((doc)=>{
            if(doc.empty){
                console.log('No Results')
                return;
            }
            console.log('Product Found')
            setItem({ id: doc.id, ...doc.data() })
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [id.id])
    
    /* useEffect(()=>{

        const retrasoRed = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products[id.id])
            }, 2000)
        })
    
        retrasoRed.then((res)=>{
            setItem(res)
        })
        
    }, [id.id]) */

    return (
        <div className="itemContainer">
            {item.length === 0 ? <Loader/> : <ItemDetail item={item} />}
        </div>
    )
}

export {ItemDetailContainer}