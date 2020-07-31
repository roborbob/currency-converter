import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {MdSwapHoriz, MdExpandMore} from 'react-icons/md';
import ReactCountryFlag from 'react-country-flag';
import {config} from '../config';

function Select() {
    const initialRates = () => localStorage.getItem('rates') || {};
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [data, setData] = useState(initialRates)
    const [left, setLeft] = useState(`1.00`)
    const [selling, setSelling] = useState({
            flag: `GB`,
            currencyCode: `GBP`,
            currency: `British Pounds`,
    })
    const[buying, setBuying] = useState({
            flag: `EU`,
            currencyCode: `EUR`,
            currency: `Euro`,
    }) 
 
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
    }, []);

    const sellingHandler = (key) => {
        setSelling({
            flag: key.slice(0,2),
            currencyCode: key,
            currency: config[key].name
        })
        setToggleOne(false)
    }
    const buyingHandler = (key) => {
        setBuying({
            flag: key.slice(0,2),
            currencyCode: key,
            currency: config[key].name
        })
        setToggleTwo(false)
    }

    console.log(Object.entries(JSON.parse(data)))
    console.log(Object.entries(JSON.parse(data)))

    return (

         <SelectWrapper>
            <SelectContainer>
                <ReactCountryFlag style={flagStyle} svg countryCode={selling.flag}/>
                <div className='currency-tags'>
                    <p>{selling.currencyCode}</p>
                    <p>{selling.currency}</p>
                </div>
                <MdExpandMore style={{transform: toggleOne ? `rotate(180deg)` : `rotate(0deg)`}} onClick={() => setToggleOne(!toggleOne)}/>
                <DropdownContainer style={{height: toggleOne ? `240px`: `0px`}}>
                    {Object.entries(JSON.parse(data)).sort().map(([key,val]) =>  
                        <ListItem onClick={() => sellingHandler(key)}>
                            <ReactCountryFlag style={flagStyle} svg countryCode={key.slice(0,2)}/>
                            <div className='currency-tags'>
                                <p>{key}</p>
                                <p>{config[key].name}</p>
                            </div>
                        </ListItem>
                    )} 
                </DropdownContainer>
            </SelectContainer>
            <MdSwapHoriz style={flagStyle}/>
            <SelectContainer>
                <ReactCountryFlag style={flagStyle} svg countryCode={buying.flag}/>
                <div className='currency-tags'>
                    <p>{buying.currencyCode}</p>
                    <p>{buying.currency}</p>
                </div>
                <MdExpandMore style={{transform: toggleTwo ? `rotate(180deg)` : `rotate(0deg)`}} onClick={() => setToggleTwo(!toggleTwo)}/>
                <DropdownContainer style={{height: toggleTwo ? `240px`: `0px`}}>
                    {Object.entries(JSON.parse(data)).sort().map(([key,val]) =>  
                        <ListItem onClick={() => buyingHandler(key)}>
                            <ReactCountryFlag style={flagStyle} svg countryCode={key.slice(0,2)}/>
                            <div className='currency-tags'>
                                <p>{key}</p>
                                <p>{config[key].name}</p>
                            </div>
                        </ListItem>
                    )} 
                </DropdownContainer>
            </SelectContainer>
            <InputContainer type="text" defaultValue={left} onChange={(e) => setLeft(e.target.value)}/>
            <MdSwapHoriz style={flagStyle}/>
            <InputContainer type="text"/>
        </SelectWrapper>
    )
}

const flagStyle = {
    width: `50px`,
    height: `100%`,
}

const pointerStyle = {
    width: `30px`,
    height: `30px`
}

const SelectWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const SelectContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 270px;
    height: 60px;
    border-radius: 5px;
    border: none;
    background: white;
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
    .currency-tags{
        width: fit-content;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        p:first-of-type{
            font-size: 20px;
            font-weight: bold;
            margin: 0;
        }
        p{
            font-size: 14px;
            font-weight: regular;
            letter-spacing: 1.2px;
        }
    }
    svg{
        position: absolute;
        align-self: center;
        width: 30px;
        right: 15px;
        transition: 0.3s;
        &:hover{
            cursor: pointer;
            transform: scale(1.2);
        }
    }
`
const InputContainer = styled.input`
    width: 270px;
    height: 60px;
    border-radius: 5px;
    border: none;
    background: white;
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: Helvetica Neue;
`
const ListItem = styled(SelectContainer)`
    position: relative;
    border-top: 1px solid silver;
    border-radius: 0px;
    transition: 0.3s;
    background: rgba(255,255,255,0.7);
    &:hover{
        background: lightblue;
        cursor: pointer;
    }
`
const DropdownContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 270px;
    overflow: scroll;
    z-index: 100;
    background: none;
    border-radius: 5px;
    transition: 0.2s;
`
export default Select;