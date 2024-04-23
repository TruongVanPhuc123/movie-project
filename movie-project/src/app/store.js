import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from "../feautures/movie/MovieSlice"
import SearchReducer from "../feautures/search-movie/SearchSlice"
import TrailerReducer from "../feautures/trailer-movie/TrailerSlice"

const rootReducer = {
    movie: MovieReducer,
    search: SearchReducer,
    trailer: TrailerReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store