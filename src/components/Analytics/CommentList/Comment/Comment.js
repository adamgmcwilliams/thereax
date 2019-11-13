import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  width: 100%;
  justify-content: space-between;
`
export const CommentUser = styled.div`
`
export const CommentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const CommentText = styled.div`
  font-size: 1em;
`

export const CommentMetaDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
`
export const ComentTime = styled.div`
  font-size: 0.7em;
  width: 50%:
`
export const CommentLikesAndDislikes = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
`
export const CommentLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  cursor: pointer;
`
export const CommentDislikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  cursor: pointer;
`
export const TotalLikesAndDislikes = styled.div`
  font-size: 0.6em;
`
