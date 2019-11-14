import React, { Component } from 'react';
import { Menu, Layout, Row, Col, Input } from 'antd';
import styled from 'styled-components';

import history from '../../helpers/history';
import media from '../../helpers/media';
import Search from '../Search';
import './index.css';

const { Header, Content, Footer } = Layout;
const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  ${media.sm`
    position: absolute;
    top: 0;
    left: 30px;
  `}
`;

const Divider = styled.hr`
  border: none;
  background-color: black;
  width: 95%;
  height: 1px;
  margin-bottom: 40px;
`;

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKeys: this.resolveDefaultKey(),
    };
  }

  resolveDefaultKey = () => {
    const { pathname } = this.props.history.location;

    if (pathname === '/') {
      return ['home'];
    }
    else if (pathname === '/signup') {
      return ['signup']
    }
    else {
      return ['/analytics']
    }

  };

  isAnalyticsComponent = () => {
    const { pathname } = this.props.history.location;
    return pathname === '/analytics'
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0, textAlign: 'right' }}>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={this.state.selectedKeys}
            style={{ lineHeight: '64px' }}
          >
            <LogoContainer>
              <h1> R | E | A | X </h1>
            </ LogoContainer>
            {this.isAnalyticsComponent() &&
              <Search />
            }
            <Menu.Item
              key="analytics"
              onClick={() => {
                history.push('/analytics');

                this.setState({
                  selectedKeys: ['analytics'],
                });
              }}
            >
              Analytics
            </Menu.Item>
            <Menu.Item
              key="home"
              onClick={() => {
                history.push('/');

                this.setState({
                  selectedKeys: ['home'],
                });
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="signup"
              onClick={() => {
                history.push('/signup');

                this.setState({
                  selectedKeys: ['signup'],
                });
              }}
            >
              Sign Up
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer
          className="reax-footer"
          style={{
            textAlign: 'justify',
            backgroundColor: 'white',
            fontSize: '.8em',
          }}
        >
          <Row
            gutter={64}
          >
            <Divider />
            <Col
              lg={12}
              sm={24}
            >
              <p>REAX is the top destination to track real estate markets and the economy. Follow real estate markets you care about most and get personalized news and alerts. Access daily information and investment updates to stay on top of the market.</p>
              <p>Track the performance of your real estate portfolioAdd markets and properties to watchlists (get notified when it goes on market) to get daily real estate information and personalized news. Find the financial information and key metrics you need with sleek intuitive navigation.</p>
              <p>Go beyond REITs and Real Estate ETFs and track properties, blocks, neighborhoods, towns, counties, zip codes, and states. Compare properties with interactive full charts and tables. Sign in to view and edit your portfolio on the go. Track holdings performance.</p>
              <p>REAX is an information and data aggregation service. REAX does not allow trading on its indices. REAX does not request your financial information, whether that may be bank account or payment information nor does it request passwords from external accounts.</p>
              <p>REAX makes no claim to be 100% accurate in its reporting of real estate markets. Reported markets have a minimum sample size of 30 properties. Price per square foot is defined as sales value for the property size and is calculated by dividing the sales value by the sum of square footage for one of more properties. REAX makes no claim to predict recurring phenomena known as "bubbles".</p>
            </Col>
            <Col
              lg={12}
              sm={24}
            >
              <p>REAX does not encourage the solicitation or harassment of owners of off-market properties.</p>
              <p>Real estate transactions may involve a high degree of risk. REAX is intended to assist an investment decision but makes no guarantee to the success of any investment.</p>
              <p>Third party information provided for product features, communications, social media communities, market prices, data and other information available through REAX are meant for informational purposes and are not intended as an offer or solicitation for the purchase or sale of any financial instrument or as an official confirmation of any transaction.</p>
              <p>Investors should be aware that system response, data, speed, and account access times are affected by many factors. The past performance of real estate markets, properties, blocks, neighborhoods, towns, counties, zip codes, and states do not guarantee future results or returns.</p>
              <p>Free usage refers to the elimination of a financial barrier to obtain the information aggregated through the REAX. There may be premium features which require transactions or fees to access.</p>
              <p>Real Estate Asset Exchange (REAX) is trademarked and a wholly owned subsidiary of CIBA Realty. By signing up for REAX you agree to comply with our terms and conditions.</p>
              <p style={{ fontWeight: 1000 }}>© 2018 REAX. All Rights Reserved.</p>
            </Col>
          </Row>
        </Footer>
      </Layout>
    );
  }
};

export default Container;

