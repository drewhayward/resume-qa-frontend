import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {

    return (
        <Navbar bg="secondary" fixed="bottom">
            <Container fluid="md">
                <p className="text-white">Found a bug the website? <a href="https://github.com/drewhayward/drewhayward.github.io/issues/new">Report it!</a></p>
            </Container>
        </Navbar>
    )
}

export default Footer