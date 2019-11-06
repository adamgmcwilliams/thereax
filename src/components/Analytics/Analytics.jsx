import React from 'react';
import { connect } from 'react-redux';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import LocalExpertise from './LocalExpertise';
import MarketList from './MarketList';
import CommentList from './CommentList';
import { AnalyticsContainer, MarketDataContainer, AboutContainer, AboutHeading, AboutText } from './Analytics';
import { fetchStateData } from '../../redux/actions';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    let { stateData, currentSelectedMarket } = props;
    this.state = { stateData: stateData, currentSelectedMarket: currentSelectedMarket }
  }
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
            {this.getAboutText()}
          </AboutText>
        </AboutContainer>
        <CommentList />
      </AnalyticsContainer>
    );
  }

  componentDidMount() {
    this.props.fetchStateData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      stateData: nextProps.stateData,
      currentSelectedMarket: nextProps.currentSelectedMarket
    }
  }

  getAboutText = () => {
    return !!this.state.currentSelectedMarket ? this.getCurrentSelectedMarketAboutText() : this.state.stateData.data.about;
  }

  getCurrentSelectedMarketAboutText = () => {
    let market = this.state.currentSelectedMarket.currentSelectedMarket;
    let city = Object.keys(market)[0];
    return market[city].about
  }
}

const mapStateToProps = (state) => {
  return { stateData: state.stateData, currentSelectedMarket: state.currentSelectedMarket }
}

export default connect( mapStateToProps, { fetchStateData })(Analytics);
