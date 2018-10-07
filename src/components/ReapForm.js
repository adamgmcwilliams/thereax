import React, { Component } from 'react';
import { Form, Input, Modal, notification } from 'antd';

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

class ReapForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
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
  };

  openNotificationWithIcon = (type) => {
    notification[type](notifications[type]);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const { message, showModal, onClose } = this.props;

    return (
      <Modal
        title="The Reax"
        visible={showModal}
        onOk={this.handleSubmit}
        onCancel={onClose}
        bodyStyle={{ textAlign: 'center' }}
      >
        <h3 className="modal_copy" >{ message }</h3>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="Email"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const WrappedFrom = Form.create()(ReapForm);

export default WrappedFrom;
