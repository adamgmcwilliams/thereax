import React from 'react';
import Faker from 'faker';
import { Avatar } from 'antd';
import Moment from 'react-moment';

import {
  CommentContainer,
  CommentUser,
  CommentContentContainer,
  CommentText,
  CommentMetaDataContainer,
  ComentTime,
  CommentLikesAndDislikes
} from './Comment.js'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    let { comment } = props;
    this.state = { commentText: comment.comment, commentTime: comment.timestamp, commentUserPhoto: comment.userPhoto }
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
            <CommentLikesAndDislikes> </CommentLikesAndDislikes>
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
}

export default Comment;
