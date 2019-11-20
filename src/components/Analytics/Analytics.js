import styled from 'styled-components';

export const MarketDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  margin-top: 4%;
  width: 100%;
  justify-content: center space-around;
`
export const MobileMarketDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin-top: 4%;
  width: 100%;
  justify-content: center space-around;
`

export const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #686868;
  font-size: 12px;
  height: 100vh;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  width: 65%;
  @media (max-width: 1224px) {
    width: 100%;
  }
`
export const AboutHeading = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  @media (max-width: 1224px) {
    text-decoration: underline;
  }
`
export const AboutText = styled.div`
`
export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const Stats = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: underline;
  margin-left: 3%;
`
