import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from "../feautures/movie/MovieSlice"
import SearchReducer from "../feautures/search-movie/SearchSlice"
import TrailerReducer from "../feautures/trailer-movie/TrailerSlice"
import DetailReducer from "../feautures/detail-movie/DetailSlice"

const rootReducer = {
    movie: MovieReducer,
    search: SearchReducer,
    trailer: TrailerReducer,
    detail: DetailReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store