import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiService from "../../app/apiService"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

const initialState = {
    genresList: [],
    genresMovieList: [],
    status: "ide",
}

export const getGenresList = createAsyncThunk('getGenresList', async () => {
    const response = await apiService.get(`/genre/movie/list`, options)
    return response.genres
})
export const getGenresMovieList = createAsyncThunk('getGenresMovieList', async ({ id, page }) => {
    console.log(id)
    const response = await apiService.get(`/discover/movie?api_key=5be5d338bfe89e06c31e5034b37b82d2&language=en-US&append_to_response=videos&with_genres=${id}&page=${page}`, options)
    return response.results
})


export const genresSlice = createSlice({
    name: "trailer",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getGenresList.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getGenresList.fulfilled, (state, action) => {
                state.status = "idea"
                state.genresList = action.payload
            })
            .addCase(getGenresList.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getGenresMovieList.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getGenresMovieList.fulfilled, (state, action) => {
                state.status = "idea"
                state.genresMovieList = action.payload
            })
            .addCase(getGenresMovieList.rejected, (state) => {
                state.status = "rejected"
            })
    }
})


export default genresSlice.reducer