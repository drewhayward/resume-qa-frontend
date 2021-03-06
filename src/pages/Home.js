import React from 'react'
import axios from 'axios'

import { Image, Row, Col } from 'react-bootstrap'

import QABar from '../components/QABar'
import profilePic from '../profile500.jpg'
// import Typist from 'react-typist'
import DialogHistory from '../components/DialogHistory'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            answerText: "",
            showCursor: false,
            history: []
        }

        this.fetchQuestionAnswer = this.fetchQuestionAnswer.bind(this)
    }

    fetchQuestionAnswer(text) {
        axios.post("https://qabackend-mgbfvhje3a-uc.a.run.app/question/", {
            'question': text
        }).then((resp) => {
            var answer = resp.data.answer
            answer = answer.charAt(0).toUpperCase() + answer.slice(1)
            this.setState({
                answerText: answer,
                history: [{ question: text, answer: answer }].concat(this.state.history)
            })
        }).catch((resp) => {
            console.log(resp)
            this.setState({
                answerText: "IT failed"
            })
        })
    }

    render() {
        return (
            <div>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <p>
                            Talk to resume is a fun little work-in-progress to learn/practice deploying NLP/ML models.
                            Type in any question you might ask about my professional experience and see how
                            the model answers!
                        </p>
                        <b>
                            Please note that my little demo here feels no remorse in lying about my experience.
                            If you want to confirm its answers, go checkout my social media or reach out via email.
                        </b>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{ padding: 10 }}>
                    <Col md={8}>
                        <QABar onSubmit={this.fetchQuestionAnswer} />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <DialogHistory history={this.state.history} />
                    </Col>
                </Row>
            </div >
        )
    }

}

export default Home