import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import MediaQuery from 'react-responsive';

import MarketDetail from './MarketDetail';
import MarketGraph from './MarketGraph';
import LocalExpertise from './LocalExpertise';
import MarketList from './MarketList';
import CommentList from './CommentList';
import ContactExpert from './LocalExpertise/MobileLayout/ContactExpert';
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
import { fetchStateData, fetchExperts } from '../../redux/actions';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    let { stateData, currentSelectedMarket, experts, currentExpert } = props;
    this.state = {
      stateData: stateData,
      currentSelectedMarket: currentSelectedMarket,
      experts: experts,
      dataLoaded: false,
      currentExpert: currentExpert
    }
  }
  render() {
    let viewPortWidth = window.innerWidth - 2;
    let { dataLoaded, experts, currentExpert } = this.state;
    return(
      <React.Fragment>
        {dataLoaded ? (
          <React.Fragment>
            <MediaQuery minDeviceWidth={1224} >
              <AnalyticsContainer>
                  <React.Fragment>
                    <MarketDataContainer>
                      <MarketDetail />
                      <MarketGraph width={600} height={310} />
                      <LocalExpertise experts={this.state.experts} />
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
                  <MarketGraph width={viewPortWidth - 20} height={200} />
                  <Stats> Stats </Stats>
                  <MarketDetail />
                  <AboutContainer>
                    <AboutHeading> About </AboutHeading>
                    <AboutText>
                      {this.getAboutText()}
                    </AboutText>
                  </AboutContainer>
                  <LocalExpertise experts={experts} />
                  <ContactExpert expert={currentExpert}/>
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
    this.props.fetchExperts();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let dataLoaded = !!nextProps.stateData.data.about && !!nextProps.experts.length ? true : false
    return {
      stateData: nextProps.stateData,
      currentSelectedMarket: nextProps.currentSelectedMarket,
      experts: nextProps.experts,
      dataLoaded: dataLoaded,
      currentExpert: nextProps.currentExpert
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
  return {
    stateData: state.stateData,
    currentSelectedMarket: state.currentSelectedMarket,
    experts: state.expertsData.list,
    currentExpert: state.expertsData.currentExpert
  }
}

export default connect( mapStateToProps, { fetchStateData, fetchExperts })(Analytics);
