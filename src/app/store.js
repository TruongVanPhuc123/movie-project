import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from "../feautures/movie/MovieSlice"
import SearchReducer from "../feautures/search-movie/SearchSlice"
import TrailerReducer from "../feautures/trailer-movie/TrailerSlice"
import DetailReducer from "../feautures/detail-movie/DetailSlice"
import GenresReducer from "../feautures/genres-movie/GenresSlice"
import CreditsReducer from "../feautures/credit-movie/CreditSlice"
import TVReducer from "../feautures/TV/TVSlice"

const rootReducer = {
    movie: MovieReducer,
    tv: TVReducer,
    search: SearchReducer,
    trailer: TrailerReducer,
    detail: DetailReducer,
    genres: GenresReducer,
    credits: CreditsReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store