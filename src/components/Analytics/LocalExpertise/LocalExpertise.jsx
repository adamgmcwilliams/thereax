import React from 'react';

import { LocalExpertiseContainer, LocalExpertiseHeading } from './LocalExpertise.js'
import Expert from './Expert';
import Server from '../../../apis/reaxServer';

class LocalExpertise extends React.Component {
  constructor(props) {
    super(props);
    let { experts } = props;
    this.state = { experts: experts }
  }
  render() {
    return(
      <LocalExpertiseContainer>
        <LocalExpertiseHeading> Local Expertise </LocalExpertiseHeading>
        {this.renderExperts()}
      </LocalExpertiseContainer>
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      experts: nextProps.experts
    }
  }

  renderExperts = () => {
    return this.state.experts.map( (expert) => <Expert expert={expert} />)
  }
}

export default LocalExpertise;
