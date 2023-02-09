import React from 'react'
import { Button, Form, Input } from 'antd';
import '../App.css'

export default function CompanyUpdate() {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className='App'>
        <Form>
          <Form.Item name="companyName" rules={[{ required: true }]}>
            <Input placeholder='Company Name'/>
          </Form.Item>
          <Form.Item name="country" rules={[{ required: true }]}>
            <Input placeholder='Country'/>
          </Form.Item>
          <Form.Item name="legalNum" rules={[{ required: true }]}>
            <Input placeholder='Legal Number'/>
          </Form.Item>
          <Form.Item name="website" rules={[{ required: true }]}>
            <Input placeholder='https://www.companypage.com'/>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
        </Form>
    </div>
  )
}
