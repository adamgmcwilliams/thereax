import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import { MobileNavBar, LogoContainer, SearchContainer } from './Header.js';
import Search from '../../../Search';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/signup">Sign Up</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="/analytics">Analytics</a>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
  render() {
    return(
      <MobileNavBar>
        <LogoContainer>
          R | E | A | X
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="bars" style={{ fontSize:"1.5em" }}/>
            </a>
          </Dropdown>
        </ LogoContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </MobileNavBar>
    );
  }
}

export default Header;
