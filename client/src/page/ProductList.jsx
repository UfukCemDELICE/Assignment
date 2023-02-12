import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import ProductService from "../service/productService";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data.getProduct));
  }, []);
  return (
    <div>
      <br /> <br /> <br /> <br />
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Product Category</Table.HeaderCell>
            <Table.HeaderCell>Product Amount</Table.HeaderCell>
            <Table.HeaderCell>Amount Unit</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product._id}>
              <Table.Cell collapsing></Table.Cell>
              <Table.Cell>{product.Company[0]}</Table.Cell>
              <Table.Cell>{product.ProductName}</Table.Cell>
              <Table.Cell>{product.ProductCategory}</Table.Cell>
              <Table.Cell>{product.ProductAmount}</Table.Cell>
              <Table.Cell>{product.AmountUnit}</Table.Cell>
              <Table.Cell><Button positive>Edit</Button><Button negative onClick={(e)=>{
                  fetch(`http://localhost:5000/deleteProduct${product._id}`, {
                  method: "DELETE",
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  return response.json();
                })
                .then(data => setProducts(data.getProduct))
                .catch(error => {
                  console.error("There was a problem with the fetch operation:", error);
                }, [])}}  >Delete</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="6">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                as={Link}
                to="/addProduct"
              >
                <Icon name="plus" /> Add Product
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <br /> <br /> <br /> <br />
    </div>
  );
}
