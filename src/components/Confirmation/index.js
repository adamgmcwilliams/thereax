import React from 'react';
import { Row, Col } from 'antd';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import media from '../../helpers/media';

const Header = styled.h1`
  font-size: 3em;
`;

const Wrapper = styled.div`
  padding: 60px;

  ${media.sm`
    padding: 125px;
  `}
`;

const Confirmation = () => (
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
        <Header>
          Thank you for signing up
        </Header>
        <p>A note from our founding team:</p>
        <p>
          What is the largest monetary investment you are going to make in your entire life? Your investment property? Your latest flip? Your house?
          At REAX, we saw how tough it was to understand market trends, to know where real estate values were appreciating, and to collect all of your information in one place.
          We are choosing to be active by solving those and many more issues related to real estate investing.
          We hope that everyone will use our product to learn where to invest in real estate, to track the value of their homes/investments, to analyze the best deals off and on-market, and to generate long-term wealth as a real estate investor.
          We are not ready to launch our product just yet! But we are actively working toward a finished product.
          We know how valuable this product is going to be for so many people and want to get it into your hands as quickly as possible.
          If you would like to donate to us, or invest to help us move faster please click the link below. In exchange we will provide early access to the product before our larger launch.
        </p>
      </Wrapper>
    </Col>
  </Row>
);

export default Confirmation;
