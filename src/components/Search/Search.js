import styled from 'styled-components';

import media from '../../helpers/media';

export const SearchBoxContainer = styled.div`
  position: absolute;
  bottom: 2%;
  left: 20%;
  width: 35%;
  bottom: 8%;
  ${media.sm`
    position: absolute;
    bottom: 8%;
    left: 20%;
  `}
`;
