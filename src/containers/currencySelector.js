import React from 'react';
import styled from 'styled-components';
import Select from '../components/select';

export default function CurrencySelector(){
    return (
        <SelectorWrapper>
            <p>Select the currency you have and the currency you would like to buy.</p>
            <Select/>
            
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