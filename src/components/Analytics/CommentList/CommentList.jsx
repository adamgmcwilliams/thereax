import React from 'react';
import { Input } from 'antd';
import Faker from 'faker';
import { Avatar } from 'antd';

import { CommentListContainer, CommentContainerHeading, NewCommentContainer, NewCommentUser } from './CommentList.js'
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    return(
      <CommentListContainer>
        <CommentContainerHeading>
          Word of Mouth
        </CommentContainerHeading>
        <NewCommentContainer>
          <NewCommentUser>
            <Avatar size={30} src={Faker.image.avatar()} />
          </NewCommentUser>
          <Input placeholder="Comment..." maxLength={4000} width={90} />
        </NewCommentContainer>
        <Comment commentText="Hello its good" commentTime="6 hours go" />
        <Comment commentText="Hello its good" commentTime="6 hours go" />
        <Comment commentText="Hello its good" commentTime="6 hours go" />
        <Comment commentText="Hello its good" commentTime="6 hours go" />
        <Comment commentText="Hello its good" commentTime="6 hours go" />
      </CommentListContainer>
    );
  }
}

export default CommentList;
