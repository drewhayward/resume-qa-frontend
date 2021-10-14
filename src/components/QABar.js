import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

class QABar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hintText: "Ask me anything...",
            inputText: "",
            showModal: false
        }

        this.onTextChange = this.onTextChange.bind(this)
        this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
    }

    onTextChange(e) {
        this.setState({
            inputText: e.target.value
        })
    }

    onKeyUpHandler(e) {
        if (e.key === "Enter") {
            this.props.onSubmit(e.target.value)
            this.setState({ inputText: "" })
        }
    }


    render() {
        return (
            <Row className="justify-content-left align-items-center" style={searchbarStyle}>
                <Col xs="10">
                    <input
                        value={this.state.inputText}
                        placeholder={this.state.hintText}
                        onFocus={this.onTextFocus}
                        onChange={this.onTextChange}
                        onKeyUp={this.onKeyUpHandler}
                        style={{ border: "none", height: '41px', fontSize: '22pt', marginLeft: '3px', width: "95%", 'outlineWidth': 0 }}
                        type="field" />
                </Col>
                {/* <Col xs="2">
                    <Button
                        style={buttonStyle}
                        onClick={() => this.setState({ showModal: true })}
                        type="button">?</Button>
                </Col> */}
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        What is this?
                    </Modal.Header>
                    <Modal.Body>
                        I deployed a question-answering model conditioned on a
                        fact-heavy bio of myself. You can ask it questions about my
                        experience, education, or whatever, and it will try to answer
                        them.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Row>)
    }
}

const buttonStyle = {
    "backgroundColor": "none",
    "borderRadius": "48px"
}

const searchbarStyle = {
    "borderColor": "black",
    "border": "solid",
    "borderRadius": "48px",
    "borderWidth": "1px",
    "marginTop": "10px"
}

export default QABar