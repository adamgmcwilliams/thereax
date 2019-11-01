import React from 'react';
import Faker from 'faker';
import { Avatar } from 'antd';

import { ExpertContainer, ExpertTitle, ExpertDetail, ExpertName, ExpertLicenceNumber } from './Expert.js';

class Expert extends React.Component {
  constructor(props) {
    super(props);
    let { title } = props;
    this.state = { title: title }
  }
  render() {
    return(
      <ExpertContainer>
        <Avatar size={50} src={Faker.image.avatar()} />
        <ExpertDetail>
          <ExpertTitle>
            {this.state.title}
          </ExpertTitle>
          <ExpertName>
            {Faker.name.findName()}
          </ExpertName>
          <ExpertLicenceNumber>
            {Faker.random.number()}
          </ExpertLicenceNumber>
        </ExpertDetail>
      </ExpertContainer>
    );
  }
}

export default Expert;
