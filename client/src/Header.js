import React from "react";
import styled from "styled-components";
import { ShoppingCart, Person } from "@mui/icons-material";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("../login", { replace: true });
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#002c5c" }}
      >
        <Container style={{}}>
          <Navbar.Brand
            href="/home"
            className="d-flex flex-row align-items-center"
          >
            <img
              src="https://i.ibb.co/Th4Pwvw/logo-new.png"
              alt="Logo HCMUT"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
            <Title>WESHARE</Title>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav style={{ marginRight: "20px" }}>
              {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
              <Nav.Link href="#features">ABOUT</Nav.Link>
              <Nav.Link href="#pricing">NEWS</Nav.Link>
              <NavDropdown title="COLLECTION" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Best Seller
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Discount</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  My Wish List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <NavIcon>
            <Dropdown>
              <Dropdown.Toggle
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <UserIcon></UserIcon>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1">Sign In</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Sign Up</Dropdown.Item> */}
                <Dropdown.Item onClick={() => navigate("/user", { replace: true })}>My Account</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavIcon>
          <Button variant="primary" onClick={() => navigate("../create", { replace: true })}>Become a Donator</Button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>

      <SubNav>
        <SubNavItem onClick={() => navigate("/home", { replace: true })}>Getting support</SubNavItem>
        <SubNavItem>How you can help</SubNavItem>
        <SubNavItem onClick={() => navigate("/create", { replace: true })}>Donate</SubNavItem>
        <SubNavItem onClick={() => navigate("/event", { replace: true })}>Events</SubNavItem>
        <SubNavItem>About us</SubNavItem>
      </SubNav>
    </>
  );
};

const Title = styled.p`
  color: white;
  font-size: 2.5vw;
  width: 15vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  margin: 0px 0 0 15px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 15px;
  margin-right: 2vw;
  padding: 2px 10px 2px 2px;
  max-width: 250px;
  /* @media (max-width: 768px){
    display: none;
  } */
`;
const SearchInput = styled.input`
  display: inline;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 80%;
`;
const SearchButton = styled.button`
  display: inline;
  border: none;
  background-color: gray;
  border-radius: 50%;
  width: 24px;
  /* padding: 5px; */
  i {
    width: 16px;
  }
`;
const NavIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  margin-left: auto;
  .dropdown-toggle::after {
    display: none !important;
  }
  @media (max-width: 768px) {
    /* position: relative; */
  }
`;
const CartIcon = styled(ShoppingCart)`
  color: white;
  font-size: 50pt;
  display: inline;
`;
const CartCounter = styled.p`
  color: black;
  background-color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 2px;
  border-radius: 7px;
  border: 1px black solid;
  display: inline;
  position: relative;
  bottom: 10px;
  right: 12px;
  /* font-family: 'Helvetica Neue', Helvetica, Arial; */
  @media (max-width: 768px) {
    /* width: 15vw; */
  }
`;
const UserIcon = styled(Person)`
  color: white;
  width: 10vw;
`;
const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid gray;
`;
const SubNavItem = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  flex: auto 1 1;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  :hover {
    background-color: #7cd2ff;
  }

  color: #002c5c;
  font-weight: bold;
  font-size: 22px;
`;

export default Header;
