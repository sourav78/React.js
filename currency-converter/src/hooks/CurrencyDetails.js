import {useEffect, useState} from 'react'

function CurrencyDetails(currency){

    const [data, setData] = useState({})

    async function currenciesExtract(){
        let res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        let dt = await res.json()
        // console.log(dt[currency]);
        setData(dt[currency])
    }
    
    useEffect(()=>{
        // let res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // let dt = await res.json()
        // console.log(dt[currency]);
        // console.log(Object.keys(dt));
        // setData(dt[currency])

        currenciesExtract()

        
    } ,[currency])
    // console.log(data);
    return data
}

export default CurrencyDetails