import styled from 'styled-components';

export const ExpertContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #686868;
  width: 100%;
  @media (max-width:1224px) {
    justify-content: space-between;
  }
`;

export const ExpertDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`
export const ExpertTitle = styled.div`
  font-weight: bold;
  font-size: 0.8em;
`
export const ExpertName = styled.div`
  font-size: 0.8em;
`
export const ExpertPhoneNumber = styled.div`
  font-size: 0.8em;
`
export const ExpertDetailModal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const ExpertAvatar = styled.div`
  width: 30%;
`
export const ExpertData = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`
export const ExpertAbout = styled.div`
  font-size: 0.85em;
`
export const ExpertContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #686868;
`
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
export const UserContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
`
export const UserOtherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  height: 10vh;
  align-items: flex-end;
`
export const ContacatLocalExpertHeading = styled.div`
  display: flex;
  margin-bottom: 2%;
  font-weight: bold;
`
export const MessageSubmitButton = styled.div`
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: #2FD09E;
  width: 15%;
  display: flex;
  justify-content: center;
  margin-left: 85%;
  margin-top: 2%;
  border-radius: 25px;
`
export const MessageModalContainer = styled.div`
  border-radius: 50px;
`
export const MessageModalFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 0.6em;
  margin-top: 5%;
`
