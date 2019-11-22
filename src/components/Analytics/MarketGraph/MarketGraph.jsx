import React from 'react';
import { XAxis, XYPlot, LineSeries } from 'react-vis';

import { MarketGraphContainer } from './MarketGraph.js'

class MarketGraph extends React.Component {
  constructor(props) {
    super(props);
    let { width, height } = props;
    const data = [
      {x: "1D", y: 15000},
      {x: "1W", y: 10000},
      {x: "1M", y: 12000},
      {x: "3M", y: 13000},
      {x: "1Y", y: 20000},
      {x: "3Y", y: 40000},
      {x: "8Y", y: 70000},
      {x: "9Y", y: 72000},
      {x: "12Y", y: 82000},
      {x: "15Y", y: 88000}
    ];
    this.state = { sampleData: data, width: width, height: height }
  }
  render() {
    let { width, height } = this.state;
    return (
    <MarketGraphContainer>
      <XYPlot width={width} height={height} xType="ordinal" style={{border: "1px solid black"}} ><XAxis/>
      <LineSeries data={this.state.sampleData} />
      </XYPlot>
    </MarketGraphContainer>
    );
  }
}

export default MarketGraph;
