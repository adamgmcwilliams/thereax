import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import media from '../../helpers/media';

import Form from './Form';
import TypedAssist from './TypedAssist';

const colBaseStyle = {
  lg: 12,
  sm: 24,
  xs: 24,
};

const Container = styled.div`
  padding: 35px;
  padding-top: 0px;
  font-size: 1.5em;
  text-align: center;
  ${media.sm`
    padding: 35px;
    font-size: 2em;
    text-align: left;
  `}
`;

const StyledCol = styled(Col)`
  margin-top: ${props => props.marginTop ? props.marginTop : '64px'}
  ${media.sm`
    margin-top: 64px;
  `}
`;

const typedStrings = [
  'Invest smarter. 🤓',
  'Invest cooler. 😎',
  'Invest with R|E|A|X 🏡'
];

class Signup extends Component {
  render() {
    return(
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ backgroundColor: 'white' }}
      >
        <StyledCol
          {...colBaseStyle}
        >
          <Fade bottom delay={100}>
            <Form />
          </Fade>
        </StyledCol>
        <StyledCol {...colBaseStyle} marginTop="0px">
          <Fade delay={1000}>
            <Container>
              <TypedAssist
                strings={typedStrings}
                options={{ startDelay: 1000 }}
              />
            </Container>
          </Fade>
        </StyledCol>
      </Row>
    );
  }
}

export default Signup;
