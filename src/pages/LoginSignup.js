import React from "react"
import {Col, Row} from "react-bootstrap"
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'

const LoginSignup = () => {
  return(
    <div className="login-container">
      <Row>
        <Col xs={6} md={6}>
        <h3 className="review-text">Login</h3>
        <LoginForm/>
        </Col>
        <Col xs={6} md={6}>
        <h3 className="review-text" style={{ color: "black"}}>Signup</h3>
        <SignupForm/>
        </Col>
      </Row>

    </div>
  )
}

export default LoginSignup