
import React from "react";
import { useState } from 'react'
import './calculatorCard.css'

function roundToDecimal(number, decimals) {
    const factor = 10 ** decimals;
    return Math.round(number * factor) / factor;
  }

function CalculatorCard(){
    const [count, setCount] = useState(0)
    const [costInput, setCostInput] = useState(0)
    const [error, setError] = useState(false)
    const [tipAmount, setTipAmount] = useState(0)
    return(
        <div className="CalculatorCardContainer">
            <h1 className="Title">Tip Calculator</h1>
            {error ? <div className="nothing">Please enter a positive number</div> : <div className="nothing"></div>}
            <input
                placeholder="Enter the bill" 
                type="text"
                id="cost"
                name="cost"
                onChange={(e) => {setCostInput(e.target.value)
                    if (isNaN(costInput)){
                        setError(true)
                        setCostInput(0)
                    }
                    else{
                        setError(false)
                    }
                }}
            >
            </input>
            <div className="tipConversion">

            <button onClick={() => {
                setTipAmount(.1 * costInput)
            }}>10%</button>
            <button onClick={() => {
                setTipAmount(.15 * costInput)
            }}>15%</button>
            <button onClick={() => {
                setTipAmount(.20 * costInput)
            }}>20%</button>
            <button onClick={() => {
                setTipAmount(.25 * costInput)
            }}>25%</button>
            </div>



            <h2>${tipAmount.toFixed(2)}</h2>

        </div>
        
    )
}

export default CalculatorCard