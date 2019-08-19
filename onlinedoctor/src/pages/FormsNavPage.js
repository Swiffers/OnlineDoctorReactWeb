import React from "react";
import { Container, Row, Col, Jumbotron, Fa, NavLink } from "mdbreact";

class ComponentsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1>
                <Fa icon="edit" className="grey-text mr-2" />
                Forms
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/forms"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Forms
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/input"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Input
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/validation"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Validation
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                {/* PRO-START */}
                <h6 className="mt-3 grey-text">PRO </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/pro/autocomplete"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Autocomplete
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/pro/forms"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Forms
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/pro/input"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Input
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/pro/select"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Material Select
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/forms/pro/slider">
                  <h5 style={{ margin: "0" }} className="justify-content-between d-flex align-items-center">
                    Slider
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/forms/pro/validation">
                  <h5 style={{ margin: "0" }} className="justify-content-between d-flex align-items-center">
                    Validation
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                {/* PRO-END */}
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ComponentsPage;
