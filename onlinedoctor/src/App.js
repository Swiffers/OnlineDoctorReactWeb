import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu,
  DropdownItem,
  Fa,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import firebase from './firebase';

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
      modal1: false,
      modal2: false,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleChangeFirstName(event) {
    this.setState({first_name: event.target.value})
  }

  handleChangeLastName(event) {
    this.setState({last_name: event.target.value})
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  handleSignInSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img
                src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMC40NjM0OCI+PHRpdGxlPmxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0xOC45MTA3LDYuNjMyNTdoMHEtLjM2NzIxLS4xMjYtLjc0MDQyLS4yMzMzLjA2MTg3LS4yNTE0MS4xMTQ0MS0uNTA1Yy41NjA0NS0yLjcyMDY0LjE5NC00LjkxMjM3LTEuMDU3MzktNS42MzM4Ni0xLjE5OTgtLjY5Mi0zLjE2MjEuMDI5NTItNS4xNDM5NCwxLjc1NDE0cS0uMjkyOTMuMjU1NS0uNTcyNjcuNTI1NTQtLjE4NzI3LS4xNzk1MS0uMzgxMS0uMzUyQzkuMDUyNTcuMzQzOSw2Ljk3MDY2LS40MzMxNiw1LjcyMDU4LjI5MDQ2LDQuNTIxOTEuOTg0MzYsNC4xNjY4NiwzLjA0NDg5LDQuNjcxNDQsNS42MjMyMnEuMDc1My4zODMuMTcuNzYxNzljLS4yOTQ1OC4wODM2Ny0uNTc5MDguMTcyODQtLjg1MTI3LjI2NzcxQzEuNTU1MTQsNy41MDE2NSwwLDguODMyMjUsMCwxMC4yMTIzMWMwLDEuNDI1NDYsMS42NjkzNSwyLjg1NTIsNC4yMDU3NSwzLjcyMnEuMzA4NS4xMDQ5NC42MjE5My4xOTQ0Mi0uMTAxNzkuNDA4LS4xODA2OC44MjExNGMtLjQ4MTA2LDIuNTMzNTQtLjEwNTM1LDQuNTQ1MjEsMS4wOTAxNyw1LjIzNDg0LDEuMjM0ODEuNzEyLDMuMzA3MjUtLjAxOTg1LDUuMzI1MzMtMS43ODM4N3EuMjM5MjYtLjIwOTE3LjQ3OTk0LS40NDIzOC4zMDI5LjI5MjI1LjYyMTczLjU2NzI3YzEuOTU0NzcsMS42ODIwNywzLjg4NTMxLDIuMzYxMzIsNS4wNzk4MiwxLjY2OTg2LDEuMjMzNjktLjcxNDE2LDEuNjM0NTQtMi44NzUyNSwxLjExNC01LjUwNDU5cS0uMDU5NTUtLjMwMTI0LS4xMzc5Mi0uNjE0ODEuMjE4MzQtLjA2NDQzLjQyNzcyLS4xMzM1NUMyMS4yODQ1NCwxMy4wNjkxNSwyMywxMS42NTY4MSwyMywxMC4yMTIzMiwyMyw4LjgyNzI2LDIxLjM5NDc4LDcuNDg3NzEsMTguOTEwNyw2LjYzMjU3Wk0xMi43Mjg0LDIuNzU1ODFDMTQuNDI2NDYsMS4yNzgsMTYuMDEzNDYuNjk0NTcsMTYuNzM2NTcsMS4xMTE2aDBjLjc3MDE0LjQ0NDIxLDEuMDY5NzEsMi4yMzU0LjU4NTgsNC41ODQ0MXEtLjA0NzU4LjIyOTUzLS4xMDM0Mi40NTcyNGEyMy41Mzc1MiwyMy41Mzc1MiwwLDAsMC0zLjA3NTI3LS40ODU4NEEyMy4wODEyOCwyMy4wODEyOCwwLDAsMCwxMi4xOTk1LDMuMjQwOTRRMTIuNDU3ODgsMi45OTE4NCwxMi43Mjg0LDIuNzU1ODFaTTYuNzkxMTEsMTEuMzkxMjRxLjMxMi42MDI2NS42NTIwNywxLjE5MDEzLjM0NjkyLjU5OTExLjcyMjEsMS4xODExN2EyMC45MjE2OCwyMC45MjE2OCwwLDAsMS0yLjExOTY3LS4zNDA4QzYuMjQ4NjcsMTIuNzY2LDYuNDk4ODcsMTIuMDg0NDMsNi43OTExMSwxMS4zOTEyNFpNNi43OSw5LjA4MDQxYy0uMjg2MTMtLjY3ODYzLS41MzA5My0xLjM0NTg2LS43MzA4NS0xLjk5MDE5LjY1NjI0LS4xNDY4OCwxLjM1Ni0uMjY2ODksMi4wODUxNi0uMzU4cS0uMzY2MTEuNTcxLS43MDUxLDEuMTU4NzdRNy4xMDA3Niw4LjQ3OCw2Ljc5LDkuMDgwNDFabS41MjIyOCwxLjE1NTUycS40NTQxMS0uOTQ1MTcuOTc4My0xLjg1NDJ2LjAwMDJxLjUyMzY5LS45MDg1NywxLjExNTIxLTEuNzc1NDJjLjY4NC0uMDUxNzEsMS4zODUzNi0uMDc4NzksMi4wOTQzMi0uMDc4NzkuNzEyMTIsMCwxLjQxNDM3LjAyNzI4LDIuMDk4MTkuMDc5NHEuNTg1MTQuODY0ODcsMS4xMDgxOCwxLjc2OTQxLjUyNTY1LjkwNjM1Ljk5MTUzLDEuODQ1NDUtLjQ2MDgzLjk0ODE3LS45ODgyOCwxLjg2MTczaC0uMDAwMXEtLjUyMjYxLjkwNzg2LTEuMTAzNCwxLjc4MDNjLS42ODI0LjA0ODc2LTEuMzg3Ni4wNzM5LTIuMTA2MjMuMDczOS0uNzE1NjgsMC0xLjQxMTkzLS4wMjIyOS0yLjA4MjQxLS4wNjU3NXEtLjU5NTU1LS44Njk5NS0xLjEyNDA2LTEuNzgzMDVRNy43Njc4OSwxMS4xODE0OCw3LjMxMjI3LDEwLjIzNTkzWm04LjI0ODUzLDIuMzM4NjJxLjM0Ny0uNjAxODIuNjY3LTEuMjE4NjNoMGEyMC44NjY3MSwyMC44NjY3MSwwLDAsMSwuNzcyMzgsMi4wMjMyNywyMC44NTE2NCwyMC44NTE2NCwwLDAsMS0yLjE0NTUyLjM2NTczUTE1LjIxOTM1LDEzLjE2NjgyLDE1LjU2MDgsMTIuNTc0NTVabS42NTc2Ny0zLjQ5MzQzcS0uMzE4ODMtLjYwNS0uNjYxNjMtMS4xOTY4NGgwcS0uMzM3MjctLjU4MjU4LS42OTk0LTEuMTUwMjJjLjczMzkuMDkyNjMsMS40MzcuMjE1NzksMi4wOTcxNy4zNjY1NEEyMC45NTkwOSwyMC45NTkwOSwwLDAsMSwxNi4yMTg0Nyw5LjA4MTEyWk0xMS41MTEsMy45NDM1OWEyMS4wMTI4OCwyMS4wMTI4OCwwLDAsMSwxLjM1MzUsMS42MzM5M3EtMS4zNTg0My0uMDY0MTktMi43MTg0LS4wMDA2MUMxMC41OTMsNC45ODc2NSwxMS4wNTA3LDQuNDQwMjIsMTEuNTExLDMuOTQzNTlaTTYuMjEyODQsMS4xNDA4MWMuNzY5NTMtLjQ0NTQzLDIuNDcwOTUuMTg5NzMsNC4yNjQyOCwxLjc4Mi4xMTQ2MS4xMDE3OS4yMjk3NC4yMDgzNi4zNDUwNy4zMTg2QTIzLjU0NTQyLDIzLjU0NTQyLDAsMCwwLDguODYyOTQsNS42NjYwOGEyNC4wMDgsMjQuMDA4LDAsMCwwLTMuMDY5MTYuNDc3cS0uMDg4LS4zNTIyOC0uMTU4MDgtLjcwODY2di4wMDAxQzUuMjAzMzksMy4yMjUzNiw1LjQ5MDQ0LDEuNTU5LDYuMjEyODQsMS4xNDA4MVpNNS4wOTEzMiwxMy4xODIzM3EtLjI4Ni0uMDgxODctLjU2Nzc4LS4xNzc3M0E4LjMyMzcxLDguMzIzNzEsMCwwLDEsMS44NDEsMTEuNTc5NTVhMi4wMzA3MiwyLjAzMDcyLDAsMCwxLS44NTg0OS0xLjM2NzI0YzAtLjgzNzQyLDEuMjQ4NjUtMS45MDU3MSwzLjMzMTE3LTIuNjMxNzhxLjM5MjA4LS4xMzYxLjc5MTYyLS4yNDkwOGEyMy41NjQ1NSwyMy41NjQ1NSwwLDAsMCwxLjEyMSwyLjkwNDc4QTIzLjkyMjQ3LDIzLjkyMjQ3LDAsMCwwLDUuMDkxMzIsMTMuMTgyMzNaTTEwLjQxNTk0LDE3LjY2MWE4LjMyMTYxLDguMzIxNjEsMCwwLDEtMi41NzQ2NywxLjYxMTg0aC0uMDAwMWEyLjAzMDQyLDIuMDMwNDIsMCwwLDEtMS42MTMwNi4wNjA2N2MtLjcyNTU2LS40MTgzNi0xLjAyNzA2LTIuMDMzNzYtLjYxNTczLTQuMjAwMzVxLjA3MzM3LS4zODQwNy4xNjgtLjc2MzYzYTIzLjEwNDQ0LDIzLjEwNDQ0LDAsMCwwLDMuMDk5NS40NDg2OSwyMy45MDk1NCwyMy45MDk1NCwwLDAsMCwxLjk3NDMxLDIuNDM5MjlRMTAuNjQsMTcuNDY0NTksMTAuNDE1OTQsMTcuNjYxWm0xLjEyMjIzLTEuMTEwNTNjLS40NjU2OS0uNTAyNTMtLjkzMDE1LTEuMDU4MzEtMS4zODM4My0xLjY1NjEycS42NjA1MS4wMjYsMS4zNDU2Ni4wMjYwNi43MDMyNiwwLDEuMzg4NDEtLjAzMDg0QTIwLjg5NDI1LDIwLjg5NDI1LDAsMCwxLDExLjUzODE3LDE2LjU1MDQ1Wm01Ljk2NjUxLDEuMzY3YTIuMDMwMzksMi4wMzAzOSwwLDAsMS0uNzUzLDEuNDI3OGMtLjcyNDg1LjQxOTU4LTIuMjc1LS4xMjU4MS0zLjk0NjU5LTEuNTY0MzFxLS4yODc1LS4yNDczNS0uNTc4MzctLjUyNzI3YTIzLjA4OTE0LDIzLjA4OTE0LDAsMCwwLDEuOTI3OS0yLjQ0OCwyMi45MzY0NywyMi45MzY0NywwLDAsMCwzLjExNTA3LS40ODAxNHEuMDcwMjQuMjg0LjEyNDQ5LjU1NjM4aDBBOC4zMiw4LjMyLDAsMCwxLDE3LjUwNDY4LDE3LjkxNzQ5Wm0uODM0MTctNC45MDczOWgtLjAwMDFjLS4xMjU3MS4wNDE2My0uMjU0NzguMDgxODQtLjM4NjI5LjEyMDgyYTIzLjA2MTIxLDIzLjA2MTIxLDAsMCwwLTEuMTY0NjgtMi45MTM3MywyMy4wNTExMiwyMy4wNTExMiwwLDAsMCwxLjExOTM4LTIuODcxMjhjLjIzNTI0LjA2ODIuNDYzNjUuMTQuNjgzNzIuMjE1NzksMi4xMjg0Mi43MzI1OCwzLjQyNjY1LDEuODE1OTMsMy40MjY2NSwyLjY1MDYxQzIyLjAxNzUzLDExLjEwMTQ1LDIwLjYxNTM4LDEyLjI1NTc0LDE4LjMzODg1LDEzLjAxMDFaIiBmaWxsPSIjNjFkYWZiIi8+PHBhdGggZD0iTTExLjUsOC4xNTg1YTIuMDUzODYsMi4wNTM4NiwwLDEsMS0yLjA1MzgxLDIuMDUzODFBMi4wNTM4MSwyLjA1MzgxLDAsMCwxLDExLjUsOC4xNTg1IiBmaWxsPSIjNjFkYWZiIi8+PC9zdmc+"
                alt=""
                height="20"
              />{" "}
              OnlineDoctor
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <Collapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav right>
                <NavItem>
                  <NavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to="/appointment"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Appointment
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/css"
                  >
                    CSS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/components"
                  >
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/advanced"
                  >
                    Advanced
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/navigation"
                  >
                    Navigation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/forms"
                  >
                    Forms
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/tables"
                  >
                    Tables
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/modals"
                  >
                    Modals
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/addons"
                  >
                    Addons
                  </NavLink>
                </NavItem>
                {/* PRO-START */}
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/sections"
                  >
                    Sections
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="waves-effect waves-light d-flex align-items-center" to="#!">1<Fa icon="envelope" className="ml-1" /></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <Fa icon="user" className="mr-1" />Patient Portal
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem header>
                        Patient Portal
                      </DropdownItem>
                      <DropdownItem onClick={() => this.toggle(1)}>
                        Login
                      </DropdownItem>
                      <DropdownItem onClick={() => this.toggle(2)}>
                        Register
                      </DropdownItem>
                      <DropdownItem onClick={() => this.toggle(1)}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <Fa icon="user" className="mr-1" />Provider Portal
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem header>
                      Provider Portal
                      </DropdownItem>
                      <DropdownItem onClick={() => this.toggle(1)}>
                        Login
                      </DropdownItem>
                      <DropdownItem onClick={() => this.toggle(1)}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>

                {/* PRO-END */}
              </NavbarNav>
            </Collapse>
          </Navbar>
          {this.state.collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
            <Modal 
              isOpen={this.state.modal1} 
              toggle={() => this.toggle(1)}
              className="modal-notify modal-warning white-text"
            >
              <ModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold"
                toggle={() => this.toggle(1)}
              >
                Sign in
              </ModalHeader>
              <ModalBody>
                <form className="mx-3 grey-text" onSubmit={this.handleSignInSubmit}>
                  <Input
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </form>
              </ModalBody>
              <ModalFooter className="justify-content-center">
                <Button onClick={() => this.toggle(1)}>Login</Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)}>
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggle(2)}
            >
              Sign up
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text" onSubmit={this.handleSignUpSubmit}>
                <Input
                  label="Your first name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.first_name} 
                  onChange={this.handleChangeFirstName.bind(this)}
                />
                <Input
                  label="Your last name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.last_name} 
                  onChange={this.handleChangeLastName.bind(this)}
                />
                <Input
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.email} 
                  onChange={this.handleChangeEmail.bind(this)}
                />
                <Input
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  value={this.state.password} 
                  onChange={this.handleChangePassword.bind(this)}
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="deep-orange" onClick={() => this.toggle(2)}>
                SIGN UP
              </Button>
            </ModalFooter>
          </Modal>
          </main>

          <Footer color="indigo">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://github.com/yuyangchen0122?tab=repositories"> Yuyang (Vince) Chen </a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
