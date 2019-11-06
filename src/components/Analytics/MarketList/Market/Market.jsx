import React from 'react';

import { MarketContainer, CityStateContainer, MarketPriceContainer, MarketCity, MarketState, MarketPrice, MarketChangeInPrice } from './Market.js';

class Market extends React.Component {
  constructor(props) {
    super(props);
    let { city, state, finalAgg, priceChange } = props;
    this.state = { city: city, state: state, finalAgg: finalAgg, priceChange: priceChange }
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
            ${this.getFinalAgg()}
          </MarketPrice>
          <MarketChangeInPrice style={{ color: `${this.getPriceChangeColor()}` }} >
            {this.getPriceChange()}
          </MarketChangeInPrice>
        </MarketPriceContainer>
      </MarketContainer>
      )
  }

  getCity = () => {
    return this.state.city.toUpperCase();
  }

  getState = () => {
    return this.state.state;
  }

  getFinalAgg = () => {
    return this.state.finalAgg;
  }

  getPriceChange = () => {
    return this.state.priceChange;
  }

  getPriceChangeColor = () => {
    return this.state.priceChange.includes('+') ? '#ff0000' : '#80ff00'
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      city: nextProps.city,
      state: nextProps.state,
      finalAgg: nextProps.finalAgg,
      priceChange: nextProps.priceChange
    }
  }
}

export default Market;
