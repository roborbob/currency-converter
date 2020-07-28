import React from 'react';
import CurrencySelector from './containers/currencySelector';
import CurrencyCalculator from './containers/currencyCalculator';
import HistoricalRates from './containers/historicalRates';
import styled from 'styled-components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Currency Converter</h1>
        <CurrencySelector/>
        <CurrencyCalculator/>
        <HistoricalRates/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.main`
  display: block;
  width: 650px;
  margin: auto;
  padding: 0;
  text-align: center;
  h1 {
    margin-top: 50px;
    font-family: 'Helvetica Neue';
    font-weight: 300;
    letter-spacing: 1.2px;
  }
`