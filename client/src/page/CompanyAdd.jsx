import React, { useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import '../App.css'
import { useNavigate } from 'react-router-dom';

export default function CompanyAdd() {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    fetch('http://localhost:5000/createCompany', {
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
    navigate('/getCompany');
  };

  return (
    <div className='App'>
      <br /> <br /> <br /> <br />
      <Space align='center'>
        <Form onFinish={onFinish} >
          <h1>Add Company</h1>
          <Form.Item name="CompanyName" rules={[{ required: true }]}>
            <Input placeholder='Company Name'/>
          </Form.Item>
          <Form.Item name="IncorporationCountry" rules={[{ required: true }]}>
            <Input placeholder='Country'/>
          </Form.Item>
          <Form.Item name="CompanyLegalNumber" rules={[{ required: true }]}>
            <Input placeholder='Legal Number'/>
          </Form.Item>
          <Form.Item name="website" rules={[{ required: true }]}>
            <Input placeholder='https://www.companypage.com'/>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" loading={loading}>Submit</Button> 
            
          </Form.Item>
        </Form>
        </Space>
    </div>
  )
}
