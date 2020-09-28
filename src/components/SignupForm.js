import React from 'react'
import {connect} from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import * as action from '../actionCreators/actionCreator'

const SignupForm = (props) => {

  const handleSignupSubmit = e => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    fetch (`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify({
        user
      })
    })
      .then(resp => resp.json())
      .then((user) => {
        props.loginUser(user)
      })
      e.target.reset()
  }
  
  return(
    <Form onSubmit={e => handleSignupSubmit(e)}>
       <Form.Group>
        <Form.Control type="text" placeholder="Username" name="username"/>  
        <Form.Control type="text" placeholder="Password" name="password"/>
        <br></br>   
        <Button type="submit">Signup</Button>
       </Form.Group>
    </Form>
  )
}

const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch(action.loginUser(user))
  }
}

export default connect(null,mdp)(SignupForm)