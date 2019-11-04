import React from 'react';

import { MarketContainer, CityStateContainer, MarketPriceContainer, MarketCity, MarketState, MarketPrice, MarketChangeInPrice } from './Market.js';

class Market extends React.Component {
  constructor(props) {
    super(props);
    let { city, state, price, priceChange } = props;
    this.state = { city: city, state: state, price: price, priceChange: priceChange }
  }
  render() {
    return(
      <MarketContainer>
        <CityStateContainer>
          <MarketCity>
            {this.getCity()}
          </MarketCity>
          <MarketState>
            {this.getState()}
          </MarketState>
        </CityStateContainer>
        <MarketPriceContainer>
          <MarketPrice>
            {this.getPrice()}
          </MarketPrice>
          <MarketChangeInPrice style={{ color: `${this.getPriceChangeColor()}` }} >
            {this.getPriceChange()}
          </MarketChangeInPrice>
        </MarketPriceContainer>
      </MarketContainer>
      )
  }

  getCity = () => {
    return this.state.city;
  }

  getState = () => {
    return this.state.state;
  }

  getPrice = () => {
    return this.state.price;
  }

  getPriceChange = () => {
    return this.state.priceChange;
  }

  getPriceChangeColor = () => {
    return this.state.priceChange.includes('+') ? '#ff0000' : '#80ff00'
  }
}

export default Market;
