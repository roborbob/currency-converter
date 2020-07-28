import React, {useState} from 'react';
import styled from 'styled-components';
import {MdSwapHoriz, MdExpandMore} from 'react-icons/md';
import ReactCountryFlag from 'react-country-flag';

function Select() {
    const [value, setValue] = useState({
           selling: {flag: `GB`,
                    currencyCode: `GBP`,
                    currency: `British Pounds`},
            buying: {flag: `EU`,
                    currencyCode: `EUR`,
                    currency: `Euros`},
        })

    return (

         <SelectWrapper>
            <SelectContainer>
                <ReactCountryFlag style={flagStyle} svg countryCode={value.selling.flag}/>
                <div className='currency-tags'>
                    <p>{value.selling.currencyCode}</p>
                    <p>{value.selling.currency}</p>
                </div>
                <MdExpandMore style={pointerStyle}/>
            </SelectContainer>
            <MdSwapHoriz style={flagStyle}/>
            <SelectContainer>
                <ReactCountryFlag style={flagStyle} svg countryCode={value.buying.flag}/>
                <div className='currency-tags'>
                    <p>{value.buying.currencyCode}</p>
                    <p>{value.buying.currency}</p>
                </div>
                <MdExpandMore style={pointerStyle}/>
            </SelectContainer>
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
    }
`
export default Select;