import React, { useEffect, useState } from "react";
import { Table, FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
//import Company from '../layout/Company';
export default function ProductList() {
  const [colums, setColums] = useState([]);
  const [data, setDataSource] = useState([]);

  useEffect(() => {
    fetch("http://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((result) => {
        const list = result.quotes || [];
        const firstObject = list[0] || {};
        const cols = [];
        for (const key in firstObject) {
          const col = {
            title: key,
            dataIndex: key,
          };
          cols.push(col);
        }
        setColums(cols);
        setDataSource(list);
      });
  }, []);
  const onAddProduct = () => {
    const random = parseInt(Math.random() * 1000);
    const newProduct = {
      id: random,
      quote: "testquotes" + random,
      author: "test" + random,
    };
    setDataSource((pre) => {
      return [...pre, newProduct];
    });
  };
  return (
    <div>
      <FloatButton
        onClick={onAddProduct}
        icon={<PlusOutlined />}
        type="primary"
        style={{ right: 94 }}
      />
      <Table columns={colums} dataSource={data} scroll={500} />
    </div>
  );
}
