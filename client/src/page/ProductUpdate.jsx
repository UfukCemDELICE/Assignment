import React from 'react'
import { Button, Form, Input } from 'antd';
import '../App.css'

export default function ProductUpdate() {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className='App'>
        <Form>
          <Form.Item name="productName" rules={[{ required: true }]}>
            <Input placeholder='Product Name'/>
          </Form.Item>
          <Form.Item name="productCategory" rules={[{ required: true }]}>
            <Input placeholder='Product Category'/>
          </Form.Item>
          <Form.Item name="productAmount" rules={[{ required: true }]}>
            <Input placeholder='Product Amount'/>
          </Form.Item>
          <Form.Item name="amountUnit" rules={[{ required: true }]}>
            <Input placeholder='Amount Unit'/>
          </Form.Item>
          <Form.Item name="company" rules={[{ required: true }]}>
            <Input placeholder='Company'/>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
        </Form>
    </div>
  )
}
