import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from "../feautures/movie/MovieSlice"
import SearchReducer from "../feautures/search-movie/SearchSlice"
import TrailerReducer from "../feautures/trailer-movie/TrailerSlice"
import DetailReducer from "../feautures/detail-movie/DetailSlice"
import GenresReducer from "../feautures/genres-movie/GenresSlice"

const rootReducer = {
    movie: MovieReducer,
    search: SearchReducer,
    trailer: TrailerReducer,
    detail: DetailReducer,
    genres: GenresReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store