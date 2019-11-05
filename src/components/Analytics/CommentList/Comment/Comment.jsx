import React from 'react';
import { Avatar } from 'antd';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import {
  CommentContainer,
  CommentUser,
  CommentContentContainer,
  CommentText,
  CommentMetaDataContainer,
  ComentTime,
  CommentLikesAndDislikes,
  CommentLikeContainer,
  CommentDislikeContainer,
  TotalLikesAndDislikes
} from './Comment.js'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    let { comment } = props;
    this.state = { commentText: comment.comment, commentTime: comment.timestamp, commentUserPhoto: comment.userPhoto, likes: comment.likes,
      dislikes: comment.dislikes }
  }
  render() {
    return(
      <CommentContainer>
        <CommentUser>
          <Avatar size={30} src={this.getCommentUserPhoto()} />
        </CommentUser>
        <CommentContentContainer>
          <CommentText> {this.getCommentText()} </CommentText>
          <CommentMetaDataContainer>
            <ComentTime> <Moment parse="YYYY-MM-DD HH:mm" fromNow> {this.getCommentTime()} ago</Moment> </ComentTime>
            <CommentLikesAndDislikes>
              <CommentLikeContainer>
                <FontAwesomeIcon icon={faThumbsUp} size="xs" />
                <TotalLikesAndDislikes> {this.getLikes()} </TotalLikesAndDislikes>
              </CommentLikeContainer>
              <CommentDislikeContainer>
               <FontAwesomeIcon icon={faThumbsDown} size="xs" />
               <TotalLikesAndDislikes> {this.getDislikes()} </TotalLikesAndDislikes>
              </CommentDislikeContainer>
            </CommentLikesAndDislikes>
          </CommentMetaDataContainer>
        </CommentContentContainer>
      </CommentContainer>
    )
  }

  getCommentText = () => {
    return this.state.commentText;
  }

  getCommentTime = () => {
    return this.state.commentTime;
  }

  getCommentUserPhoto = () => {
    return this.state.commentUserPhoto;
  }

  getLikes = () => {
    return this.state.likes;
  }

  getDislikes = () => {
    return this.state.dislikes;
  }
}

export default Comment;
