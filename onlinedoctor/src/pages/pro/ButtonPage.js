import React from "react";
import { MDBBtn, MDBIcon, MDBBtnFixed, MDBBtnFixedItem, MDBContainer } from "mdbreact";
import DocsLink from "../DocsLink";

class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    };
    this.onHover = this.onHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onHover() {
    this.setState({
      buttonStyle: {
        transform: "scaleY(1) scaleX(1) translateY(0) translateX(0)",
        opacity: "1"
      }
    });
  }

  onMouseLeave() {
    this.setState({
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    });
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Buttons"
          href="https://mdbootstrap.com/docs/react/components/buttons/"
        />
        <div className="container-fluid text-center mt-5">
          <section id="top-section">
            <MDBBtn rounded>Rounded Default</MDBBtn>
            <MDBBtn color="primary" rounded>
              Rounded Primary
            </MDBBtn>
            <MDBBtn color="secondary" rounded>
              Rounded Secondary
            </MDBBtn>
            <MDBBtn color="success" rounded>
              Rounded Success
            </MDBBtn>
            <MDBBtn color="info" rounded>
              Rounded Info
            </MDBBtn>
            <MDBBtn color="warning" rounded>
              Rounded Warning
            </MDBBtn>
          </section>
          <section>
            <MDBBtn rounded gradient="peach">
              Gradient Peach
            </MDBBtn>
            <MDBBtn rounded gradient="purple">
              Gradient Purple
            </MDBBtn>
            <MDBBtn rounded gradient="blue">
              Gradient Blue
            </MDBBtn>
            <MDBBtn rounded gradient="aqua">
              Gradient Aqua
            </MDBBtn>
          </section>
          <section>
            <MDBBtn flat>Flat MDBBtn</MDBBtn>
          </section>
          <section>
            <MDBBtn rounded outline>
              Rounded Outline Default
            </MDBBtn>
            <MDBBtn color="primary" rounded outline>
              Rounded Outline Primary
            </MDBBtn>
            <MDBBtn color="secondary" rounded outline>
              Rounded Outline Secondary
            </MDBBtn>
            <MDBBtn color="success" rounded outline>
              Rounded Outline Success
            </MDBBtn>
          </section>
          <section>
            <MDBBtn tag="a" floating gradient="purple">
              <MDBIcon icon="bolt" />
            </MDBBtn>
            <MDBBtn tag="a" floating gradient="peach">
              <MDBIcon icon="leaf" />
            </MDBBtn>
            <MDBBtn tag="a" floating gradient="blue">
              <MDBIcon icon="star" />
            </MDBBtn>
          </section>
          <section style={{ height: "1000px" }}>
            <MDBBtnFixed
              onMouseEnter={this.onHover}
              onMouseLeave={this.onMouseLeave}
              floating
              size="lg"
              color="red"
              icon="pencil"
              style={{ bottom: "45px", right: "24px" }}
            >
              <MDBBtnFixedItem
                buttonStyle={this.state.buttonStyle}
                color="red"
                icon="star"
              />
              <MDBBtnFixedItem
                buttonStyle={this.state.buttonStyle}
                color="yellow"
                icon="user"
              />
              <MDBBtnFixedItem
                buttonStyle={this.state.buttonStyle}
                color="green"
                icon="envelope"
              />
              <MDBBtnFixedItem
                buttonStyle={this.state.buttonStyle}
                color="blue"
                icon="shopping-cart"
              />
            </MDBBtnFixed>
          </section>
        </div>
      </MDBContainer>
    );
  }
}

export default ButtonPage;
