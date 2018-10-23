import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { Fade } from 'react-reveal';
import media from '../../helpers/media';

const StyledH1 = styled.h1`
  margin-bottom: 0;
  font-size: 3em;
`;

const StyledH4 = styled.h4`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledCol = styled(Col)`
  height: 100vh;
  text-align: center;
  padding: 60px;

  ${media.sm`
    height: 100vh;
    text-align: left;
    padding: 100px;
  `}
`;

class LandingPage extends Component {
  render() {
    const colBaseStyle = {
      lg: 12,
      sm: 24,
    };

    return (
      <Row style={{ backgroundColor: 'white' }}>
        <StyledCol {...colBaseStyle} style={{ marginTop: 64 }}>
          <Fade delay={500}>
            <StyledH1>Investing.</StyledH1>
            <StyledH1>Now for the rest of us.</StyledH1>
            <div>
              <StyledH4>Robinhood lets you invest in the stock market for free, directly from your phone or desktop.</StyledH4>
            </div>
          </Fade>
          <Fade delay={1000}>
            <Button type="primary">
              Sign Up
            </Button>
          </Fade>
        </StyledCol>
        <StyledCol {...colBaseStyle} style={{ marginTop: 64 }}>
          <h1> Two </h1>
        </StyledCol>
        <StyledCol {...colBaseStyle}>
          <StyledH1> Three </StyledH1>
        </StyledCol>
        <StyledCol {...colBaseStyle}>
          <h1> Four </h1>
        </StyledCol>
      </Row>
    );
  }
}

export default LandingPage;
