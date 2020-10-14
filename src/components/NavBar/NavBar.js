import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar className="navbar__page" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <i class="fas fa-viruses"></i>
            <Navbar.Brand href="#home">COVID-19 TRACKER</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#statistics">Data&Statistics</Nav.Link>
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
