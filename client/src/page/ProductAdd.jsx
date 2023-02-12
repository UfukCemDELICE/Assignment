import React, {useState} from 'react'
import { Button, Form, Input, Space } from 'antd';
import '../App.css'
import { useNavigate } from 'react-router-dom';
export default function ProductAdd() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    fetch('http://localhost:5000/createProduct', {
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
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
    navigate('/getProduct');
  };
  return (
    <div className='App'>
      <br /> <br /> <br /> <br />
      <Space align='center'>
        <Form onFinish={onFinish}>
          <h1>Add Product</h1>
          <Form.Item name="Company" rules={[{ required: true }]}>
            <Input placeholder='Company'/>
          </Form.Item>
          <Form.Item name="ProductName" rules={[{ required: true }]}>
            <Input placeholder='Product Name'/>
          </Form.Item>
          <Form.Item name="ProductCategory" rules={[{ required: true }]}>
            <Input placeholder='Product Category'/>
          </Form.Item>
          <Form.Item name="ProductAmount" rules={[{ required: true }]}>
            <Input placeholder='Product Amount'/>
          </Form.Item>
          <Form.Item name="AmountUnit" rules={[{ required: true }]}>
            <Input placeholder='Amount Unit'/>
          </Form.Item>
          
          <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            Submit
          </Button>
          </Form.Item>
        </Form>
        </Space>
    </div>
  )
}
