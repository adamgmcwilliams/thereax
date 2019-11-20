import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Avatar, Modal, Button, Input } from 'antd';

import {
  ContactExpertContainer,
  ExpertAvatarAndTitle,
  ContactExpertHeading,
  ContactExpertDetail,
  ContactExpertName,
  ContactExpertPhone,
  ContactExpertAbout,
  ContactExpertFooter,
  ContactExpertInputFields,
  ContactExpertMessageSubmitButton,
  ContactExpertTitle
} from './ContactExpert.js';

class ContactExpert extends React.Component {
  constructor(props) {
    super(props);
    let { expert } = props;
    this.state = { expert: expert }
  }

  render() {
    let viewPortWidth = window.innerWidth - 20;
    let { photo, occupation, name, phone, about } = this.state.expert;
    return(
      <MediaQuery maxDeviceWidth={1224} >
        <ContactExpertContainer>
        <ContactExpertHeading>
          Contact a Local Expert Today
        </ContactExpertHeading>
        <ExpertAvatarAndTitle>
          <Avatar size={30} src={photo} />
          <ContactExpertDetail >
            <ContactExpertTitle> {occupation} </ContactExpertTitle>
           <ContactExpertName> {name} </ContactExpertName>
            <ContactExpertPhone> {phone} </ContactExpertPhone>
          </ContactExpertDetail>
        </ExpertAvatarAndTitle>
        <ContactExpertAbout>
          {about}
        </ContactExpertAbout>
        <ContactExpertInputFields>
          <Input style={{ width: viewPortWidth }} placeholder="Name" size="small" />
          <Input style={{ width: viewPortWidth }} placeholder="Email" size="small" />
          <Input style={{ width: viewPortWidth }} placeholder="Phone" size="small" />
        </ContactExpertInputFields>
          <ContactExpertFooter>
            For quickest results fill out this form and call the experts phone number listed above!
          </ContactExpertFooter>
          <ContactExpertMessageSubmitButton>
            Submit
          </ContactExpertMessageSubmitButton>
        </ContactExpertContainer>
      </MediaQuery>
    )
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      expert: nextProps.expert
    }
  }
  
}

export default ContactExpert;
