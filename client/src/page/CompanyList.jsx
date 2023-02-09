import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import CompanyService from "../service/companyService";
export default function CompanyList() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    let companyService = new CompanyService();
    companyService.getCompany().then(result=>setCompanies(result.data.data)).catch();
  });
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
          {companies.map((company) => (
            <Table.Row key={company.id}>
              <Table.Cell collapsing></Table.Cell>
              <Table.Cell>{company.CompanyName}</Table.Cell>
              <Table.Cell>{company.IncorporationCountry}</Table.Cell>
              <Table.Cell>{company.CompanyLegalNumber}</Table.Cell>
              <Table.Cell>{company.website}</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
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
