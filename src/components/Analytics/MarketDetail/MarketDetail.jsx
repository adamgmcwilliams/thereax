import React from 'react';
import { connect } from 'react-redux';

import {
  MarketDetailContainer,
  MarketName,
  MarketAveragePrice,
  PriceChange,
  MeasurementDetailTable,
  MeasurementDetailRow,
  MeasurementDetailRowItem
} from './MarketDetail';

class MarketDetail extends React.Component {

  constructor(props) {
    super(props);
    let { stateData, currentSelectedMarket } = props;
    this.state = { stateData: stateData, currentSelectedMarket: currentSelectedMarket, currentCity: "" }
  }

  render() {
    return(
      <MarketDetailContainer>
        <MarketName>
          {this.getMarketName()}
        </ MarketName>
        <MarketAveragePrice>
          ${this.getMarketAvergePrice()}
        </ MarketAveragePrice>
        <PriceChange>
          +$0.15 (0.09%)
        </ PriceChange>
        <MeasurementDetailTable>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> 52 WK High </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> ${this.getHighValue()} </ MeasurementDetailRowItem>
          </ MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> 52 WK Low </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> ${this.getLowValue()} </ MeasurementDetailRowItem>
          </ MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> Volume </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> {this.getMarketVolume()} </ MeasurementDetailRowItem>
          </MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> Market Cap </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> ${this.getMarketCap()} </ MeasurementDetailRowItem>
          </MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> Avg sqft/unit </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> {this.getAverageArea()} </ MeasurementDetailRowItem>
          </MeasurementDetailRow>
        </MeasurementDetailTable>
      </ MarketDetailContainer>
    )
  }

  getMarketName = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ? this.state.currentCity.toUpperCase() : "Belleville"
  }

  getMarketAvergePrice = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ? currentMarket[this.state.currentCity].finalAgg : this.state.stateData.data.finalAgg
  }

  getMarketVolume = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ?  currentMarket[this.state.currentCity].volume : this.state.stateData.data.volume
  }

  getMarketCap = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ?  currentMarket[this.state.currentCity].marketCap : this.state.stateData.data.marketCap
  }

  getAverageArea = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ?  currentMarket[this.state.currentCity].avgSqft : this.state.stateData.data.avgSqft
  }

  getHighValue = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ?  currentMarket[this.state.currentCity].high : this.state.stateData.data.high
  }

  getLowValue = () => {
    let currentMarket = this.state.currentSelectedMarket.currentSelectedMarket;
    return !!this.state.currentSelectedMarket ?  currentMarket[this.state.currentCity].low : this.state.stateData.data.low
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let market = nextProps.currentSelectedMarket.currentSelectedMarket || {}
    let city = Object.keys(market)[0];
    return {
      stateData: nextProps.stateData,
      currentSelectedMarket: nextProps.currentSelectedMarket,
      currentCity: city
    }
  }

}

const mapStateToProps = (state) => {
  return { stateData: state.stateData, currentSelectedMarket: state.currentSelectedMarket }
}

export default connect(mapStateToProps)(MarketDetail);
