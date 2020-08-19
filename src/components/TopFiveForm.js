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
      user_id: this.props.user.id
    }
    this.alertMe()
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
      .then(newTopFive => this.props.addToAllTopFives(newTopFive))
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
            <Form.Label className="review-text">Top 5...</Form.Label>
              <Form.Control type="text" name="category" placeholder="Example-Best 80's Movies"/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="review-text">Enter 5 Flicks</Form.Label>
            <h3 className="review-text"> Flick 1</h3><Form.Control type="text" name="titleOne" placeholder="Pick Your Flick"/>
            <h3 className="review-text"> Flick 2</h3><Form.Control type="text" name="titleTwo" placeholder="Pick Your Flick"/>
            <h3 className="review-text"> Flick 3</h3><Form.Control type="text" name="titleThree" placeholder="Pick Your Flick"/>
            <h3 className="review-text"> Flick 4</h3><Form.Control type="text" name="titleFour" placeholder="Pick Your Flick"/>
            <h3 className="review-text"> Flick 5</h3><Form.Control type="text" name="titleFive" placeholder="Pick Your Flick"/>
          </Form.Group>
          <br></br>
          <br></br>
          <Button variant="success" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

const msp = state => {
  return {
    user: state.user
  }
}

const mdp = dispatch => {
  return{
    renderTopFive: (newTopFive) => dispatch({ type: "ADD_TOP_FIVE", newTopFive: newTopFive}),
    addToAllTopFives: (newTopFive) => dispatch({ type: "ADD_MAIN_TOP_FIVE", newTopFive: newTopFive})
  }
}

export default connect(msp,mdp)(TopFiveForm)