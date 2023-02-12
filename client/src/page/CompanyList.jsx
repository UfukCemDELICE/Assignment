import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import CompanyService from "../service/companyService";

export default function CompanyList() {
  
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getCompany")
      .then((res) => res.json())
      .then((data) => setCompanies(data.getCompany));
  }, []);

  
  return (
    <div>
      <br /> <br /> <br /> <br />
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Company Legal Number</Table.HeaderCell>
            <Table.HeaderCell>Incorporation Country</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {companies.map((getCompany) => (
            <Table.Row key={getCompany._id}>
              <Table.Cell collapsing></Table.Cell>
              <Table.Cell>{getCompany.CompanyName}</Table.Cell>
              <Table.Cell>{getCompany.CompanyLegalNumber}</Table.Cell>
              <Table.Cell>{getCompany.IncorporationCountry}</Table.Cell>
              <Table.Cell>{getCompany.website}</Table.Cell>
              <Table.Cell><Button positive>Edit</Button><Button negative onClick={(e)=>{
                  fetch(`http://localhost:5000/deleteCompany${getCompany._id}`, {
                  method: "DELETE",
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  return response.json();
                })
                .then(data => {
                  console.log(data);
                })
                .catch(error => {
                  console.error("There was a problem with the fetch operation:", error);
                }, []);
              }}>Delete</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="5">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                as={Link}
                to="/addCompany"
              >
                <Icon name="plus" /> Add Company
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <br /> <br /> <br /> <br />
    </div>
  );
}
