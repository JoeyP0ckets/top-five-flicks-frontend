import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { connect} from 'react-redux'

class TopFiveForm extends React.Component {
  
  handleTopFiveSubmit = e => {
    e.preventDefault()
    const top_five = {
      category: e.target.category.value,
      titleOne: e.target.titleOne.value,
      titleTwo: e.target.titleTwo.value,
      titleThree: e.target.titleThree.value,
      titleFour: e.target.titleFour.value,
      titleFive: e.target.titleFive.value,
      user_id: 77
    }
    alert("Top 5 Succesfully Created")
    // console.log(top_five)
    fetch(`http://localhost:3000/api/v1/top_fives`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify({
        top_five
      }) 
    })
      .then(resp => resp.json())
      .then(newTopFive => this.props.renderTopFive(newTopFive))
      e.target.reset()
      
}

alertMe() {
  return <div class="alert alert-success alert-dismissible fade show">
  <strong>Success!</strong> Your message has been sent successfully.
  <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>
}
  
  render(){
    return(
      <Container>
        <Form onSubmit={e => this.handleTopFiveSubmit(e)}>
          <Form.Group>
            <Form.Label>Top 5...</Form.Label>
              <Form.Control type="text" name="category" placeholder="Example-Best 80's Movies"/>
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

const mdp = dispatch => {
  return{
    renderTopFive: (newTopFive) => dispatch({ type: "ADD_TOP_FIVE", newTopFive: newTopFive})
  }
}

export default connect(null,mdp)(TopFiveForm)