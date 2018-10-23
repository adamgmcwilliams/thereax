
import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Container = styled.div`
  height: 400px;
  width: 80%;
`;

const StyledH1 = styled.h1`
  
`;

const StyledCol = styled(Col)`
  height: 100vh;
  text-align: center;
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
        <StyledCol lg={12} sm={24}>
          <StyledH1> One  </StyledH1>
        </StyledCol>
        <StyledCol lg={12} sm={24}>
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
