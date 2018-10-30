import React, { Component } from "react";
import { Row, Col, Menu, Icon, Switch, Form, Input, Button } from "antd";

const FormItem = Form.Item;

const { TextArea } = Input;

class ContactForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Name">
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "Please input your Name!" }]
            })(
              <Input
                // prefix={
                //   <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                // }
                placeholder="Name"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Phone">
            <Input placeholder="Phone Number" />
          </FormItem>

          <FormItem {...formItemLayout} label="Phone">
            <TextArea rows={4} placeholder="your Message Here" />
          </FormItem>
          <Button type="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default (ContactForm = Form.create({})(ContactForm));
