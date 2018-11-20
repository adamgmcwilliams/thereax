import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { Fade } from 'react-reveal';
import { isMobile } from 'react-device-detect';
import media from '../../helpers/media';
import history from '../../helpers/history';

import PhotoImg1 from './images/vector_phone_1.png';
import PhotoImg4 from './images/vector_phone_4.png';

import './index.css';

const StyledH1 = styled.h1`
  margin-bottom: 0;
  font-size: 2.5em;
  font-weight: 600;

  ${media.sm`
    margin-bottom: 0;
    font-size: 4em;
    font-weight: 800;
  `}
`;

const StyledH4 = styled.h4`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledCol = styled(Col)`
  height: 60vh;
  text-align: center;
  padding-top: ${props => props.paddingTop ? props.paddingTop : '120px'}
  padding-left: 60px;
  padding-right: 60px;
  margin-top: ${props => props.marginTop ? props.marginTop : '0'}

  ${media.sm`
    height: 100vh;
    text-align: left;
    padding-top: ${props => props.paddingTopD ? props.paddingTopD : '185px'}
    padding-left: 125px;
    padding-right: 125px;
    padding-bottom: 125px;
    margin-top: 0px;
  `}
`;

const StyledColImg = styled(Col)`
  height: 50vh;
  text-align: center;
  padding-bottom: 80px;
  patting-top: 0px;
  margin-top: ${props => props.marginTop ? props.marginTop : '0'}

  ${media.sm`
    height: 100vh;
    text-align: left;
    padding: 125px;
    padding-top: ${props => props.paddingTop ? props.paddingTop : '125px'}
    margin-bottom: 0px;
    margin-top: 0px;
  `}
`;

const Img = styled.img`
  height: auto;
  width: 90%
  width: ${props => props.width ? props.width : '90%'}

  ${media.sm`
    height: auto;
  `}
`;

const colBaseStyle = {
  lg: 12,
  sm: 24,
};

class LandingPage extends Component {
  state = { showModal: false };

  showSignup = () => {
    history.push('/signup');
  }

  swap = (elements) => {
    const first = elements[0];
    elements[0] = elements[1];
    elements[1] = first;
  }

  sectionTwo = () => {
    const section = [
      <StyledColImg key="section-two-img" {...colBaseStyle} marginTop="0px">
        <Img src={PhotoImg4} width="70%" />
      </StyledColImg>,
      <StyledCol key="section-two-copy" {...colBaseStyle} paddingTop="0px" marginTop="0px">
        <StyledH1>Search for free.</StyledH1>
        <div>
          <StyledH4>We believe that owning real estate should work for everyone, not just the wealthy.</StyledH4>
          <StyledH4>We’ve pioneered algorithms to consolidate large amounts of public information to put everything you need to be informed about your real estate purchase right at your finger tips.</StyledH4>
        </div>
      </StyledCol>
    ];

    if (isMobile) {
      this.swap(section);
    }

    return section;
  };

  sectionFour = () => {
    const section = [
      <StyledColImg key="section-two-img" {...colBaseStyle}>
        <Img src={PhotoImg1} />
      </StyledColImg>,
      <StyledCol key="section-two-copy" {...colBaseStyle} paddingTopD="200px" paddingTop="0px">
        <StyledH1>Learn by doing.</StyledH1>
        <div>
          <StyledH4>With REAX, you can learn to invest in real estate as you build out your portfolio.</StyledH4>
          <StyledH4>Discover new areas or property types through Tags, and track your favorites with a personalized news feed, and more.</StyledH4>
        </div>
      </StyledCol>
    ];

    if (isMobile) {
      this.swap(section);
    }

    return section;
  }

  render() {

    return (
      <Row
        style={{ backgroundColor: 'white' }}
        justify="center"
        align="middle"
      >
        <StyledCol {...colBaseStyle} style={{ marginTop: 64 }} paddingTop="60px">
          <Fade delay={500}>
            <StyledH1>Real estate investing.</StyledH1>
            <StyledH1>Easier than ever before.</StyledH1>
          </Fade>
          <Fade bottom delay={1000}>
            <div>
              <StyledH4>REAX lets you learn where to invest in the market for free. You can search markets to discover fast-appreciating areas, view sales prices over time, and analyze investment deals.</StyledH4>
            </div>
          </Fade>
          <Fade delay={1500}>
            <Button
              type="primary"
              onClick={this.showSignup}
              size="large"
            >
              Sign Up
            </Button>
          </Fade>
        </StyledCol>
        <StyledColImg {...colBaseStyle} style={{ marginTop: 64 }} paddingTop="100px">
          <Fade delay={isMobile ? 500 : 1500}>
            <div className="asset-placeholder-home" />
          </Fade>
        </StyledColImg>
        {this.sectionTwo()}
        <StyledCol key="section-two-copy" {...colBaseStyle} paddingTop="20px" marginTop="200px">
          <StyledH1>No manual needed.</StyledH1>
          <div>
            <StyledH4>We’ve designed REAX to mimic stock exchanges. It’s fast, familiar, simple, and just works.</StyledH4>
          </div>
        </StyledCol>
        <StyledColImg key="section-three-img" {...colBaseStyle} marginTop="40px">
          <div className="asset-placeholder" />
        </StyledColImg>
        {this.sectionFour()}
      </Row>
    );
  }
}

export default LandingPage;
