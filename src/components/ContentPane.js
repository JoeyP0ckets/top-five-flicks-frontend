import React from 'react'
import Profile from './Profile'
import MovieShow from '../pages/MovieShow'
import Search from '../pages/Search'
import { connect } from 'react-redux'
import ReviewForm from '../components/ReviewForm'


const ContentPane = (props) => {
  return(
    <div>
      {props.selectedMovie ? <MovieShow /> : 
      <>
      <ReviewForm />
      <Search />
      <Profile />
      </>
      }
    </div>
  )
}

const msp = state => {
  return{
    selectedMovie: state.selectedMovie
  }
}

export default connect(msp)(ContentPane)