import React from 'react';
import { connect } from 'react-redux';

import { MarketContainer, CityStateContainer, MarketPriceContainer, MarketCity, MarketState, MarketPrice, MarketChangeInPrice } from './Market.js';
import { setCurrentMarket } from '../../../../redux/actions';

class Market extends React.Component {
  constructor(props) {
    super(props);
    let { city, state, finalAgg, priceChange, market } = props;
    this.state = { city: city, state: state, finalAgg: finalAgg, priceChange: priceChange, market: market }
  }
  render() {
    let { city, state, finalAgg, priceChange } = this.state;
    return(
      <MarketContainer onClick={this.updateCurrentMarket}>
        <CityStateContainer>
          <MarketCity>
            {city.toUpperCase()}
          </MarketCity>
          <MarketState>
            {state}
          </MarketState>
        </CityStateContainer>
        <MarketPriceContainer>
          <MarketPrice>
            ${finalAgg}
          </MarketPrice>
          <MarketChangeInPrice style={{ color: `${this.getPriceChangeColor()}` }} >
            {priceChange}
          </MarketChangeInPrice>
        </MarketPriceContainer>
      </MarketContainer>
      )
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

  updateCurrentMarket = () => {
    this.props.setCurrentMarket(this.state.market)
  }
}

export default connect(null, { setCurrentMarket })(Market);
