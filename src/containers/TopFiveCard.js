import React from 'react'

const TopFiveCard = (props) => {
  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive} = props.top_five
  return(
    <div>
      {category}
    </div>
  )
}

export default TopFiveCard