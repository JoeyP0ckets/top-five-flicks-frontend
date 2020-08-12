

const initialState = {
  user: {},
  topFives: [],
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
    case "ADD_TOP_FIVE":
      return {...prevState, user: {...prevState.user, top_fives: [...prevState.user.top_fives, action.newTopFive]}}
    case "ADD_REVIEW":
      return {...prevState, user: {...prevState.user, reviews: [...prevState.user.reviews, action.newReview]}}
    case "ADD_TO_WATCHLIST":
      return {...prevState, user: {...prevState.user, watchlist: {...prevState.user.watchlist, watchlist_movies: [...prevState.user.watchlist.watchlist_movies, action.newWatchlistMovie]}}}
    case "DESELECT_MOVIE":
      return {...prevState, selectedMovie: action.selectedMovie}
    case "RENDER_TOP_FIVES":
      return {...prevState, topFives: action.allFives}
    default:
      return prevState
  }
}

export default reducer