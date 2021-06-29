import React, {useState, useEffect} from 'react'
import {ItemList} from '../components/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {categoryId} = useParams();
    const [catalogo, setCatalogo] = useState([])

    const products = [{
        id: 0,
        title: 'Aire Acondicionado 1',
        description: 'Aire acondicionado BGH split frío/calor 3000 frigorías blanco 220V BS35WCCR',
        price: 55999,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_694117-MLA40282485103_122019-O.webp',
        stock: 5,
        category_id:0,
    },
    {
        id: 1,
        title: 'Aire Acondicionado 2',
        description: 'Aire acondicionado Hyundai split inverter frío/calor 2924 frigorías blanco 220V HY6INV-3200FC',
        price: 48590,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_997089-MLA40009455563_122019-O.webp',
        stock: 0,
        category_id:0,
    },
    {
        id: 2,
        title: 'Aire Acondicionado 3',
        description: 'Aire acondicionado Midea split inverter frío/calor 4506 frigorías blanco 220V MSABIC-18H-01F',
        price: 79999,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_790830-MLA41186141828_032020-O.webp',
        stock: 4,
        category_id:0,
    },
    {
        id: 3,
        title: 'Calefaccion 1',
        description: 'Calefactor Central Conductos Goodman Gmp 125-25.750 Kcal/h',
        price: 55999,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_752668-MLA42425595510_062020-O.webp',
        stock: 5,
        category_id:1,
    },
    {
        id: 4,
        title: 'Calefaccion 2',
        description: 'Calefactor Central Conductos Goodman Gmp 125-20.750 Kcal/h',
        price: 48590,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_752668-MLA42425595510_062020-O.webp',
        stock: 0,
        category_id:1,
    },
    {
        id: 5,
        title: 'Calefaccion 3',
        description: 'Calefactor Central Conductos Goodman Gmp 125-28.750 Kcal/h',
        price: 79999,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_752668-MLA42425595510_062020-O.webp',
        stock: 4,
        category_id:1,
    },
    {
        id: 6,
        title: 'Termotanque 1',
        description: 'Termotanque eléctrico Señorial Zafiro TESZ-65 blanco 55L 230V',
        price: 55999,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_979289-MLA42828721677_072020-O.webp',
        stock: 5,
        category_id:2,
    },
    {
        id: 7,
        title: 'Termotanque 2',
        description: 'Termotanque eléctrico Señorial Zafiro TESZ-65 blanco 45L 230V',
        price: 48590,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_979289-MLA42828721677_072020-O.webp',
        stock: 0,
        category_id:2,
    },
    {
        id: 8,
        title: 'Termotanque 3',
        description: 'Termotanque eléctrico Señorial Zafiro TESZ-65 blanco 65L 230V',
        price: 79999,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_979289-MLA42828721677_072020-O.webp',
        stock: 4,
        category_id:2,
    }]
    
    useEffect(()=>{
        
        const retrasoRed = new Promise((res, rej)=>{

            let newProducts;
    
            if(categoryId !== undefined){
                newProducts = products.filter((product)=>{
                    return product.category_id === Number(categoryId)
                })
            }else{
                newProducts = products
            }
            

            setTimeout(()=>{  
                res(newProducts)
            }, 2000)
        })
        
        
        retrasoRed.then((res)=>{
            setCatalogo(res)
            res.map(({id})=>(
                document.getElementById('itemCount_' + id).className = "itemCountFadeIn"
            ))
        })
        
    }, [categoryId])

    return (
        <>
            <ItemList items={catalogo} category={categoryId}/>
        </>
    )
}

export {ItemListContainer}