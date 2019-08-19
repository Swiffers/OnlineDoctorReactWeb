import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardUp,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAvatar,
  MDBRotatingCard,
  MDBIcon,
  MDBBtn
} from "mdbreact";
import DocsLink from "../DocsLink";

class FlippingCardPage extends Component {

  state = {
    flipped1: false,
    flipped2: false
  }

  handleFlipping = id => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Flipping card"
          href="https://mdbootstrap.com/plugins/react/flipping-cards/"
        />
        <MDBContainer>
          <MDBRow between>
            <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <MDBRotatingCard
                flipped={this.state.flipped1}
                className="text-center h-100 w-100"
              >
                <MDBCard className="face front" >
                  <MDBCardUp>
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                      alt=""
                    />
                  </MDBCardUp>
                  <MDBAvatar className="mx-auto white" circle>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      alt=""
                      className="rounded-circle"
                    />
                  </MDBAvatar>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a
                      href="#!"
                      className="rotate-btn text-dark"
                      data-card="card-1"
                      onClick={() => this.handleFlipping(1)}
                    >
                      <MDBIcon icon="repeat" /> Click here to rotate
                    </a>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="face back" style={{ height: "400px" }}>
                  <MDBCardBody>
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
                          <MDBIcon icon="facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <MDBIcon icon="twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <MDBIcon icon="google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <MDBIcon icon="linkedin" />
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#!"
                      className="rotate-btn text-dark"
                      data-card="card-1"
                      onClick={() => this.handleFlipping(1)}
                    >
                      <MDBIcon icon="undo" /> Click here to rotate back
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRotatingCard>
            </MDBCol>


            <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <MDBRotatingCard
                flipped={this.state.flipped2}
                className="text-center h-100 w-100"
              >
                <MDBCard className="face back text-center" >
                  <MDBCardBody>
                    <MDBCardTitle className="text-ceter font-weight-bold my-4">Social shares<MDBIcon icon="close rotate-btn text-muted" onClick={() => this.handleFlipping(2)} /></MDBCardTitle>
                    <hr />
                    <div>
                      <MDBRow center className="flex-wrap">
                        <MDBBtn tag="a" floating social="dribble"><MDBIcon icon="dribbble" /></MDBBtn>
                        <MDBBtn tag="a" floating social="slack"><MDBIcon icon="slack" /></MDBBtn>
                        <MDBBtn tag="a" floating social="ins"><MDBIcon icon="instagram" /></MDBBtn>
                        <MDBBtn tag="a" floating social="pin"><MDBIcon icon="pinterest" /></MDBBtn>
                        <MDBBtn tag="a" floating social="tw"><MDBIcon icon="twitter" /></MDBBtn>
                        <MDBBtn tag="a" floating social="gplus"><MDBIcon icon="google-plus" /></MDBBtn>
                        <MDBBtn tag="a" floating social="git"><MDBIcon icon="github" /></MDBBtn>
                      </MDBRow>
                      <h5 className="font-weight-bold my-4">Join our community</h5>
                    </div>
                    <hr />
                    <MDBRow center className="flex-wrap">
                      <MDBBtn tag="a" social="fb" className="px-4"><MDBIcon icon="facebook" /></MDBBtn>
                      <MDBBtn tag="a" social="tw" className="px-4"><MDBIcon icon="twitter" /></MDBBtn>
                      <MDBBtn tag="a" social="li" className="px-4"><MDBIcon icon="linkedin" /></MDBBtn>
                      <MDBBtn tag="a" social="ins" className="px-4"><MDBIcon icon="instagram" /></MDBBtn>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="face front" >
                  <MDBCardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg"
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
                  <MDBCardBody className="text-center">
                    <MDBCardTitle tag="h4">MDBCard Title<MDBIcon icon="share-alt text-dark float-right" onClick={() => this.handleFlipping(2)} /></MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
                  </MDBCardText>
                    <a
                      href="#!"
                      className="black-text"
                    >
                      <h6 onClick={this.handleFlipping}>
                        Read more <MDBIcon icon="angle-double-right" />
                      </h6>
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRotatingCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default FlippingCardPage;
