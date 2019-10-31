import React from 'react';

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
  render() {
    return(
      <MarketDetailContainer>
        <MarketName>
          Plainfield, NJ
        </ MarketName>
        <MarketAveragePrice>
          $99.82
        </ MarketAveragePrice>
        <PriceChange>
          +$0.15 (0.09%)
        </ PriceChange>
        <MeasurementDetailTable>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> 52 WK High </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> $101.34 </ MeasurementDetailRowItem>
          </ MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> 52 WK Low </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> $92.86 </ MeasurementDetailRowItem>
          </ MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> Volume </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> 15,765 </ MeasurementDetailRowItem>
          </MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> Market Cap </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> $6.29B </ MeasurementDetailRowItem>
          </MeasurementDetailRow>
          <MeasurementDetailRow>
            <MeasurementDetailRowItem> Avg sqft/unit </ MeasurementDetailRowItem>
            <MeasurementDetailRowItem> 979 </ MeasurementDetailRowItem>
          </MeasurementDetailRow>
        </MeasurementDetailTable>
      </ MarketDetailContainer>
    )
  }
}

export default MarketDetail;
