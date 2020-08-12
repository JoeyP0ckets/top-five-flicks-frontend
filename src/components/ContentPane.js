import React from 'react'
import Profile from './Profile'
import MovieShow from '../pages/MovieShow'
import Search from '../pages/Search'
import { connect } from 'react-redux'
// import TopFiveMain from '../pages/TopFiveMain'
// import SignupForm from './SignupForm'


const ContentPane = (props) => {
  return(
    <div>
      {props.selectedMovie ? <MovieShow /> : 
      <>
      {/* <SignupForm/> */}
      <Search />
      <Profile /> 
      {/* <TopFiveMain/> */}
      </>}
      
    </div>
  )
}

const msp = state => {
  return{
    selectedMovie: state.selectedMovie
  }
}

export default connect(msp)(ContentPane)