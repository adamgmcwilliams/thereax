import styled from 'styled-components';

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  font-size: 12px;
  margin-left: 3%;
  justify-content: space-around;
  height: 50vh;
  @media (max-width: 1224px) {
    height: unset;
    width: 100%;
  }
`
export const CommentContainerHeading = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  @media (max-width: 1224px) {
    text-decoration: underline;
  }
`
export const NewCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const NewCommentUser = styled.div`
  width: 11%;
`
export const PreviousComments = styled.div`
  height: 100%;
  overflow: scroll;
`
