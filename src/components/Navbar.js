import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Search from "../pages/Search"
import Profile from './Profile'
import TopFiveMain from '../pages/TopFiveMain'
import { connect } from 'react-redux'
import MovieShow from '../pages/MovieShow'
import LoginSignup from '../pages/LoginSignup'



const Navbar = (props) => {
  
  return(
    <div className="navbar-container">
      <h1 className="navbar-title" style={{ color: "red"}}>Top Five Flicks</h1>
      <Router>
      <div>
        {props.user ? null : <Link to="/Login">Login/Signup</Link>}&nbsp;&nbsp;&nbsp;
        {props.user ? <Link to="/">Profile</Link> : null}&nbsp;&nbsp;&nbsp;
        {props.user ? <Link to="/Search">Search</Link> : null}&nbsp;&nbsp;&nbsp;
        {props.user ? <Link to="/TopFives">Top Five</Link> : null}&nbsp;&nbsp;&nbsp;
        {props.user ? <Link to="/Logout">Logout</Link> : null}
       
        <Switch>
          <Route exact path="/">
            {props.user ? <Profile/> : <LoginSignup/>}  
          </Route>
          <Route path="/Search">
            {props.selectedMovie ? <MovieShow/> : <Search/>}
          </Route>
          <Route path="/TopFives">
            <TopFiveMain/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
 }
  
const msp = state => {
  return {
    selectedMovie: state.selectedMovie,
    user: state.user
  }
}

export default connect(msp)(Navbar)