import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import '../App.css'
//TODO: Jwt Authentication and Authorization will be added 
export default function SignedIn() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='App' >
      <br /> <br /> <br /> <br /> 
      <h1>Log In & Sign Up</h1>
      <br /> <br /> 
    <Space align='center'> 
      
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Space>
    </div>
  );
}
