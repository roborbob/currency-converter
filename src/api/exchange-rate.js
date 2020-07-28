import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


function GetRate(){
    const initialRates = () => localStorage.getItem('rates') || {}
    const [data, setData] = useState(initialRates)

    useEffect(() => {
        if(initialRates){
            console.log('Using local storage')
        } else {
            console.log('calling api')
            const fetchData = async () => {
                const result = await axios(
                    'https://api.exchangeratesapi.io/latest'
                )
                localStorage.setItem('rates',JSON.stringify(result.data.rates))
            } 
            fetchData();
        }
    }, []);

    return (
            <ul>
                {Object.entries(JSON.parse(data)).sort().map(([key,val]) =>  
                    <ShowCurrencies key={val}>{key}:{val}</ShowCurrencies>
                )} 
            </ul>
    )
}

export default GetRate;


const ShowCurrencies = styled.li`
    color: black;
    font-size: 20px;
`