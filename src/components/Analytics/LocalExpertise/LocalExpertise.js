import styled from 'styled-components';

export const LocalExpertiseContainer = styled.div`
  margin-top: 5%;
  margin-left: 2%;
  height: 40vh;
  width: 12%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  color: #686868;
  overflow: scroll;
  @media (max-width:1224px) {
    margin-left: unset;
    width: 100%;
  }
`;

export const LocalExpertiseHeading = styled.div`
  font-size: 1.5em;
  display: flex;
  width: 100%;
  justify-content: center;
`
