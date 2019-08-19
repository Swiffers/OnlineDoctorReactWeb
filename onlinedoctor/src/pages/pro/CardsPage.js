import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardUp,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Avatar,
  FlippingCard,
  Fa,
  Button
} from "mdbreact";
import DocsLink from "../DocsLink";

class FlippingCardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.handleFlipping = this.handleFlipping.bind(this);
  }

  handleFlipping() {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    const colStyle = { maxWidth: "22rem" };

    return (
      <Container>
        <DocsLink
          title="Cards"
          href="https://mdbootstrap.com/docs/react/components/cards/"
        />
        <Container>
          <h2>Stylish cards</h2>
          <Row className="mt-2">
            <Col style={colStyle}>
              <Card>
                <CardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="Card image cap"
                />
                <CardBody>
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <Fa icon="share-alt" />
                  </a>
                  <CardTitle>Card Title</CardTitle>
                  <hr />
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </CardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                  >
                    <h5>
                      Read more <Fa icon="angle-double-right" />
                    </h5>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col style={colStyle}>
              <Card>
                <CardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="Card image cap"
                />
                <CardBody className="elegant-color white-text rounded-bottom">
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <Fa icon="share-alt" />
                  </a>
                  <CardTitle>Card Title</CardTitle>
                  <hr className="hr-light" />
                  <CardText className="white-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </CardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                  >
                    <h5 className="white-text">
                      Read more <Fa icon="angle-double-right" />
                    </h5>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <hr className="my-5" />
          <h2>Testimonial cards</h2>

          <Row className="mt-2">
            <Col style={colStyle}>
              <Card testimonial>
                <CardUp className="indigo lighten-1" />
                <Avatar className="mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                    alt=""
                  />
                </Avatar>
                <CardBody>
                  <h4 className="card-title">Anna Doe</h4>
                  <hr />
                  <p>
                    <Fa icon="quote-left" /> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Eos, adipisci
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col style={colStyle}>
              <Card testimonial>
                <CardUp gradient="aqua" />
                <Avatar className="mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                    alt=""
                  />
                </Avatar>
                <CardBody>
                  <h4 className="card-title">Martha Smith</h4>
                  <hr />
                  <p>
                    <Fa icon="quote-left" /> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Eos, adipisci
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <hr className="my-5" />
          <h2>Image Overlay</h2>

          <Row>
            <Col>
              <Card
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h5 className="pink-text">
                      <Fa icon="pie-chart" /> Marketing
                    </h5>
                    <CardTitle tag="h3" className="pt-2">
                      <strong>This is card title</strong>
                    </CardTitle>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <Button color="pink">
                      <Fa icon="clone left" /> View project
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                  <div>
                    <h5 className="orange-text">
                      <Fa icon="desktop" /> Software
                    </h5>
                    <CardTitle tag="h3" className="pt-2">
                      <strong>This is card title</strong>
                    </CardTitle>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <Button color="deep-orange">
                      <Fa icon="clone left" /> View project
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          <hr className="my-5" />
          <h2>Flipping card</h2>

          <Row>
            <Col style={{ minHeight: '26rem' }}>
              <FlippingCard
                flipped={this.state.flipped}
                className="text-center h-100 w-100"
                style={colStyle}
              >
                <Card className="face front">
                  <CardUp>
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                      alt=""
                    />
                  </CardUp>
                  <Avatar className="mx-auto white" circle>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      alt=""
                      className="rounded-circle"
                    />
                  </Avatar>
                  <CardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a
                      href="#!"
                      className="rotate-btn"
                      data-card="card-1"
                      onClick={this.handleFlipping}
                    >
                      <Fa icon="repeat" /> Click here to rotate
                    </a>
                  </CardBody>
                </Card>
                <Card className="face back">
                  <CardBody>
                    <h4 className="font-weight-bold">About me</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                      dolores nihil quae in mollitia asperiores ut rerum
                      repellendus, voluptatum eum, officia laudantium quaerat?
                    </p>
                    <hr />
                    <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <Fa icon="facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <Fa icon="twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <Fa icon="google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <Fa icon="linkedin" />
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#!"
                      className="rotate-btn"
                      data-card="card-1"
                      onClick={this.handleFlipping}
                    >
                      <Fa icon="undo" /> Click here to rotate back
                    </a>
                  </CardBody>
                </Card>
              </FlippingCard>
            </Col>
          </Row>

          <hr className="my-5" />
          <h2>Action button and footer</h2>

          <Row>
            <Col style={colStyle}>
              <Card cascade>
                <CardImage
                  cascade
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                />
                <Button
                  floating
                  tag="a"
                  className="ml-auto mr-4 lighten-3 mdb-coalor"
                  action
                >
                  <Fa icon="chevron-right" />
                </Button>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
                <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                  <ul className="list-unstyled list-inline font-small">
                    <li className="list-inline-item pr-2 white-text">
                      <Fa icon="clock-o" /> 05/10/2015
                    </li>
                    <li className="list-inline-item pr-2">
                      <a href="#!" className="white-text">
                        <Fa icon="comments-o" />
                        12
                      </a>
                    </li>
                    <li className="list-inline-item pr-2">
                      <a href="#!" className="white-text">
                        <Fa icon="facebook"> </Fa>
                        21
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="white-text">
                        <Fa icon="twitter"> </Fa>5
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default FlippingCardPage;
