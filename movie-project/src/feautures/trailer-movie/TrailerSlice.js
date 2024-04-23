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
    trailerId: {},
    status: "ide",
}

export const getIdTrailer = createAsyncThunk('getIdTrailer', async ({ id }) => {
    const response = await apiService.get(`/movie/${id}/videos?language=en-US`, options)
    return response.results
})


export const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getIdTrailer.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getIdTrailer.fulfilled, (state, action) => {
                state.status = "idea"
                state.trailerId = action.payload
            })
            .addCase(getIdTrailer.rejected, (state) => {
                state.status = "rejected"
            })
    }
})


export default trailerSlice.reducer