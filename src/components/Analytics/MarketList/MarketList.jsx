import React from 'react';

import { MarketListContainer, MarketListHeading } from './MarketList.js';
import Market from './Market';

class MaretList extends React.Component {
  render() {
    return(
      <MarketListContainer>
        <MarketListHeading>
          Markets
        </MarketListHeading>
        <Market city="Jeresy City" state="New Jeresy" price={121.56} priceChange="+2.35(1.84%)" />
        <Market city="West New York" state="New Jeresy" price={121.56} priceChange="-1.35(0.84%)" />
        <Market city="Secaucus" state="New Jeresy" price={121.56} priceChange="+2.35(1.84%)"/>
        <Market city="Newark" state="New Jeresy" price={121.56} priceChange="+2.35(1.84%)"/>
        <Market city="Bayonne" state="New Jeresy" price={121.56} priceChange="-0.35(0.34%)"/>
      </MarketListContainer>
    )
  }
}

export default MaretList;
