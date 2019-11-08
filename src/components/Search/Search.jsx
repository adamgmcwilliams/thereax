import React from 'react';
import { AutoComplete  } from 'antd';
import { connect } from 'react-redux';

import { SearchBoxContainer } from './Search.js';
import { setCurrentMarket } from '../../redux/actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    let { stateData } = props;
    this.state = {stateData: stateData, states: [] }
  }

  render() {
    return(
      <SearchBoxContainer >
        <AutoComplete placeholder="Search Districts" style={{ width: 400 }} dataSource={this.state.states}
          onSelect={this.renderMarket} />
      </ SearchBoxContainer>
    );
  }

  renderMarket = (value, option) => {
    let currentMarket = this.state.stateData.markets.filter((market) => {
      return Object.keys(market)[0].toUpperCase() === value
    })
    this.props.setCurrentMarket(currentMarket[0])
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let states = nextProps.stateData.markets.map((market) => Object.keys(market)[0].toUpperCase())
    return {
      stateData: nextProps.stateData,
      states: states
    }
  }
}

const mapStateToProps = (state) => {
  return { stateData: state.stateData }
}

export default connect(mapStateToProps, { setCurrentMarket })(Search);
