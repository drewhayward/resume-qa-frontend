import React from 'react'


import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'
import profilePic from '../profile500.jpg'
import Publication from '../components/Publication'

const Publications = () => (
    <Container>
        <Row>
            <Col className="md-4 offset-3">
                <h1>2020</h1>
                <Publication />
            </Col>
        </Row>
    </Container>
)

export default Publications