import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import media from '../../helpers/media';

const Header = styled.h1`
  font-size: 3em;
`;

const Wrapper = styled.div`
  padding: 60px;
  p {
    font-size: 2em;
    text-align: justify;
  }

  font-family: 'Caveat', cursive;

  ${media.sm`
    padding: 125px;
    text-align: center;
    p {
      text-align: center;
    }
  `}
`;

class Confirmation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
      >
        <Col
          style={{ marginTop: 64, textAlign: 'center', backgroundColor: 'white' }}
          lg={24}
          sm={12}
        >
          <Wrapper>
            <Fade delay={500}>
              <p>A note from our founding team:</p>
              <p>
                What's the largest investment you'll make in your entire life? Your investment property? Your latest flip? Your house?</p>
              <p>
                At REAX, we saw how tough it was to understand market trends, to know where real estate values were appreciating, and to collect all of your information in one place.
                We are choosing to be active by solving those and many more issues related to real estate investing.
                We hope that everyone will use our product to learn where to invest in real estate, to track the value of their homes/investments, to analyze the best deals off and on-market, and to generate long-term wealth as a real estate investor.
              </p>
              <p>We are not ready to launch our product just yet!</p>
              <p>
                We are actively working toward a finished product.
              </p>
              <p>
                If you would like to learn more or invest to help us move faster, please email adamgmcwilliams@gmail.com.
              </p>
            </Fade>
            <Fade delay={2000}>
              <Header>
                Thank you for signing up
              </Header>
            </Fade>
          </Wrapper>
        </Col>
      </Row>
    );
  }
}

export default Confirmation;
