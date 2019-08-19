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
                <Fa icon="bars" className="grey-text mr-2" />
                Navigation
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/navbar"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Navbar
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/breadcrumb"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Breadcrumb
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/footer"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Footer
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                {/* PRO-START */}
                <h6 className="mt-3 grey-text">PRO </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/pro/double"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Double Navigation
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/pro/footer"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Footer
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/pro/hamburger-menu"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Hamburger Menu
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/pro/scrollspy"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    ScrollSpy
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/pro/sidenav"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    SideNav
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
