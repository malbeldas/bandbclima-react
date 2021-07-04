import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [number, setNumber] = useState(initial);

    function subtract() {
        if (Number(number) > 0) {
            setNumber(Number(number) - 1);
        }
    }
    
    function add() {
        if (Number(number) < stock) {
            setNumber(Number(number) + 1);
        }
    }

    function buy() {
        onAdd(number);
    }

    return (
        <>
            <div className="count">
                <button className="countMinus" onClick={subtract} disabled={number <= 0}> - </button>
                <input 
                    id="number"
                    className="countImput"
                    type="number"                        
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button className="countPlus" onClick={add} disabled={number >= stock}> + </button>
            </div>

            <button className="countAddCart" onClick={buy}>Agregar al carrito</button>
        </>
    )
}

export {ItemCount}