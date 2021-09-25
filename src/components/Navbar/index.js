import React from 'react'
import Logo from '../../images/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Nav , Container} from 'react-bootstrap'
import {Btn , Link} from './style'
const NavbarSec = () => {
    return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
      <img src={Logo} alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Link href="#home">Home</Link>
        <Link href="#link">Features</Link>
        <Link href="#link">Pricing</Link>
        <Link href="#link">Testimonial</Link>
      </Nav>
    </Navbar.Collapse>
    <Btn>Get started</Btn>
  </Container>
</Navbar>
    )
}

export default NavbarSec
