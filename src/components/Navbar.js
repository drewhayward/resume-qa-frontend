import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const navbar = () =>
    (
    <Navbar bg="light" expand="lg">
        <Container fluid='sm'>
            <Navbar.Brand  as={Link} to="/">Drew Hayward</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">About</Nav.Link>
                <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse> */}
        </Container>
    </Navbar>
    )

export default navbar