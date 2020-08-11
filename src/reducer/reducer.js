

const initialState = {
  user: {},
  searchedOMDB: [],
  selectedMovie: null
}

const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    case "RENDER_USER":
      return {...prevState, user: action.payload.value}
    case "SEARCHED_OMDB":
      return {...prevState, searchedOmdb: action.searchedOmdb}
    case "SELECT_MOVIE":
      return {...prevState, selectedMovie: action.selectedMovie}
    case "RERENDER_USER":
      return {...prevState, user: action.user}
    default:
      return prevState
  }
}

export default reducer