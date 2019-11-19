import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import MediaQuery from 'react-responsive';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import LocalExpertise from './LocalExpertise';
import MarketList from './MarketList';
import CommentList from './CommentList';
import {
  AnalyticsContainer,
  MarketDataContainer,
  AboutContainer,
  AboutHeading,
  AboutText,
  LoaderContainer,
  MobileMarketDataContainer,
  Stats
} from './Analytics.js';
import { fetchStateData } from '../../redux/actions';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    let { stateData, currentSelectedMarket } = props;
    this.state = { stateData: stateData, currentSelectedMarket: currentSelectedMarket, dataLoaded: false  }
  }
  render() {
    let viewPortWidth = window.innerWidth - 2;
    return(
      <React.Fragment>
        {this.state.dataLoaded ? (
          <React.Fragment>
            <MediaQuery minDeviceWidth={1224} >
              <AnalyticsContainer>
                  <React.Fragment>
                    <MarketDataContainer>
                      <MarketDetail />
                      <MarketGraph width={600} height={310} />
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
                  </React.Fragment>
              </AnalyticsContainer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224} >
              <AnalyticsContainer>
                <MobileMarketDataContainer>
                  <MarketGraph width={viewPortWidth} height={200} />
                  <Stats> Stats </Stats>
                  <MarketDetail />
                  <AboutContainer>
                    <AboutHeading> About </AboutHeading>
                    <AboutText>
                      {this.getAboutText()}
                    </AboutText>
                  </AboutContainer>
                  <CommentList />
                </MobileMarketDataContainer>
              </ AnalyticsContainer>
            </MediaQuery>
          </React.Fragment>
        )
        : (
            <LoaderContainer>
              <Loader
                type="Circles"
                color="black"
                height={100}
                width={100}
                timeout={100000000}
              />
          </LoaderContainer>
        )}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.fetchStateData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let dataLoaded = !!nextProps.stateData.data.about ? true : false
    return {
      stateData: nextProps.stateData,
      currentSelectedMarket: nextProps.currentSelectedMarket,
      dataLoaded: dataLoaded
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
