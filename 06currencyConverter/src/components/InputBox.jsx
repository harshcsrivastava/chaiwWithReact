import React from 'react'
import { useId } from 'react';
// useId => generating unique ID

function InputBox({
    label,
    amount, 
    currencyOptions =[],   
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInpId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex mx-4`}>
            <div className="w-1/2">
                <label  
                    htmlFor={amountInpId}
                    className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInpId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select  
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled = {currencyDisable}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                   {currencyOptions.map((curr) => (
                        <option key = {curr} value={curr}>
                             {curr}
                        </option>
                        // key/ID is liye cause taki JS ko pata chalaye unique ho

                   ))}

                   {/* Curly braces lagane pe return krna pdega map me thats why paranthesis */}
                </select>
            </div>
        </div>
    );
}
export default InputBox
// choti file ke liye ye thik hai export krna
// but for badi file sab index.js me dalo