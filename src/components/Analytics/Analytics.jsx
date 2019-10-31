import React from 'react';
import { Row } from 'antd';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import { AnalyticsContainer } from './Analytics';

class Analytics extends React.Component {
  render() {
    return(
      <AnalyticsContainer>
        <MarketDetail />
        <MarketGraph />
      </AnalyticsContainer>
    );
  }
}

export default Analytics;
