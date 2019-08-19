import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
  FormInline,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavbarNav,
  NavItem,
  NavLink,
  Select,
  SelectInput,
  SelectOptions,
  SelectOption,
  Fa
} from "mdbreact";
import DocsLink from "../DocsLink";

class SearchPagePro extends React.Component {

  state = {
    collapsed: false,
    value: "Choose your option",
    value2: "Choose your option"
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleNavbarClick = () => {
    this.setState({
      collapsed: false
    });
  }

  getValueOfSelectOne = value => {
    this.setState({ value: value });
    console.log(value);
  }

  getValueOfSelectTwo = value => {
    this.setState({ value2: value });
    console.log(value);
  }

  render() {
    return (
      <Router>
        <Container>
          <DocsLink
            title="Search"
            href="https://mdbootstrap.com/docs/react/forms/search/"
          />
          <FormInline className="md-form mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button gradient="blue" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline color="success" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button color="unique" rounded size="sm" type="submit" className="mr-auto">Search</Button>
        </FormInline>
        <FormInline className="md-form mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button gradient="aqua" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline color="warning" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button color="elegant" rounded size="sm" type="submit" className="mr-auto">Search</Button>
        </FormInline>
        <FormInline className="mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button gradient="purple" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline color="danger" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline color="indigo" rounded size="sm" type="submit" className="mr-auto">Search</Button>
        </FormInline>
        <FormInline className="mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button gradient="peach" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline color="primary" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button color="mdb-color" rounded size="sm" type="submit" className="mr-auto">Search</Button>
        </FormInline>
          <h3 className="mt-5">Search within navbar</h3>
          <Navbar
            color="deep-purple"
            className="text-white darken-3"
            dark
            expand="md"
          >
            <NavbarBrand>Navbar</NavbarBrand>
            <NavbarToggler onClick={this.handleTogglerClick} />
            <Collapse isOpen={this.state.collapsed} navbar>
              <NavbarNav right onClick={this.handleNavbarClick}>
                <FormInline className="md-form mr-auto m-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <Button
                    outline
                    color="white"
                    size="sm"
                    type="submit"
                    className="mr-auto"
                  >
                    Search
                  </Button>
                </FormInline>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <br />
          <Navbar color="blue-grey" light className="lighten-5" expand="md">
            <NavbarBrand>Navbar</NavbarBrand>
            <NavbarToggler onClick={this.handleTogglerClick} />
            <Collapse isOpen={this.state.collapsed} navbar>
              <NavbarNav left onClick={this.handleNavbarClick}>
                <NavItem active>
                  <NavLink to="#!">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Pricing</NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right onClick={this.handleNavbarClick}>
                <FormInline className="mr-auto m-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </FormInline>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Navbar color="pink lighten-3" dark className="lighten-5 mt-4" expand="md">
            <NavbarNav left onClick={this.handleNavbarClick}>
            <FormInline className="md-form m-0">
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <Fa icon="search" />
            </FormInline>
            </NavbarNav>
            <NavbarBrand>Navbar</NavbarBrand>
          </Navbar>
          <Navbar color="blue lighten-2" dark className="lighten-5 mt-4" expand="md">
            <NavbarNav left onClick={this.handleNavbarClick}>
            <FormInline className="mr-auto">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <Button color="mdb-color" rounded size="sm" type="submit" className="mr-auto">Search</Button>
            </FormInline>
            </NavbarNav>
            <NavbarBrand>Navbar</NavbarBrand>
          </Navbar>
          <h3 className="mt-5">Search within select</h3>
          <Select getValue={ value => this.getValueOfSelectOne(value)}>
            <SelectInput selected="Choose your option" />
            <SelectOptions search>
              <SelectOption disabled>Choose your option</SelectOption>
              <SelectOption>Option nr 1</SelectOption>
              <SelectOption>Option nr 2</SelectOption>
              <SelectOption>Option nr 3</SelectOption>
              <SelectOption>Option nr 4</SelectOption>
              <SelectOption>Option nr 5</SelectOption>
            </SelectOptions>
          </Select>
          <label>Example label</label>
          <h3 className="mt-5">Search within multiselect</h3>
          <Select multiple getValue={value => this.getValueOfSelectOne(value)}>
            <SelectInput selected="Choose your option" />
            <SelectOptions search>
              <SelectOption disabled>Choose your option</SelectOption>
              <SelectOption>Option nr 1</SelectOption>
              <SelectOption>Option nr 2</SelectOption>
              <SelectOption>Option nr 3</SelectOption>
              <SelectOption>Option nr 4</SelectOption>
              <SelectOption>Option nr 5</SelectOption>
            </SelectOptions>
          </Select>
          <label>Example label</label>
        </Container>
      </Router>
    );
  }
}

export default SearchPagePro;
