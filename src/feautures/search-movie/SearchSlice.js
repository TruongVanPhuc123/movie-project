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
    searchList: [],
    status: "ide",
}

export const getMovieListSearch = createAsyncThunk('getMovieListSearch', async ({ query, page }) => {
    console.log(query, page)
    const response = await apiService.get(`/search/movie?query=${query}&page=${page}`, options)
    return response.results
})


export const searchSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMovieListSearch.pending, (state) => {
                state.status = "pending"
                state.searchList = []
            })
            .addCase(getMovieListSearch.fulfilled, (state, action) => {
                state.status = "idea"
                state.searchList = action.payload
            })
            .addCase(getMovieListSearch.rejected, (state) => {
                state.status = "rejected"
            })
    }
})

export default searchSlice.reducer