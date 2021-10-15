import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
// import { Link } from 'react-router-dom'

const navbar = () =>
    (
    <Navbar sticky="top" bg="light" expand="lg">
        <Container fluid='sm'>
            <Navbar.Brand>Talk to Résumé</Navbar.Brand>
            {/* <NavbarCollapse> */}
                {/* <Nav> */}
            <Nav className="me-auto"/>

            <Nav.Link href="https://drewhayward.github.io">Author</Nav.Link>
            <NavDropdown title="Code">
                <NavDropdown.Item href="https://github.com/drewhayward/resume-qa-frontend">Frontend</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/drewhayward/resume-qa-backend">Backend</NavDropdown.Item>
            </NavDropdown>
                {/* </Nav> */}
            {/* </NavbarCollapse> */}
        </Container>
    </Navbar>
    )

export default navbar