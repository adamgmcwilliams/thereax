import React from 'react';
import { Row } from 'antd';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import LocalExpertise from './LocalExpertise';
import MarketList from './MarketList';
import { AnalyticsContainer } from './Analytics';

class Analytics extends React.Component {
  render() {
    return(
      <AnalyticsContainer>
        <MarketDetail />
        <MarketGraph />
        <LocalExpertise />
        <MarketList />
      </AnalyticsContainer>
    );
  }
}

export default Analytics;
