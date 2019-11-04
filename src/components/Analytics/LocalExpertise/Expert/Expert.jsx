import React from 'react';
import { Avatar } from 'antd';

import { ExpertContainer, ExpertTitle, ExpertDetail, ExpertName, ExpertPhoneNumber } from './Expert.js';

class Expert extends React.Component {
  constructor(props) {
    super(props);
    let { expert } = props;
    this.state = { title: expert.occupation, name: expert.name, phone: expert.phone, photo_url: expert.photo }
  }
  render() {
    return(
      <ExpertContainer>
        <Avatar size={50} src={this.state.photo_url} />
        <ExpertDetail>
          <ExpertTitle>
            {this.state.title}
          </ExpertTitle>
          <ExpertName>
            {this.state.name}
          </ExpertName>
          <ExpertPhoneNumber>
            {this.state.phone}
          </ExpertPhoneNumber>
        </ExpertDetail>
      </ExpertContainer>
    );
  }

  getDerivedStateFromProps(nextProps, prevState) {
    let expert = nextProps.expert;
    return {
      title: expert.occupation,
      name: expert.name,
      phone: expert.phone,
      photo_url: expert.photo_url
    }
  }
}

export default Expert;
