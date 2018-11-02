import React, { Component } from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  notification,
} from 'antd';
import styled from 'styled-components';

import './index.css';

const H1 = styled.h1`
  font-weight: 700;
  font-family: 'Fira Sans', sans-serif;
`;

const P = styled.p`
  font-family: 'Fira Sans', sans-serif;
`;

const FormItem = Form.Item;

const notifications = {
  success: {
    message: 'Thank you!',
    description: 'We received your email. We\'ll keep you posted',
  },
  error: {
    message: 'Something went wrong',
    description: 'Please try again with a valid email',
  }
};

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        };

        fetch(`/list/${values.email}`, config).then((response) => {
          return response.json();
        }).then((res) => {
          if (res.statusCode === 500) {
            return this.openNotificationWithIcon('error');
          }
          this.openNotificationWithIcon('success');
          return this.props.onSuccess();
        })
      }
    });
  }

  openNotificationWithIcon = (type) => {
    notification[type](notifications[type]);
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 5,
        },
      },
    };

    const formStyle = {
      padding: 35
    };

    const headerStyle = {
      sm: {
        span: 16,
        offset: 5,
      }
    };

    return (
      <Form style={formStyle} onSubmit={this.handleSubmit}>
        <Row>
          <Col
            {...headerStyle}
          >
            <H1> Make your money move </H1>
            <P> REAX lets you invest smarter </P>
          </Col>
        </Row>
        <FormItem
          {...tailFormItemLayout}
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input size="large" placeholder="email" />
          )}
        </FormItem>
        <FormItem
          {...tailFormItemLayout}
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input size="large" placeholder="password" type="password" />
          )}
        </FormItem>
        <FormItem
          {...tailFormItemLayout}
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input size="large" placeholder="confirm password" type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
