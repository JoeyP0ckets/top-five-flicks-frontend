

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
      return {...prevState, 
              user: {
                ...prevState.user, 
                watchlist: {
                  ...prevState.user.watchlist, 
                  watchlist_movies: [
                    ...prevState.user.watchlist.watchlist_movies, 
                    action.newWatchlistMovie]}}}
    case "DESELECT_MOVIE":
      return {...prevState, selectedMovie: null}
    case "RENDER_TOP_FIVES":
      return {...prevState, topFives: action.allFives}
    case "ADD_MAIN_TOP_FIVE":
      return {...prevState, topFives: [...prevState.topFives, action.newTopFive]}
    case "REMOVE_MAIN_TOP": 
      let newAllFiveArray = prevState.topFives.filter(top_five => top_five.id !== action.id)
      return {...prevState, topFives: newAllFiveArray}
    case "REMOVE_FROM_WATCHLIST":
      let newWatchlistArray = prevState.user.watchlist.watchlist_movies.filter(movie => movie.id !== action.id)
      return {...prevState, user: {...prevState.user, watchlist: {...prevState.user.watchlist, watchlist_movies: newWatchlistArray}}}
    case "REMOVE_REVIEW":
      let newReviewArray = prevState.user.reviews.filter(review => review.id !== action.id)
      return {...prevState, user: {...prevState.user, reviews: newReviewArray}}
    case "REMOVE_TOP_FIVE":
      let newFiveArray = prevState.user.top_fives.filter(top_five => top_five.id !== action.id)
      return {...prevState, user: {...prevState.user, top_fives: newFiveArray}}

    default:
      return prevState
  }
}

export default reducer

