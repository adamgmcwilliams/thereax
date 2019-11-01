import React from 'react';
import { Row } from 'antd';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import LocalExpertise from './LocalExpertise';
import { AnalyticsContainer } from './Analytics';

class Analytics extends React.Component {
  render() {
    return(
      <AnalyticsContainer>
        <MarketDetail />
        <MarketGraph />
        <LocalExpertise />
      </AnalyticsContainer>
    );
  }
}

export default Analytics;
