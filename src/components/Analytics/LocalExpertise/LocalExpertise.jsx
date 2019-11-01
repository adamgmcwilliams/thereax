import React from 'react';

import { LocalExpertiseContainer, LocalExpertiseHeading } from './LocalExpertise.js'
import Expert from './Expert';

class LocalExpertise extends React.Component {
  render() {
    return(
      <LocalExpertiseContainer>
        <LocalExpertiseHeading> Local Expertise </LocalExpertiseHeading>
        <Expert title="Mortgage Lender" />
        <Expert title="Legal Services" />
        <Expert title="Real Estate Agent" />
        <Expert title="Home Inspector" />
        <Expert title="Home Appraisal" />
      </LocalExpertiseContainer>
    );
  }
}

export default LocalExpertise;
