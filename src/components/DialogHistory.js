import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import Typist from 'react-typist'


const DialogHistory = (props) => {
    let history = props.history

    const dialogHistory = history.map((pair, index) => (
        <Row key={index}>
            <Col>
                <Row className="justify-content-start">
                    <Col className="col-8 text-left">
                        {pair.answer}
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col className="col-8 text-right">
                        <p>{pair.question}</p>
                    </Col>
                </Row>
            </Col>
        </Row>

    ))

    return (
        <div>
            {dialogHistory}
        </div>
    )
}

const interBubbleStyle = {
    "backgroundColor": "lightblue",
    "borderRadius": "10px"
}

const aiBubbleStyle = {
    "backgroundColor": "lightblue",
    "borderRadius": "10px"
}

export default DialogHistory