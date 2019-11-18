import styled from 'styled-components';

export const MarketDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin-top: 5%;
  color: #686868;
  width: 20%;
  margin-left: 3%;
  @media (max-width:1224px) {
    width: 100%;
    justify-content: center;
    align-item:center;
    margin-top: unset;
  }
`;

export const MarketName = styled.div`
  @media (max-width:1224px) {
    display:none;
  }
  font-size: 2em;
`

export const MarketAveragePrice = styled.div`
  @media (max-width:1224px) {
    display:none;
  }
  font-size: 2em;
`

export const PriceChange = styled.div`
  @media (max-width:1224px) {
    display:none;
  }
  font-size: 1em;
  font-weight: 100;
`
export const MeasurementDetailTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  height: 23.8vh;
  justify-content: space-evenly;
`
export const MeasurementDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MeasurementDetailRowItem = styled.div`
  font-weight: 100;
  width: 100%;
`
