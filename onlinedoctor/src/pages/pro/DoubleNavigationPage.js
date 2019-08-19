import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Input,
  Navbar,
  NavbarNav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa,
  SideNavItem,
  SideNavCat,
  SideNavNav,
  SideNav,
  Container
} from "mdbreact";

class DoubleNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };
    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };
    return (
      <Router>
        <div className="fixed-sn light-blue-skin">
          <SideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav1.jpg"
            mask="strong"
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <Fa icon="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Fa icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Fa icon="google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Fa icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <Input
              type="text"
              default="Search"
              style={{
                color: "#fff",
                padding: "8px 10px 8px 30px",
                boxSizing: "border-box"
              }}
            />
            <SideNavNav>
              <SideNavCat
                name="Submit blog"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <SideNavItem>Submit listing</SideNavItem>
                <SideNavItem>Registration form</SideNavItem>
              </SideNavCat>
              <SideNavCat
                name="Instruction"
                id="instruction-cat"
                icon="hand-pointer-o"
              >
                <SideNavItem>For bloggers</SideNavItem>
                <SideNavItem>For authors</SideNavItem>
              </SideNavCat>
              <SideNavCat name="About" id="about-cat" icon="eye">
                <SideNavItem>Instruction</SideNavItem>
                <SideNavItem>Monthly meetings</SideNavItem>
              </SideNavCat>
              <SideNavCat
                name="Contact me"
                id="contact-me-cat"
                icon="envelope-o"
              >
                <SideNavItem>FAQ</SideNavItem>
                <SideNavItem>Write a message</SideNavItem>
              </SideNavCat>
            </SideNavNav>
          </SideNav>
          <Navbar style={navStyle} double expand="md" fixed="top" scrolling>
            <NavbarNav left>
              <NavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  <Fa icon="bars" color="white" size="2x" />
                </div>
              </NavItem>
              <NavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                Material Design for Bootstrap
              </NavItem>
            </NavbarNav>
            <NavbarNav right style={specialCaseNavbarStyles}>
              <NavItem active>
                <NavLink to="#!">
                  <Fa icon="envelope" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Contact</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">
                  <Fa icon="comments-o" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Support</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">
                  <Fa icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Account</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Navbar>
          <main style={mainStyle}>
            <Container fluid style={{ height: 2000 }} className="mt-5">
              <h2>
                Advanced Double Navigation with fixed SideNav & fixed Navbar:
              </h2>
              <br />
              <h5>1. Fixed side menu, hidden on small devices.</h5>
              <h5>
                2. Fixed Navbar. It will always stay visible on the top, even
                when you scroll down.
              </h5>
            </Container>
          </main>
        </div>
      </Router>
    );
  }
}

export default DoubleNavigationPage;
