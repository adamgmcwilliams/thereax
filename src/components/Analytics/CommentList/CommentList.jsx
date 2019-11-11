import React from 'react';
import { Input } from 'antd';
import Faker from 'faker';
import { Avatar } from 'antd';

import { CommentListContainer, CommentContainerHeading, NewCommentContainer, NewCommentUser } from './CommentList.js'
import Comment from './Comment';
import Server from '../../../apis/reaxServer';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] }
  }
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
          {this.renderComments()}
      </CommentListContainer>
    );
  }

  async componentDidMount() {
    try {
      let response = await Server.get('./comments');
      let comments  = response.data;
      this.setState({ comments: comments })
    } catch(error) {
      console.log("Error:", Error)
    }
  }

  renderComments = () => {
    return this.state.comments.map((comment) => <Comment comment={comment} />)
  }

}

export default CommentList;
