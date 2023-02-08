import React, {useEffect, useState} from 'react'
import {Table, FloatButton} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
export default function CompanyList() {
  const [colums, setColums] = useState([]);
  const [data, setDataSource] = useState([]);
  
  useEffect(() => {
    fetch('http://dummyjson.com/todos')
      .then(res => res.json())
      .then((result)=> {
        const list = result.todos || [];
        const firstObject = list[0] || {};
        const cols = [];
        for (const key in firstObject){
          const col = { 
            title: key,
            dataIndex: key,
          }
          cols.push(col);
        }
        setColums(cols);
        setDataSource(list);
      });
  }, []);
  return (
    <div>
      <FloatButton icon={<PlusOutlined />} type="primary" style={{right: 94,}}/>
      <Table columns={colums} dataSource={data} scroll={500}/>
    </div>
  )
}
