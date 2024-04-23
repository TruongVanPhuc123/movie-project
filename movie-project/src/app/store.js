import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from "../feautures/movie/MovieSlice"
import SearchReducer from "../feautures/search-movie/SearchSlice"

const rootReducer = {
    movie: MovieReducer,
    search: SearchReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store