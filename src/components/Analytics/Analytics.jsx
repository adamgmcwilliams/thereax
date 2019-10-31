import React from 'react';
import { Row } from 'antd';

import MarketDetail from './MarketDetail';
import { AnalyticsContainer } from './Analytics';

class Analytics extends React.Component {
  render() {
    return(
      <AnalyticsContainer>
        <MarketDetail />
      </AnalyticsContainer>
    );
  }
}

export default Analytics;
