import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBTabPane,   MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import DocsLink from "../DocsLink";
import classnames from "classnames";

class TabsPage extends React.Component {

  state = {
    activeItem: "1",
    activeItemPills: "1",
    activeItemVerticalPills: "1",
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
    activeItemClassicTabs1: "1",
    activeItemClassicTabs2: "1"
  }

  toggle = (tab) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }

  togglePills = (tab) => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }
  toggleVerticalPills = (tab) => {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItemVerticalPills: tab
      });
    }
  }
  toggleClassicTabs1 = (tab) => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }
  toggleClassicTabs2 = (tab) => {
    if (this.state.activeItemClassicTabs2 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
  }
  toggleOuterTabs = (tab) => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  }
  toggleInnerPills = (tab) => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  }
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/components/tabs/"
        />
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2>Basic</h2>
              <MDBNav tabs className="nav-justified">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItem === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItem === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                    role="tab"
                  >
                    Follow
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItem === "3"
                    })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                    role="tab"
                  >
                    Contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent className="card" activeItem={this.state.activeItem}>
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                  <p>
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">Pills</h2>
              <MDBNav pills color="secondary" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemPills === "1"
                    })}
                    onClick={() => {
                      this.togglePills("1");
                    }}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemPills === "2"
                    })}
                    onClick={() => {
                      this.togglePills("2");
                    }}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemPills === "3"
                    })}
                    onClick={() => {
                      this.togglePills("3");
                    }}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemPills === "4"
                    })}
                    onClick={() => {
                      this.togglePills("4");
                    }}
                  >
                    Help
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.activeItemPills}>
                <MDBTabPane tabId="1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">Vertical Pills</h2>
              <MDBRow>
                <MDBCol md="3">
                  <MDBNav pills color="primary" className="flex-column">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={classnames({
                          active: this.state.activeItemVerticalPills === "1"
                        })}
                        onClick={() => {
                          this.toggleVerticalPills("1");
                        }}
                      >
                        Downloads <MDBIcon icon="download" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={classnames({
                          active: this.state.activeItemVerticalPills === "2"
                        })}
                        onClick={() => {
                          this.toggleVerticalPills("2");
                        }}
                      >
                        Orders & invoices
                        <MDBIcon icon="file-text" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={classnames({
                          active: this.state.activeItemVerticalPills === "3"
                        })}
                        onClick={() => {
                          this.toggleVerticalPills("3");
                        }}
                      >
                        Billing Details
                        <MDBIcon icon="address-card" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCol>
                <MDBCol md="9">
                  <MDBTabContent activeItem={this.state.activeItemVerticalPills}>
                    <MDBTabPane tabId="1">
                      <MDBCardBody>
                        <MDBCardTitle>Downloads</MDBCardTitle>
                        <MDBCardText>Completely legal</MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <MDBCardBody>
                        <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                        <MDBCardText>
                          "Hello? Is it me you're looking for?"
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <MDBCardBody>
                        <MDBCardTitle>Billing Details</MDBCardTitle>
                        <MDBCardText>
                          Time to pay{" "}
                          <MDBBtn className="ml-3" color="primary">
                            pay
                          </MDBBtn>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>

              <h2 className="mt-5">Pills within the tabs</h2>
              <MDBNav tabs className="nav-justified" color="indigo">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemOuterTabs === "1"
                    })}
                    onClick={() => {
                      this.toggleOuterTabs("1");
                    }}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemOuterTabs === "2"
                    })}
                    onClick={() => {
                      this.toggleOuterTabs("2");
                    }}
                    role="tab"
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItemOuterTabs}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="3">
                      <MDBNav pills color="primary" className="flex-column">
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            className={classnames({
                              active: this.state.activeItemInnerPills === "1"
                            })}
                            onClick={() => {
                              this.toggleInnerPills("1");
                            }}
                          >
                            Downloads <MDBIcon icon="download" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            className={classnames({
                              active: this.state.activeItemInnerPills === "2"
                            })}
                            onClick={() => {
                              this.toggleInnerPills("2");
                            }}
                          >
                            Orders & invoices
                            <MDBIcon icon="file-text" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            className={classnames({
                              active: this.state.activeItemInnerPills === "3"
                            })}
                            onClick={() => {
                              this.toggleInnerPills("3");
                            }}
                          >
                            Billing Details
                            <MDBIcon icon="address-card" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBTabContent
                        activeItem={this.state.activeItemInnerPills}
                      >
                        <MDBTabPane tabId="1">
                          <MDBCardBody>
                            <MDBCardTitle>Downloads</MDBCardTitle>
                            <MDBCardText>Completely legal</MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                          <MDBCardBody>
                            <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                            <MDBCardText>
                              "Hello? Is it me you're looking for?"
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                          <MDBCardBody>
                            <MDBCardTitle>Billing Details</MDBCardTitle>
                            <MDBCardText>
                              Time to pay{" "}
                              <MDBBtn className="ml-3" color="secondary">
                                pay
                              </MDBBtn>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                      </MDBTabContent>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">Classic tabs</h2>

              <div className="classic-tabs">
                <MDBNav classicTabs color="cyan">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs1 === "1"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs1("1");
                      }}
                    >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs1 === "2"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs1("2");
                      }}
                    >
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs1 === "3"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs1("3");
                      }}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs1 === "4"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs1("4");
                      }}
                    >
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card"
                  activeItem={this.state.activeItemClassicTabs1}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </div>

              <div className="classic-tabs">
                <MDBNav classicTabs color="orange" className="mt-5">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs2 === "1"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs2("1");
                      }}
                    >
                      <MDBIcon icon="user" size="2x" />
                      <br />
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs2 === "2"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs2("2");
                      }}
                    >
                      <MDBIcon icon="heart" size="2x" />
                      <br />
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs2 === "3"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs2("3");
                      }}
                    >
                      <MDBIcon icon="envelope" size="2x" />
                      <br />
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemClassicTabs2 === "4"
                      })}
                      onClick={() => {
                        this.toggleClassicTabs2("4");
                      }}
                    >
                      <MDBIcon icon="star" size="2x" />
                      <br />
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card mb-5"
                  activeItem={this.state.activeItemClassicTabs2}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Nihil odit magnam minima, soluta doloribus
                      reiciendis molestiae placeat unde eos molestias.
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default TabsPage;
