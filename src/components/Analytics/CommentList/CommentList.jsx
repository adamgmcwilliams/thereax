import React from 'react';
import { Input } from 'antd';
import Faker from 'faker';
import { Avatar } from 'antd';

import { CommentListContainer, CommentContainerHeading, NewCommentContainer, NewCommentUser, PreviousComments } from './CommentList.js'
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
          <Input placeholder="Comment..." maxLength={4000} width={90} onPressEnter={this.addNewComment} />
        </NewCommentContainer>
          <PreviousComments>
            {this.renderComments()}
          </PreviousComments>
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

  addNewComment = () => {
    let comment = { "username": "New Comment User",
      "userPhoto": "https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg",
      "timestamp": "2019-11-13T06:45:32.956Z",
      "likes": 10,
      "dislikes": 10,
      "comment": "New comment Added",
      "replies": []
    }
    let updatedComments = [...this.state.comments, comment];
    this.setState({ comments: updatedComments })
  }

  renderComments = () => {
    return this.state.comments.map((comment) => <Comment comment={comment} />)
  }

}

export default CommentList;
