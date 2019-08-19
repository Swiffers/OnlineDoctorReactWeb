import React from "react";
import { Container, Chip, Card, ChipsInput } from "mdbreact";
import DocsLink from "../DocsLink";

class ChipsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // No avatars:
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true,

      show7: true,
      show8: true,
      show9: true,
      show10: true,
      show11: true,
      show12: true,

      // Named Chips:
      show13: true,
      show14: true,
      show15: true,
      show16: true,
      show17: true,

      // Dates Chips:
      show18: true,
      show19: true,
      show20: true,
      show21: true,

      // Gradient Chips:
      show22: true,
      show23: true,
      show24: true,
      show25: true
    };
  }

  handleCloseHere = param => e => {
    this.setState({
      ["show" + param]: false
    });
  };

  render() {
    const chipsRowStyle1 = { display: "flex", alignItems: "center" };
    const chipsRowStyle2 = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    };
    const cardStyle = { maxWidth: "65%", padding: "1.25rem" };

    const {
      show1,
      show2,
      show3,
      show4,
      show5,
      show6,
      show7,
      show8,
      show9,
      show10,
      show11,
      show12,
      show13,
      show14,
      show15,
      show16,
      show17,
      show18,
      show19,
      show20,
      show21,
      show22,
      show23,
      show24,
      show25
    } = this.state;

    return (
      <Container>
        <DocsLink
          title="Chips"
          href="https://mdbootstrap.com/docs/react/components/badges/#chips-avatars"
        />
        <Container>
          <h2 className="my-3">Chips with avatars</h2>

          <Card style={cardStyle}>
            <div style={chipsRowStyle1}>
              <Chip
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="Contact Person"
                waves
              >
                {" "}
                John Doe{" "}
              </Chip>
              <Chip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg"
                alt="Contact Person"
                waves
              >
                {" "}
                Anna Smith{" "}
              </Chip>
              <Chip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="Contact Person"
                waves
              >
                {" "}
                Lara Lim{" "}
              </Chip>
            </div>
            <div style={chipsRowStyle2}>
              <Chip
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                alt="Contact Person"
                bgColor="light-blue lighten-4"
                waves
              >
                {" "}
                Tom Dark{" "}
              </Chip>
              <Chip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg"
                alt="Contact Person"
                bgColor="light-blue lighten-4"
                waves
              >
                {" "}
                Kate Horwitz{" "}
              </Chip>
              <Chip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg"
                alt="Contact Person"
                bgColor="light-blue lighten-4"
                waves
              >
                {" "}
                Danny Clark{" "}
              </Chip>
            </div>
          </Card>

          <hr className="my-5" />
          <h2 className="mb-4">Chips without avatars</h2>

          <Card style={cardStyle}>
            <div style={chipsRowStyle1}>
              {show1 && (
                <Chip waves close handleClose={this.handleCloseHere(1)}>
                  {" "}
                  Tag 1{" "}
                </Chip>
              )}
              {show2 && (
                <Chip waves close handleClose={this.handleCloseHere(2)}>
                  {" "}
                  Tag 2{" "}
                </Chip>
              )}
              {show3 && (
                <Chip waves close handleClose={this.handleCloseHere(3)}>
                  {" "}
                  Tag 3{" "}
                </Chip>
              )}
              {show4 && (
                <Chip waves close handleClose={this.handleCloseHere(4)}>
                  {" "}
                  Tag 4{" "}
                </Chip>
              )}
              {show5 && (
                <Chip waves close handleClose={this.handleCloseHere(5)}>
                  {" "}
                  Tag 5{" "}
                </Chip>
              )}
              {show6 && (
                <Chip waves close handleClose={this.handleCloseHere(6)}>
                  {" "}
                  Tag 6{" "}
                </Chip>
              )}
            </div>

            <div style={chipsRowStyle2}>
              {show7 && (
                <Chip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(7)}
                >
                  {" "}
                  Tag 220{" "}
                </Chip>
              )}
              {show8 && (
                <Chip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(8)}
                >
                  {" "}
                  Tag 219{" "}
                </Chip>
              )}
              {show9 && (
                <Chip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(9)}
                >
                  {" "}
                  Tag 218{" "}
                </Chip>
              )}
              {show10 && (
                <Chip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(10)}
                >
                  {" "}
                  Tag 217{" "}
                </Chip>
              )}
              {show11 && (
                <Chip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(11)}
                >
                  {" "}
                  Tag 216{" "}
                </Chip>
              )}
              {show12 && (
                <Chip
                  waves
                  bgColor="pink lighten-4"
                  close
                  handleClose={this.handleCloseHere(12)}
                >
                  {" "}
                  Tag 215{" "}
                </Chip>
              )}
            </div>
          </Card>

          <hr className="my-5" />
          <h2 className="mb-4">Chips with various colors</h2>

          <Card style={cardStyle}>
            <div className="mb-4">
              <Chip
                src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg"
                alt="Contact Person"
                bgColor="blue lighten-4"
                waves
              >
                {" "}
                Caroline Smith{" "}
              </Chip>
              <Chip
                src="https://mdbootstrap.com/img/Photos/Avatars/img(3).jpg"
                alt="Contact Person"
                bgColor="purple lighten-4"
                waves
              >
                {" "}
                Adam Grey{" "}
              </Chip>
              <Chip
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                alt="Contact Person"
                bgColor="amber lighten-3"
                waves
              >
                {" "}
                Danny Moor{" "}
              </Chip>
            </div>
            <div className="mb-4">
              <Chip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="Contact Person"
                bgColor="orange darken-2"
                text="white"
                waves
              >
                {" "}
                Daisy Sun{" "}
              </Chip>
              <Chip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg"
                alt="Contact Person"
                bgColor="cyan darken-2"
                text="white"
                waves
              >
                {" "}
                Martha Lores{" "}
              </Chip>
              <Chip
                size="md"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg"
                alt="Contact Person"
                bgColor="pink darken-2"
                text="white"
                waves
              >
                {" "}
                Alexandra Deyn{" "}
              </Chip>
            </div>
            <div className="mb-4">
              <Chip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg"
                alt="Contact Person"
                bgColor="primary-color"
                text="white"
                waves
              >
                {" "}
                Olaf Horwitz{" "}
              </Chip>
              <Chip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg"
                alt="Contact Person"
                bgColor="danger-color"
                text="white"
                waves
              >
                {" "}
                Mary-Kate Dare{" "}
              </Chip>
              <Chip
                size="lg"
                src="https://mdbootstrap.com/img/Photos/Avatars/img(21).jpg"
                alt="Contact Person"
                bgColor="success-color"
                text="white"
                waves
              >
                {" "}
                The Sylvester{" "}
              </Chip>
            </div>
            <div className="mb-4">
              {show13 && (
                <Chip
                  bgColor="teal lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(13)}
                >
                  {" "}
                  Martha{" "}
                </Chip>
              )}
              {show14 && (
                <Chip
                  bgColor="pink lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(14)}
                >
                  {" "}
                  Agnes{" "}
                </Chip>
              )}
              {show15 && (
                <Chip
                  bgColor="light-blue lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(15)}
                >
                  {" "}
                  Caroline{" "}
                </Chip>
              )}
              {show16 && (
                <Chip
                  bgColor="purple lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(16)}
                >
                  {" "}
                  Elisa{" "}
                </Chip>
              )}
              {show17 && (
                <Chip
                  bgColor="mdb-color lighten-2"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(17)}
                >
                  {" "}
                  Francesca{" "}
                </Chip>
              )}
            </div>
            <div className="mb-4">
              {show18 && (
                <Chip
                  size="md"
                  bgColor="red lighten-4"
                  text="red"
                  close
                  waves
                  handleClose={this.handleCloseHere(18)}
                >
                  {" "}
                  25.09.2017{" "}
                </Chip>
              )}
              {show19 && (
                <Chip
                  size="md"
                  bgColor="indigo lighten-4"
                  text="indigo"
                  close
                  waves
                  handleClose={this.handleCloseHere(19)}
                >
                  {" "}
                  24.08.2016{" "}
                </Chip>
              )}
              {show20 && (
                <Chip
                  size="md"
                  bgColor="cyan lighten-4"
                  text="cyan"
                  close
                  waves
                  handleClose={this.handleCloseHere(20)}
                >
                  {" "}
                  23.07.2015{" "}
                </Chip>
              )}
              {show21 && (
                <Chip
                  size="md"
                  bgColor="deep-purple lighten-4"
                  text="deep-purple"
                  close
                  waves
                  handleClose={this.handleCloseHere(21)}
                >
                  {" "}
                  22.06.2014{" "}
                </Chip>
              )}
            </div>
            <div className="mb-4">
              {show22 && (
                <Chip
                  size="lg"
                  gradient="aqua"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(22)}
                >
                  {" "}
                  Aqua gradient{" "}
                </Chip>
              )}
              {show23 && (
                <Chip
                  size="lg"
                  gradient="peach"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(23)}
                >
                  {" "}
                  Peach gradient{" "}
                </Chip>
              )}
              {show24 && (
                <Chip
                  size="lg"
                  gradient="purple"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(24)}
                >
                  {" "}
                  Purple gradient{" "}
                </Chip>
              )}
              {show25 && (
                <Chip
                  size="lg"
                  gradient="blue"
                  text="white"
                  close
                  waves
                  handleClose={this.handleCloseHere(25)}
                >
                  {" "}
                  Blue gradient{" "}
                </Chip>
              )}
            </div>
          </Card>

          <hr className="my-5" />
          <h2 className="mb-4">Chips input</h2>
          <Card style={cardStyle}>
            <ChipsInput placeholder="+Tag" secondaryPlaceholder="Enter a tag" />
            <ChipsInput chips={["Tag 1", "Tag 2", "Tag 3"]} />
          </Card>
        </Container>
      </Container>
    );
  }
}

export default ChipsPage;
