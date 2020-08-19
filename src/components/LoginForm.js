import React from 'react'
import { Form, Button } from 'react-bootstrap'
import * as action from '../actionCreators/actionCreator'
import { connect } from 'react-redux'

const LoginForm = (props) => {

  const handleLoginSubmit = e => {
    e.preventDefault()
    const user = {
      user: {
        username: e.target.username.value,
        password: e.target.password.value
      }
    }
    console.log(user)
    fetch (`http://localhost:3000/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then((user) => {
        props.loginUser(user)
      })
      e.target.reset()
  }
  // props.loginUser(user)
  return(
    <Form onSubmit={e => handleLoginSubmit(e)}>
       <Form.Group>
        <Form.Control type="text" placeholder="Username" name="username"/>  
        <Form.Control type="password" placeholder="Password" name="password"/>   
        <br></br>
        <Button type="submit">Login</Button>
       </Form.Group>
    </Form>
  )
}

const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch(action.loginUser(user))
  }
}

export default connect(null,mdp)(LoginForm)