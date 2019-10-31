import React from 'react';
import { Input } from 'antd';

import { SearchBoxContainer } from './Search.js';

class Search extends React.Component {
  render() {
    return(
      <SearchBoxContainer >
        <Input placeholder="Search Districts" maxLength={5000} width={100} />
      </ SearchBoxContainer>
    );
  }
}

export default Search;
