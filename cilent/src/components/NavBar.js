import { useState, useEffect } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import logo from '../assets/img/aricat-logo.png';
import './css/NavBar.css'

export const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li className="menu-item">
              <NavLink href="/" className="navbar-menu">Home</NavLink>
            </li>
            <li className="menu-item">
              <NavLink href="/about" className="navbar-menu">About</NavLink>
            </li>
            <li className="menu-item">
              <NavLink href="/tournament" className="navbar-menu">Tournament</NavLink>
            </li>
            <li className="menu-item">
              <NavLink href="/contact" className="navbar-menu">Contact</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}