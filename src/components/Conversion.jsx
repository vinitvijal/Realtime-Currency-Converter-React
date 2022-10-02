import React, { useEffect, useState } from 'react'
import country from '../country'

export default function Conversion() {

    const [InpCountry, setInpCountry] = useState('usd');
    const [OutCountry, setOutCountry] = useState('inr');

    const [InpValue, setInpValue] = useState(1);
    const [OutValue, setOutValue] = useState(1);

    const [Rate, setRate] = useState(1);

    useEffect(() => {
        const rate = async (InpCountry, OutCountry) => {
            const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${InpCountry}/${OutCountry}.json`)
            const data = await res.json()
            setRate(data[OutCountry])
        }
        rate(InpCountry,OutCountry)
     
    }, [InpCountry, OutCountry]);

    useEffect(() => {
        setOutValue(Rate*InpValue)
    }, [Rate, InpValue, OutValue]);


  return (
    <div className='Conversion'>
        <div className='inputBox'>
            <input type="number" id='inputCurrent' value={InpValue} onChange={(e) => setInpValue(e.target.value)}/>
            <select name="currencyCountry" value={InpCountry} onChange={(e)=> {setInpCountry(e.target.value)}} id="currencyCountry">
                {(Object.keys(country)).map((code) => 
                    <option key={code} value={code}>{country[code]}</option>
                )}
            </select>
        </div>
        <div className='inputBox'>
            <input type="number" id='inputCurrent' value={OutValue} disabled/>
            <select name="currencyCountry" id="currencyCountry" value={OutCountry} onChange={(e)=> {setOutCountry(e.target.value)}}>
            {(Object.keys(country)).map((code) => 
                    <option key={code} value={code}>{country[code]}</option>
                )}
            </select>
        </div>
    </div>
  )
}
