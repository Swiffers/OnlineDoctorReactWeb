import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  TableEditable
} from "mdbreact";
import DocsLink from "../DocsLink";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];

const TableEditablePage = props => {
  return (
    <Container className="mt-3">
      <DocsLink
        title="Table Editable"
        href="https://mdbootstrap.com/docs/react/tables/editable/"
      />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader
              tag="h3"
              className="text-center font-weight-bold text-uppercase py-4"
            >
              Table Editable
            </CardHeader>
            <CardBody>
              <TableEditable data={data} columns={columns} striped bordered />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TableEditablePage;
