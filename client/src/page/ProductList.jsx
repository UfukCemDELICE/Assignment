import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import ProductService from "../service/productService";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProduct()
      .then((result) => setProducts(result.data.data))
      .catch();
  });
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
            <Table.Row key={product.id}>
              <Table.Cell collapsing></Table.Cell>
              <Table.Cell>{product.CompanyName}</Table.Cell>
              <Table.Cell>{product.ProductName}</Table.Cell>
              <Table.Cell>{product.ProductCategory}</Table.Cell>
              <Table.Cell>{product.ProductAmount}</Table.Cell>
              <Table.Cell>{product.AmountUnit}</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
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
