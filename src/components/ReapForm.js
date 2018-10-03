import React, { Component } from 'react';
import { Form, Input, Modal, notification } from 'antd';

const FormItem = Form.Item;

class ReapForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.openNotificationWithIcon('success');
        this.props.onSuccess();
      }
    });
  }

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Thank you!',
      description: 'We received your email. We\'ll keep you posted',
    });
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
        visible={showModal}
        onOk={this.handleSubmit}
        onCancel={onClose}
        className="reap_modal"
      >
        <h3 className="modal_copy">{ message }</h3>
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
