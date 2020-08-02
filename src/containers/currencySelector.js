import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Select from '../components/select';

export default function CurrencySelector(){
    const initialRates = () => localStorage.getItem('rates') || {};
    const [data, setData] = useState(initialRates)

    useEffect(() => {
        if(Object.keys(data).length !== 0){
            console.log('Using local storage')
        } else {
            console.log('calling api')
            const fetchData = async () => {
                const result = await axios(
                    'https://api.exchangeratesapi.io/latest?base=GBP'
                )
                localStorage.setItem('rates',JSON.stringify(result.data.rates))
            } 
            fetchData();
        }
    }, [data]);

    let results = JSON.parse(data)
    let listData = []
    for(let i in results){
        listData.push(i)
    }
    listData.sort()

    return (
        <SelectorWrapper>
            <p>Select the currency you have and the currency you would like to buy.</p>
            <Select rateData={listData} initialRate={results.EUR}/>
            
        </SelectorWrapper>

    )
}

const SelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 200px auto;
    p {
        font-family: 'Helvetica Neue';
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        margin-bottom: 20px;
    }
`