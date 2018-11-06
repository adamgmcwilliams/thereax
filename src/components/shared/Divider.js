import React from 'react';
import styled from 'styled-components';
import media from '../../helpers/media';

const Hr = styled.hr`
  border: none;
  width: 100%;
  height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: black;

  ${media.sm`
    margin-top: 20px;
    border: none;
    width: 100%;
    height: 1px;
    background-color: black;
    padding-right: 125px;
    padding-left: 125px;
  `}
`;

const Divider = () => {
  return <Hr />;
};

export default Divider;

