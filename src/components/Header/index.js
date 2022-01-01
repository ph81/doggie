import React from 'react';
import { Nav, Navbar, NavbarBrand, Container } from 'react-bootstrap';
import Logo from '../../images/pawprint.png'
import Dog from '../../images/dog.png'
import Cat from '../../images/cat.png'

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <NavbarBrand href="/">
            <img
              alt="Logo"
              src={Logo}
              width="50"
              height="auto"
              className="d-inline-block align-top"
            />
          </NavbarBrand>
          <Nav.Link href="/dogs" className="header-icon">
            <img
              alt="Dog pictures"
              src={Dog}
              width="50"
              height="auto"
              className="d-inline-block align-top"
            />
          </Nav.Link>
          <Nav.Link href="/cats" className="header-icon">
            <img
              alt="Cats pictures"
              src={Cat}
              width="50"
              height="auto"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Container>
      </Navbar>
       )
}

export default Header;