import { useEffect, useState } from "react";

// custom hooks are JS file that have normal function

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    //jab ye hook load ho to aisa konsa hook le jab lifecycle invoke ho
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])

    console.log(data);

    return data
}
// pura method return
export default useCurrencyInfo;