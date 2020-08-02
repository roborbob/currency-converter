import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ListItem from './dropDownContainer';
import axios from 'axios';
import {MdSwapHoriz, MdExpandMore} from 'react-icons/md';
import ReactCountryFlag from 'react-country-flag';
import {config} from '../config';

function Select(props) {
    const [toggle, setToggle] = useState({toggleSelling: false, toggleBuying: false});
    const [rate, setRate] = useState(props.initialRate)
    const [left, setLeft] = useState(`1.00`)
    const [right, setRight] = useState((Number(left)*rate).toFixed(2))
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

    const sellingHandler = (key) => {
        setSelling({
            flag: key.slice(0,2),
            currencyCode: key,
            currency: config[key].name
        })
        updateRate(key,buying.currencyCode)
        setToggle(prevToggle => ({toggleSelling: false, toggleBuying: prevToggle.toggleBuying}))
    }
    const buyingHandler = (key) => {
        setBuying({
            flag: key.slice(0,2),
            currencyCode: key,
            currency: config[key].name
        })
        updateRate(selling.currencyCode,key)
        setToggle(prevToggle => ({toggleSelling: prevToggle.toggleSelling, toggleBuying: false}))
    }

    const swapHandler = () => {
        setBuying(selling)
        setSelling(buying)
        updateRate(selling.currencyCode,buying.currencyCode)     
    }

    const updateRate = (a,b) => {
        const fetchData = async () => {
            const result = await axios(
                `https://api.exchangeratesapi.io/latest?base=${a}&symbols=${b}`
            )
            setRate(Object.values(result.data.rates)[0])
        } 
        fetchData();
        setRight((left*rate).toFixed(2))
    }

    return (

         <SelectWrapper>
            <SelectContainer>
                <ReactCountryFlag style={flagStyle} svg countryCode={selling.flag}/>
                <div className='currency-tags'>
                    <p>{selling.currencyCode}</p>
                    <p>{selling.currency}</p>
                </div>
                <MdExpandMore 
                    style={{transform: toggle.toggleSelling ? `rotate(180deg)` : `rotate(0deg)`}} 
                    onClick={() => setToggle(prevToggle => ({toggleSelling: !prevToggle.toggleSelling, toggleBuying: prevToggle.toggleBuying}))}/>
                 <DropDownContainer toggle={toggle.toggleSelling}>
                     {props.rateData.map( e => (
                         <ListItem 
                            key={Math.random()}
                            clicked={() => sellingHandler(e)}
                            code={e}
                         />
                     ))}
                </DropDownContainer>                
            </SelectContainer>
            <MdSwapHoriz style={flagStyle} onClick={swapHandler}/>
            <SelectContainer>
                <ReactCountryFlag style={flagStyle} svg countryCode={buying.flag}/>
                <div className='currency-tags'>
                    <p>{buying.currencyCode}</p>
                    <p>{buying.currency}</p>
                </div>
                <MdExpandMore 
                    style={{transform: toggle.toggleBuying ? `rotate(180deg)` : `rotate(0deg)`}} 
                    onClick={() => setToggle(prevToggle => ({toggleSelling: prevToggle.toggleSelling, toggleBuying:!prevToggle.toggleBuying}))}/>
                <DropDownContainer toggle={toggle.toggleBuying}>
                    {props.rateData.map( e => (
                        <ListItem 
                            key={Math.random()}
                            clicked={() => buyingHandler(e)}
                            code={e}
                        />
                    ))}
                </DropDownContainer>
            </SelectContainer>
            <InputContainer focus type="text" value={left} onChange={(e) => {
                setRight(((e.target.value)*rate).toFixed(2))
                setLeft(e.target.value)
                }
            }/>
            <MdSwapHoriz style={flagStyle}/>
            <InputContainer type="text" value={right} onChange={(e) => {
                setLeft(((e.target.value)/rate).toFixed(2))
                setRight(e.target.value)
                }
            }/>
        </SelectWrapper>
    )
}


const pointerStyle = {
    width: `30px`,
    height: `30px`
}
const flagStyle = {
    width: `50px`,
    height: `100%`,
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
const DropDownContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 270px;
    overflow: scroll;
    z-index: 100;
    background: none;
    border-radius: 5px;
    transition: 0.2s;
    height: ${props => props.toggle ? `240px` : `0px` }
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
    font-weight: regular;
    font-family: 'Helvetica Neue';
`
export default Select;