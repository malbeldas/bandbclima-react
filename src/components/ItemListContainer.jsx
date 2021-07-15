import React, {useState, useEffect} from 'react'
import {ItemList} from '../components/ItemList'
import { useParams } from 'react-router-dom'
import { dataBase } from '../firebase/firebase'

const ItemListContainer = () => {

    const {categoryId} = useParams();
    const [catalogo, setCatalogo] = useState([])
    const [, setLoading] = useState([])

    useEffect(()=>{
        setLoading(true)
        
        const productsCollection = dataBase.collection('products')

        if(categoryId !== undefined){
            productsCollection.where('category_id', '==', Number(categoryId)).get().then((querySnapshot)=>{
                if(querySnapshot.empty){
                    console.log('No Results')
                }
                setCatalogo(querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                }))
            }).catch((error)=>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        }else{
            productsCollection.get().then((querySnapshot)=>{
                if(querySnapshot.size === 0){
                    console.log('No Results')
                }
                setCatalogo(querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                }))
            }).catch((error)=>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        }

    }, [categoryId])

    return (
        <>
            <ItemList items={catalogo} category={categoryId}/>
        </>
    )
}

export {ItemListContainer}