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
    movieListNowPlaying: [],
    movieListPopular: [],
    movieListToprated: [],
    movieListUpcoming: [],
    status: "ide",
}

export const getMovieListNowPlaying = createAsyncThunk('getMovieListNowPlaying', async () => {
    const response = await apiService.get("/movie/now_playing", options)
    return response.results
})
export const getMovieListPopular = createAsyncThunk('getMovieListPopular', async () => {
    const response = await apiService.get("/movie/popular", options)
    return response.results
})
export const getMovieListToprated = createAsyncThunk('getMovieListToprated', async () => {
    const response = await apiService.get("/movie/top_rated", options)
    return response.results
})
export const getMovieListUpcoming = createAsyncThunk('getMovieListUpcoming', async () => {
    const response = await apiService.get("/movie/upcoming", options)
    return response.results
})


export const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMovieListNowPlaying.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getMovieListNowPlaying.fulfilled, (state, action) => {
                state.status = "idea"
                state.movieListNowPlaying = action.payload
            })
            .addCase(getMovieListNowPlaying.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getMovieListPopular.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getMovieListPopular.fulfilled, (state, action) => {
                state.status = "idea"
                state.movieListPopular = action.payload
            })
            .addCase(getMovieListPopular.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getMovieListToprated.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getMovieListToprated.fulfilled, (state, action) => {
                state.status = "idea"
                state.movieListToprated = action.payload
            })
            .addCase(getMovieListToprated.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getMovieListUpcoming.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getMovieListUpcoming.fulfilled, (state, action) => {
                state.status = "idea"
                state.movieListUpcoming = action.payload
            })
            .addCase(getMovieListUpcoming.rejected, (state) => {
                state.status = "rejected"
            })
    }
})

export default movieSlice.reducer