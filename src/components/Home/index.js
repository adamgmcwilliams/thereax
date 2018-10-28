import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { Fade } from 'react-reveal';
import { isMobile } from 'react-device-detect';
import ReapForm from '../ReapForm';
import media from '../../helpers/media';

import './index.css';

const StyledH1 = styled.h1`
  margin-bottom: 0;
  font-size: 3.2em;
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
  height: 80vh;
  text-align: center;
  padding-top: 120px;
  padding-left: 60px;
  padding-right: 60px;

  ${media.sm`
    height: 100vh;
    text-align: left;
    padding-top: 185px;
    padding-left: 125px;
    padding-right: 125px;
    padding-bottom: 125px;
  `}
`;

const StyledColImg = styled(Col)`
  height: 60vh;
  text-align: center;
  padding-bottom: 80px;
  patting-top: 0px;

  ${media.sm`
    height: 100vh;
    text-align: left;
    padding: 125px;
  `}
`;

const Img = styled.img`
  height: auto;
  width: 90%

  ${media.sm`
    height: auto;
    width: 90%
  `}
`;

const colBaseStyle = {
  lg: 12,
  sm: 24,
};

class LandingPage extends Component {
  state = { showModal: false };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  }

  onSuccess = () => {
    this.setState({
      showModal: false,
    });
  }

  onFailure = () => {
    this.setState({
      showModal: false
    });
  }

  swap = (elements) => {
    const first = elements[0];
    elements[0] = elements[1];
    elements[1] = first;
  }

  sectionTwo = () => {
    const section = [
      <StyledColImg key="section-two-img" {...colBaseStyle}>
          <Fade delay={isMobile ? 500 : 1000}>
            <Img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/Android_trading_still.png" />
          </Fade>
      </StyledColImg>,
      <StyledCol key="section-two-copy" {...colBaseStyle}>
        <Fade top delay={500}>
          <StyledH1>Search for free.</StyledH1>
        </Fade>
        <Fade bottom delay={1000}>
          <div>
            <StyledH4>We believe that owning real estate should work for everyone, not just the wealthy.</StyledH4>
            <StyledH4>We’ve pioneered algorithms to consolidate large amounts of public information to put everything you need to be informed about your real estate purchase right at your finger tips.</StyledH4>
          </div>
        </Fade>
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
          <Fade delay={isMobile ? 500 : 1000}>
            <Img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/Android_trading_still.png" />
          </Fade>
      </StyledColImg>,
      <StyledCol key="section-two-copy" {...colBaseStyle}>
        <Fade top delay={500}>
          <StyledH1>Learn by doing.</StyledH1>
        </Fade>
        <Fade bottom delay={1000}>
          <div>
            <StyledH4>With REAX, you can learn to invest in the real estate as you build out your portfolio.</StyledH4>
            <StyledH4>Discover new areas or property types through Tags, and track your favorites with a personalized news feed, and more.</StyledH4>
          </div>
        </Fade>
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
        <StyledCol {...colBaseStyle} style={{ marginTop: 64 }}>
          <Fade top delay={500}>
            <StyledH1>Real estate.</StyledH1>
            <StyledH1>Easier than ever before.</StyledH1>
          </Fade>
          <Fade bottom delay={1500}>
            <div>
              <StyledH4>REAX lets you learn where to invest in the market for free.</StyledH4>
            </div>
          </Fade>
          <Fade delay={2500}>
            <Button
              type="primary"
              onClick={this.showModal}
              size="large"
            >
              Sign Up
            </Button>
          </Fade>
        </StyledCol>
        <StyledColImg {...colBaseStyle} style={{ marginTop: 64 }}>
          <Fade delay={isMobile ? 500 : 1500}>
            <Img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/iPhoneHome_still.png" />
          </Fade>
        </StyledColImg>
        {this.sectionTwo()}
        <StyledCol key="section-two-copy" {...colBaseStyle}>
          <Fade top delay={500}>
            <StyledH1>No manual needed.</StyledH1>
          </Fade>
          <Fade bottom delay={1000}>
            <div>
              <StyledH4>We’ve designed REAX to mimic stock exchanges. It’s fast, familiar, simple, and just works.</StyledH4>
            </div>
          </Fade>
        </StyledCol>
        <StyledColImg key="section-three-img" {...colBaseStyle}>
          <Fade delay={isMobile ? 500 : 1000}>
            <div className="asset-placeholder" />
          </Fade>
        </StyledColImg>
        {this.sectionFour()}
        <ReapForm
          message="Some copy"
          showModal={this.state.showModal}
          onClose={this.onFailure}
          onSuccess={this.onSuccess}
        />
      </Row>
    );
  }
}

export default LandingPage;
