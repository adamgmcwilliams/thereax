import React, { Component } from 'react';
import { Menu, Layout } from 'antd';

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
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
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

