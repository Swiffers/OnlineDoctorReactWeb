import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Fa,
  SideNavCat,
  SideNavNav,
  SideNav,
  SideNavLink,
  Container,
  Row,
  MDBIcon
} from "mdbreact";
import DocsLink from "../DocsLink";

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftOpen: false,
      isRightOpen: false
    };
  }

  // Slide out buttons event handlers
  handleToggleClickA = () => {
    this.setState({
      isLeftOpen: !this.state.isLeftOpen
    });
  };
  handleToggleClickB = () => {
    this.setState({
      isRightOpen: !this.state.isRightOpen
    });
  };

  render() {
    // Because the toggling buttons are nearly identical, we create a function to render them:
    const createButton = (onClick, side) => {
      return (
        <div style={{ width: "50%", textAlign: "center" }}>
          <a href="#!" onClick={onClick} key={"toggleThe" + side + "SideNav"}>
            <Fa icon="bars" size="5x" />
          </a>
        </div>
      );
    };

    return (
      <Router>
        <Container>
          <DocsLink
            title="Sidenav"
            href="https://mdbootstrap.com/docs/react/navigation/sidenav/"
          />
          {/* the buttons toggling visibility of SideNavs: */}
          <Row style={{ height: "80vh", alignItems: "center" }}>
            {createButton(this.handleToggleClickA, "Left")}
            {createButton(this.handleToggleClickB, "Right")}
          </Row>

          {/* the left SideNav: */}
          <SideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={this.state.isLeftOpen}
            breakWidth={1300}
            className="deep-purple darken-4"
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
            <SideNavNav>
              <SideNavLink to="/other-page" topLevel><MDBIcon icon="pencil" />Submit listing</SideNavLink>
              <SideNavCat
                name="Submit blog"
                id="submit-blog"
                icon="chevron-right"
              >
                <SideNavLink>Submit listing</SideNavLink>
                <SideNavLink>Registration form</SideNavLink>
              </SideNavCat>
              <SideNavCat
                name="Instruction"
                id="instruction"
                icon="hand-pointer-o"
                href="#"
              >
                <SideNavLink>For bloggers</SideNavLink>
                <SideNavLink>For authors</SideNavLink>
              </SideNavCat>
              <SideNavCat name="About" id="about" icon="eye">
                <SideNavLink>Instruction</SideNavLink>
                <SideNavLink>Monthly meetings</SideNavLink>
              </SideNavCat>
              <SideNavCat name="Contact me" id="contact-me" icon="envelope-o">
                <SideNavLink>FAQ</SideNavLink>
                <SideNavLink>Write a message</SideNavLink>
              </SideNavCat>
            </SideNavNav>
          </SideNav>

          {/* the right SideNav: */}
          <SideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={this.state.isRightOpen}
            className="side-nav-light"
            right
            breakWidth={1300}
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
            <SideNavNav>
              <SideNavCat
                name="Submit blog"
                id="submit-blog2"
                icon="chevron-right"
              >
                <SideNavLink className="active">Submit listing</SideNavLink>
                <SideNavLink>Registration form</SideNavLink>
              </SideNavCat>
              <SideNavCat
                name="Instruction"
                id="instruction2"
                icon="hand-pointer-o"
              >
                <SideNavLink>For bloggers</SideNavLink>
                <SideNavLink>For authors</SideNavLink>
              </SideNavCat>
              <SideNavCat name="About" id="about2" icon="eye">
                <SideNavLink>Instruction</SideNavLink>
                <SideNavLink>Monthly meetings</SideNavLink>
              </SideNavCat>
              <SideNavCat name="Contact me" id="contact-me2" icon="envelope-o">
                <SideNavLink>FAQ</SideNavLink>
                <SideNavLink>Write a message</SideNavLink>
              </SideNavCat>
            </SideNavNav>
          </SideNav>
        </Container>
      </Router>
    );
  }
}

export default SideNavPage;
