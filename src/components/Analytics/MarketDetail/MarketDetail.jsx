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
    this.state = { stateData: stateData, currentSelectedMarket: currentSelectedMarket, currentMarket: {} }
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
    return !!this.currentMarket ? "Dummy Market" : "Belleville"
  }

  getMarketAvergePrice = () => {
    return !!this.currentMarket ? "25.2" : this.state.stateData.data.finalAgg
  }

  getMarketVolume = () => {
    return !!this.currentMarket ? "25.2" : this.state.stateData.data.volume
  }

  getMarketCap = () => {
    return !!this.currentMarket ? "25.2" : this.state.stateData.data.marketCap
  }

  getAverageArea = () => {
    return !!this.currentMarket ? "25.2" : this.state.stateData.data.avgSqft
  }

  getHighValue = () => {
    return !!this.currentMarket ? "25.2" : this.state.stateData.data.high
  }

  getLowValue = () => {
    return !!this.currentMarket ? "25.2" : this.state.stateData.data.low
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      stateData: nextProps.stateData,
      currentSelectedMarket: nextProps.currentSelectedMarket
    }
  }

}

const mapStateToProps = (state) => {
  return { stateData: state.stateData, currentSelectedMarket: state.currentSelectedMarket }
}

export default connect(mapStateToProps)(MarketDetail);
