import React from 'react'
import { Card, Space, Typography  } from 'antd';
const { Title } = Typography;
//TODO: Replace the X's with variables
export default function MainPage() {
  return (
    <Space align='center'>
      <Card
        
        style={{
        width: 1080,
      }}
    cover={<img alt="example" src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />}
  >
      
      <Title level={3}>There are X companies in the system right now, last added companies are : xxxx - xxxx - xxxx</Title>
      </Card>
      
    </Space>
  )
}
