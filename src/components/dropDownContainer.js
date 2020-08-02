import React from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import {config} from '../config';

const ListItemStyle = styled.div`
    position: relative;
    border-top: 1px solid silver;
    border-radius: 0px;
    transition: 0.3s;
    background: rgba(255,255,255,0.7);
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 270px;
    height: 60px;
    border: none;
    background: white;
    padding: 10px;
    &:hover{
        background: lightblue;
        cursor: pointer;
    }
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
`

const flagStyle = {
    width: `50px`,
    height: `100%`,
}

function ListItem(props){
    return (   
                <ListItemStyle onClick={props.clicked}>
                    <ReactCountryFlag style={flagStyle} svg countryCode={props.code.slice(0,2)}/>
                    <div className='currency-tags'>
                        <p>{props.code}</p>
                        <p>{config[props.code].name}</p>
                    </div>
                </ListItemStyle>
    )
}           

export default ListItem;

