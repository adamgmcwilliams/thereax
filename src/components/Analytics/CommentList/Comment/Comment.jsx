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
          <Avatar size={30} src={this.state.commentUserPhoto} />
        </CommentUser>
        <CommentContentContainer>
          <CommentText> {this.state.commentText} </CommentText>
          <CommentMetaDataContainer>
            <ComentTime> <Moment parse="YYYY-MM-DD HH:mm" fromNow> {this.state.commentTime} ago</Moment> </ComentTime>
            <CommentLikesAndDislikes>
              <CommentLikeContainer>
                <FontAwesomeIcon icon={faThumbsUp} size="xs" />
                <TotalLikesAndDislikes> {this.state.likes} </TotalLikesAndDislikes>
              </CommentLikeContainer>
              <CommentDislikeContainer>
               <FontAwesomeIcon icon={faThumbsDown} size="xs" />
               <TotalLikesAndDislikes> {this.state.dislikes} </TotalLikesAndDislikes>
              </CommentDislikeContainer>
            </CommentLikesAndDislikes>
          </CommentMetaDataContainer>
        </CommentContentContainer>
      </CommentContainer>
    )
  }
}

export default Comment;
