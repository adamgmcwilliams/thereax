import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Fade } from 'react-reveal';

import Form from './Form';

const colBaseStyle = {
  lg: 12,
  sm: 24,
};

class Signup extends Component {
  render() {
    console.log('Rendered');
    return(
      <Row
        style={{ backgroundColor: 'white' }}
      >
        <Col
          {...colBaseStyle}
          style={{ marginTop: 64 }}
        >
          <Fade bottom delay={100}>
            <Form />
          </Fade>
        </Col>

        <Col {...colBaseStyle}>
        </Col>
      </Row>
    );
  }
}

export default Signup;
