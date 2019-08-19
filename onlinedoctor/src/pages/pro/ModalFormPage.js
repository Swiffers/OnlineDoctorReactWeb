import React from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Input,
  Fa,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "mdbreact";
import "./ModalFormPage.css";
import DocsLink from "../DocsLink";

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      activeItem: "1"
    };
  }

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  toggleTab(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }

  render() {
    return (
      <Container>
        <DocsLink
          title="Modal Form"
          href="https://mdbootstrap.com/docs/react/modals/basic/"
        />
        <h4 className="mt-4">Cascading modal register / login</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(1)}>
            Launch Modal Login/Register
          </Button>
          <Modal
            className="form-cascading"
            isOpen={this.state.modal1}
            toggle={() => this.toggle(1)}
          >
            <Nav
              tabs
              className="md-tabs nav-justified tabs-2 light-blue darken-3"
              style={{ margin: "-1.5rem 1rem 0 1rem" }}
            >
              <NavItem>
                <NavLink
                  className={this.state.activeItem === 1 ? "active" : ""}
                  to="#"
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                >
                  <Fa icon="user" className="mr-1" />
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={this.state.activeItem === 2 ? "active" : ""}
                  to="#"
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                >
                  <Fa icon="user-plus" className="mr-1" />
                  Register
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeItem={this.state.activeItem}>
              <TabPane tabId="1">
                <ModalBody className="mx-3">
                  <form className=" mx-3 grey-text">
                    <Input
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </form>
                </ModalBody>
                <ModalFooter className="justify-content-center mx-3">
                  <Button
                    className="mb-4"
                    color="info"
                    onClick={() => this.toggle(3)}
                  >
                    LOG IN <Fa icon="sign-in" className="ml-1" />
                  </Button>
                  <Row
                    className="w-100 justify-content-start pt-4"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    <div id="options">
                      <p className="font-small grey-text">
                        Not a member?{" "}
                        <span
                          className="blue-text ml-1"
                          onClick={() => {
                            this.toggleTab("2");
                          }}
                        >
                          Sign Up
                        </span>
                      </p>
                      <p className="font-small grey-text">
                        Forgot <span className="blue-text ml-1">password?</span>
                      </p>
                    </div>
                    <Button outline color="info" onClick={() => this.toggle(1)}>
                      CLOSE
                    </Button>
                  </Row>
                </ModalFooter>
              </TabPane>
              <TabPane tabId="2">
                <ModalBody className="mx-3">
                  <form className=" mx-3 grey-text">
                    <Input
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <Input
                      label="Repeat password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </form>
                </ModalBody>
                <ModalFooter className="justify-content-center mx-3">
                  <Button
                    className="mb-4"
                    color="info"
                    onClick={() => this.toggle(3)}
                  >
                    SIGN UP
                    <Fa icon="sign-in" className="ml-1" />
                  </Button>
                  <Row
                    className="w-100 justify-content-start pt-4"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    <div id="options">
                      <p className="font-small grey-text">
                        Already have an account?
                        <span
                          className="blue-text ml-1"
                          onClick={() => {
                            this.toggleTab("1");
                          }}
                        >
                          Log in
                        </span>
                      </p>
                    </div>
                    <Button outline color="info" onClick={() => this.toggle(1)}>
                      CLOSE
                    </Button>
                  </Row>
                </ModalFooter>
              </TabPane>
            </TabContent>
          </Modal>
        </Row>

        <h4 className="mt-4">Elegant modal login</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(2)}>
            Launch Modal Login Form
          </Button>
          <Modal
            className="form-elegant"
            isOpen={this.state.modal2}
            toggle={() => this.toggle(2)}
          >
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold my-3"
              toggle={() => this.toggle(2)}
            >
              Sign in
            </ModalHeader>
            <ModalBody className="mx-3">
              <form className=" mx-3 grey-text">
                <Input label="Your email" group type="email" validate />
                <Input label="Your password" group type="password" validate />
                <p className="font-small blue-text text-right">
                  Forgot password?
                </p>
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center mx-4">
              <Button
                block
                rounded
                gradient="blue"
                onClick={() => this.toggle(2)}
              >
                SIGN IN
              </Button>
              <p className="font-small dark-grey-text my-4">or Sign in with:</p>
              <Row className="py-3">
                <Button rounded color="white" className="mr-md-3">
                  <Fa icon="facebook" className="text-center blue-text" />
                </Button>
                <Button rounded color="white" className="mr-md-3">
                  <Fa icon="twitter" className="text-center blue-text" />
                </Button>
                <Button rounded color="white" className="mr-md-3">
                  <Fa icon="google-plus" className="text-center blue-text" />
                </Button>
              </Row>
              <Row
                className="mx-5 w-100 py-3 justify-content-end"
                style={{ borderTop: "1px solid #e9ecef" }}
              >
                <p className="font-small grey-text">
                  Not a member? <span className="blue-text ml-1"> Sign Up</span>
                </p>
              </Row>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Dark modal register</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(3)}>
            Launch Modal Register Form
          </Button>
          <Modal
            className="form-dark"
            contentClassName="card card-image"
            isOpen={this.state.modal3}
            toggle={() => this.toggle(3)}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <ModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold white-text"
                toggle={() => this.toggle(3)}
              >
                SIGN
                <span className="green-text"> UP</span>
              </ModalHeader>
              <ModalBody>
                <form className="mx-3 grey-text">
                  <Input label="Your email" group type="email" validate />
                  <Input label="Your password" group type="password" validate />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="modalFormDarkCheckbox"
                  />
                  <label
                    htmlFor="modalFormDarkCheckbox"
                    className="white-text form-check-label"
                  >
                    Accept the
                    <span className="green-text font-weight-bold">
                      {" "}
                      Terms and Conditions
                    </span>
                  </label>
                </form>
              </ModalBody>
              <ModalFooter className="justify-content-center">
                <Col md="12" className="mb-3">
                  <Button
                    block
                    rounded
                    color="success"
                    onClick={() => this.toggle(3)}
                  >
                    SIGN UP
                  </Button>
                </Col>
                <Col md="12" className="mb-3 text-right font-small">
                  Have an account?
                  <span className="green-text ml-1 font-weight-bold">
                    Log in
                  </span>
                </Col>
              </ModalFooter>
            </div>
          </Modal>
        </Row>
      </Container>
    );
  }
}

export default ModalPage;
