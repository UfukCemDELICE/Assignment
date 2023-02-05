import React from 'react'
//import 'antd/dist/antd.css';
//import './index.css';
import { Layout, Menu } from 'antd';


const { Header} = Layout;
export default function Navigation() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    </Layout>    
  )
}
