import React from 'react';
import Faker from 'faker';
import { Avatar } from 'antd';

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
    let { commentText, commentTime } = props;
    this.state = { commentText: commentText, commentTime: commentTime }
  }
  render() {
    return(
      <CommentContainer>
        <CommentUser>
          <Avatar size={30} src={Faker.image.avatar()} />
        </CommentUser>
        <CommentContentContainer>
          <CommentText> {this.getCommentText()} </CommentText>
          <CommentMetaDataContainer>
            <ComentTime> {this.getCommentTime()} </ComentTime>
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
}

export default Comment;
