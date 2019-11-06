import React from 'react';
import { connect } from 'react-redux';

import { MarketListContainer, MarketListHeading } from './MarketList.js';
import Market from './Market';

class MaretList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { markets: [] }
  }
  render() {
    return(
      <MarketListContainer>
        <MarketListHeading>
          Markets
        </MarketListHeading>
        {this.renderMarkets()}
      </MarketListContainer>
    )
  }

  renderMarkets = () => {
    return this.state.markets.map((market) => {
      let city = Object.keys(market)[0];
      let finalAgg = market[city].finalAgg;
      return <Market city={city} finalAgg={finalAgg} priceChange="+$2.35(1.84%)" state="New Jeresy" />
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      markets: nextProps.stateData.markets
    }
  }
}

const mapStateToProps = (state) => {
  return { stateData: state.stateData }
}

export default connect(mapStateToProps)(MaretList);
