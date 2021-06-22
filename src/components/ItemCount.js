import product from '../img/product.jpg';
import {useState} from 'react'

function ItemCount({stock, initial}) {

    if(stock <= 0){
        initial = 0
    }

    const [number, setNumber] = useState(initial)

    const operation = (operator) => {
        let newResult
            
            switch (operator) {
                case '+':
                    newResult = Number(number) + 1
                    break;
                    
                case '-':
                    newResult = Number(number) - 1
                    break;    
                        
                default:
                    break;
            }
                        
        setNumber(newResult)
    }

    const onAdd = ()=>{
        if(number != 0){
            alert('Se ha agregado ' + number + ' del articulo "Aire Acondicionado"')
        }else{
            alert('Debes seleccionar al menos un producto')
        }
    }

        return (
            <div className="itemCount">
                <a href="#"><h3 className="itemCountTitle">Aire Acondicionado</h3></a>
                <a href="#"><img src={product} className="itemCountProduct" alt="product" /></a>
                <div className="count">
                    <button className="countMinus" onClick={()=>operation('-')} disabled={number <= 0}> - </button>
                    <input 
                        id="number"
                        className="countImput"
                        type="number"                        
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <button className="countPlus" onClick={()=>operation('+')} disabled={number >= stock}> + </button>
                </div>
                <button className="countAddCart" onClick={()=>onAdd()}>Agregar al carrito</button>
            </div>
        );
}

export default ItemCount;