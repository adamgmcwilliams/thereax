
import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import media from '../../helpers/media';

const Container = styled.div`
  height: 400px;
  width: 80%;
`;

const StyledH1 = styled.h1`
  margin-bottom: 0;
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
    padding: 80px;
  `}
`;

class LandingPage extends Component {
  render() {
    const style1 = {
      backgroundColor: 'red',
      height: 400,
    };
    const style2 = {
      backgroundColor: 'blue',
      height: 400,
    };
    return (
      <Row> 
        <StyledCol lg={12} sm={24} style={{ marginTop: 64 }}>
          <StyledH1>Investing.</StyledH1>
          <StyledH1>Now for the rest of us.</StyledH1>
          <div>
            <StyledH4>Robinhood lets you invest in the stock market for free, directly from your phone or desktop.</StyledH4>
          </div>
          <Button type="primary">
            Sign Up
          </Button>
        </StyledCol>
        <StyledCol lg={12} sm={24} style={{ marginTop: 64 }}>
          <h1> Two </h1>
        </StyledCol>
        <StyledCol lg={12} sm={24}>
          <StyledH1> Three </StyledH1>
        </StyledCol>
        <StyledCol lg={12} sm={24}>
          <h1> Four </h1>
        </StyledCol>
      </Row>
    );
  }
}

export default LandingPage;
