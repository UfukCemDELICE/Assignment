import React from 'react'
import { Card, Space, Typography  } from 'antd';
const { Title } = Typography;

export default function MainPage() {
  const number = 0
  const lastAddedCompanies = []

  const title = (`There are ${number} companies in the system right now, last added companies are : ${lastAddedCompanies}`)
  return (
    
    <div>
    <Space align='center'>
      <Card
        
        style={{
        width: 1080,
      }}
    cover={<img alt="example" src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />}
  >
      
      <Title level={3}>{title}</Title>
      </Card>
      
    </Space>
    
      <br/> <br/> <br/>
    </div>
  )
}
