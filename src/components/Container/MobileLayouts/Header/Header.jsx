import React from 'react';

import { MobileNavBar, LogoContainer, SearchContainer } from './Header.js';
import Search from '../../../Search';

class Header extends React.Component {
  render() {
    return(
      <MobileNavBar>
        <LogoContainer>
          R | E | A | X
        </ LogoContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </MobileNavBar>
    );
  }
}

export default Header;
