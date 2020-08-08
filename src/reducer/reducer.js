const initialState = {
  user: {}
}

const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    case "RENDER_USER":
      return {prevState, user: action.payload.value}
    default:
      return prevState
  }
}

export default reducer