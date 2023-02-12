import React, {useState} from 'react'
import  {useNavigate}  from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import '../App.css'

export default function SignedIn() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const toRegister = () => {
    navigate("/auth/register")
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
      setLoading(false);
      navigate('/');
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
    
  };
  return (
    <div className='App' >
      <br /> <br /> <br /> <br /> 
      <h1>Log In</h1>
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
          <Button type='link' onClick={toRegister} loading={loading}>Register</Button>
        </Form.Item>
      </Form>
    </Space>
    </div>
  );
}
