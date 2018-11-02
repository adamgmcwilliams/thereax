import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

import Form from './Form';
import TypedAssist from './TypedAssist';

const colBaseStyle = {
  lg: 12,
  sm: 24,
  xs: 24,
  style: {
    marginTop: 64
  }
};

const Container = styled.div`
  padding: 35px;
  font-size: 2em;
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
        <Col
          {...colBaseStyle}
        >
          <Fade bottom delay={100}>
            <Form />
          </Fade>
        </Col>
        <Col {...colBaseStyle}>
          <Fade delay={1000}>
            <Container>
              <TypedAssist
                strings={typedStrings}
                options={{ startDelay: 1000 }}
              />
            </Container>
          </Fade>
        </Col>
      </Row>
    );
  }
}

export default Signup;
