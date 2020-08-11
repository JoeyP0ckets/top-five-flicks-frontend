import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'

class TopFiveForm extends React.Component {
  
  handleTopFiveSubmit = e => {
    e.preventDefault()
    let top_five = {
      category: e.target.category.value,
      titleOne: e.target.titleOne.value,
      titleTwo: e.target.titleTwo.value,
      titleThree: e.target.titleThree.value,
      titleFour: e.target.titleFour.value,
      titleFive: e.target.titleFive.value,
    }
    console.log(top_five)
  }
  
  render(){
    return(
      <Container>
        <Form onSubmit={e => handleTopFiveSubmit(e)}>
          <Form.Group>
            <Form.Label>Top 5...</Form.Label>
              <Form.Control type="text" name="category" placeholder="Example...Best 80's Movies"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter 5 Flicks</Form.Label>
            <Form.Control type="text" name="titleOne" placeholder="Pick Your Flick"/>
            <Form.Control type="text" name="titleTwo" placeholder="Pick Your Flick"/>
            <Form.Control type="text" name="titleThree" placeholder="Pick Your Flick"/>
            <Form.Control type="text" name="titleFour" placeholder="Pick Your Flick"/>
            <Form.Control type="text" name="titleFive" placeholder="Pick Your Flick"/>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default TopFiveForm