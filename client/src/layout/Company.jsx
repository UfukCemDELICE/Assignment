import React from 'react'
import { Button, Form, Input, Modal } from 'antd';

export default function Company() {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div>
      <Modal
        title="Update Company"
        centered
        width={1000}
        >
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
      </Modal>
    </div>
  )
}
