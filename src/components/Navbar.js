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


const Navbar = (props) => {
  
  return(
    <div>
      <h1 style={{ color: 'lightgreen' }}>Top Five Flicks</h1>
      <Router>
      <div>
        <Link to="/">Profile</Link>
        <Link to="/Search">Search</Link>
        <Link to="/TopFives">Top Five</Link>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Profile/>
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
    selectedMovie: state.selectedMovie
  }
}

export default connect(msp)(Navbar)