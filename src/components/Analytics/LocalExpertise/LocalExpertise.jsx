import React from 'react';

import { LocalExpertiseContainer, LocalExpertiseHeading } from './LocalExpertise.js'
import Expert from './Expert';
import Server from '../../../apis/reaxServer';

class LocalExpertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { experts: [] }
  }
  render() {
    return(
      <LocalExpertiseContainer>
        <LocalExpertiseHeading> Local Expertise </LocalExpertiseHeading>
        {this.renderExperts()}
      </LocalExpertiseContainer>
    );
  }

  async componentDidMount() {
    let response = await Server.get('./experts');
    try {
      let experts  = response.data;
      this.setState({ experts: experts })
    } catch(error) {
      console.log("Error:", error)
    }
  }

  renderExperts = () => {
    return this.state.experts.map( (expert) => <Expert expert={expert} />)
  }
}

export default LocalExpertise;
