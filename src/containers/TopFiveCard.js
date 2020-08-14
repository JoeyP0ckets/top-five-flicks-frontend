import React from 'react'
import { connect } from 'react-redux'

const TopFiveCard = (props) => {
  
  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive} = props.top_five
  return(
    <div>
      {category}
    </div>
  )
}



export default TopFiveCard