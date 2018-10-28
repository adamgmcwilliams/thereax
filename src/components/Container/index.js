import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import history from '../../helpers/history';

const { Header, Content } = Layout;

class Container extends Component {
  render() {
    return (
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item
            key="signup"
            onClick={() => {
              history.push('/signup');
            }}
          >Sign Up</Menu.Item>
        </Menu>
      </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
};

export default Container;

