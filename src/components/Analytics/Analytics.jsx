import React from 'react';
import { Row } from 'antd';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import LocalExpertise from './LocalExpertise';
import MarketList from './MarketList';
import CommentList from './CommentList';
import { AnalyticsContainer, MarketDataContainer, AboutContainer, AboutHeading, AboutText } from './Analytics';

class Analytics extends React.Component {
  render() {
    return(
      <AnalyticsContainer>
        <MarketDataContainer>
          <MarketDetail />
          <MarketGraph />
          <LocalExpertise />
          <MarketList />
        </MarketDataContainer>
        <AboutContainer>
          <AboutHeading> About </AboutHeading>
          <AboutText>
            Knowing what's happening in the real estate market is a key factor in a successful transaction, whether you're the buyer, seller, or REALTOR®. That's why NJ REALTORS® has partnered with the MLSs in our state to compile the best, most comprehensive data available about the New Jersey housing market, powered by 10K Research & Marketing.
          </AboutText>
        </AboutContainer>
        <CommentList />
      </AnalyticsContainer>
    );
  }
}

export default Analytics;
