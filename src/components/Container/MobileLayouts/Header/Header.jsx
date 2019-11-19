import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

import { MobileNavBar, LogoContainer, SearchContainer } from './Header.js';
import Search from '../../../Search';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="0">
      <a href="/signup">Sign Up</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="/analytics">Analytics</a>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
  render() {
    let viewPortWidth = window.innerWidth - 2;
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
        {this.isAnalyticsRoute() &&
          <SearchContainer>
            <Search width={viewPortWidth} />
          </SearchContainer>
        }
      </MobileNavBar>
    );
  }

  isAnalyticsRoute = () => {
    return '/analytics' === this.props.location.pathname
  }
}

export default withRouter(Header);
