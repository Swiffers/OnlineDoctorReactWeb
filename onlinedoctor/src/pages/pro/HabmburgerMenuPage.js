import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
  Fa,
  HamburgerToggler
} from "mdbreact";
import DocsLink from "../DocsLink";

class NavbarPage extends Component {
  state = {
    collapse1: false,
    collapse2: true,
    collapse3: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (
      <Container>
        <DocsLink
          title="Hamburger Menu"
          href="https://mdbootstrap.com/docs/react/navigation/navbar/"
        />
        <Router>
          <div style={{ height: "1200px" }}>
            <Navbar color="amber lighten-4" style={{ marginTop: "20px" }} light>
              <Container>
                <NavbarBrand>Navbar</NavbarBrand>
                <HamburgerToggler
                  color="#d3531a"
                  id="hamburger1"
                  onClick={() => this.toggleSingleCollapse("collapse1")}
                />
                <Collapse isOpen={this.state.collapse1} navbar>
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-danger" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <HamburgerToggler
                  onClick={() => this.toggleSingleCollapse("collapse2")}
                  isOpen={true}
                  id="hamburger2"
                />
                <Collapse isOpen={this.state.collapse2} navbar>
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="indigo darken-2" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <HamburgerToggler
                  onClick={() => this.toggleSingleCollapse("collapse3")}
                  id="hamburger3"
                />
                <Collapse isOpen={this.state.collapse3} navbar>
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar style={{ marginTop: "20px" }} light>
              <Container>
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger6.svg?color=000"
                  onClick={this.toggleCollapse("navbarCollapse1")}
                />
                <Collapse
                  id="navbarCollapse1"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-primary" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="/docs/img/svg/arrow_right.svg"
                  onClick={this.toggleCollapse("navbarCollapse2")}
                />
                <Collapse
                  id="navbarCollapse2"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="light-blue lighten-4" style={{ marginTop: "20px" }}>
              <Container>
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger2.svg?color=fff"
                  onClick={this.toggleCollapse("navbarCollapse3")}
                />
                <Collapse
                  id="navbarCollapse3"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="pink lighten-4" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger1.svg?color=6a1b9a"
                  onClick={this.toggleCollapse("navbarCollapse5")}
                />
                <Collapse
                  id="navbarCollapse5"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="pink lighten-2" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger7.svg?color=BFE100"
                  onClick={this.toggleCollapse("navbarCollapse6")}
                />
                <Collapse
                  id="navbarCollapse6"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar
              color="bg-secondary mb-4"
              style={{ marginTop: "20px" }}
              dark
            >
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger5.svg?color=f3e5f5"
                  onClick={this.toggleCollapse("navbarCollapse7")}
                />
                <Collapse
                  id="navbarCollapse7"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-success" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger8.svg?color=E3005C"
                  onClick={this.toggleCollapse("navbarCollapse8")}
                />
                <Collapse
                  id="navbarCollapse8"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-info" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger9.svg?color=FF2C00"
                  onClick={this.toggleCollapse("navbarCollapse9")}
                />
                <Collapse
                  id="navbarCollapse9"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-warning " style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger4.svg?color=1729B0"
                  onClick={this.toggleCollapse("navbarCollapse10")}
                />
                <Collapse
                  id="navbarCollapse10"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-danger" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8"
                  onClick={this.toggleCollapse("navbarCollapse11")}
                />
                <Collapse
                  id="navbarCollapse11"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar
              color="orange lighten-4"
              style={{ marginTop: "20px" }}
              light
            >
              <Container>
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler
                  tag="button"
                  className="peach-gradient"
                  onClick={this.toggleCollapse("navbarCollapse12")}
                >
                  <span className="white-text">
                    <Fa icon="bars" />
                  </span>
                </NavbarToggler>
                <Collapse
                  id="navbarCollapse12"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="green lighten-4" style={{ marginTop: "20px" }} light>
              <Container>
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler
                  tag="button"
                  className="aqua-gradient"
                  onClick={this.toggleCollapse("navbarCollapse13")}
                >
                  <span className="white-text">
                    <Fa icon="bars" />
                  </span>
                </NavbarToggler>
                <Collapse
                  id="navbarCollapse13"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar
              color="purple lighten-4"
              style={{ marginTop: "20px" }}
              light
            >
              <Container>
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler
                  tag="button"
                  className="purple-gradient"
                  onClick={this.toggleCollapse("navbarCollapse14")}
                >
                  <span className="white-text">
                    <Fa icon="bars" />
                  </span>
                </NavbarToggler>
                <Collapse
                  id="navbarCollapse14"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>

            <Navbar color="bg-primary" style={{ marginTop: "20px" }} dark>
              <Container>
                <NavbarBrand className="white-text">Navbar</NavbarBrand>
                <NavbarToggler
                  tag="button"
                  className="blue-gradient"
                  onClick={this.toggleCollapse("navbarCollapse15")}
                >
                  <span className="white-text">
                    <Fa icon="bars" />
                  </span>
                </NavbarToggler>
                <Collapse
                  id="navbarCollapse15"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          </div>
        </Router>
      </Container>
    );
  }
}

export default NavbarPage;
