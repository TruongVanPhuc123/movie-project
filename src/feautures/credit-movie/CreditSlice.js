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
    creditsList: [],
    person: {},
    combined: {},
    status: "ide",
}

export const getCreditMovie = createAsyncThunk('getCreditMovie', async ({ id }) => {
    const response = await apiService.get(`/movie/${id}/credits`, options)
    return response
})
export const getPerson = createAsyncThunk('getPerson', async ({ id }) => {
    const response = await apiService.get(`/person/${id}`, options)
    return response
})
export const getCombindedPerson = createAsyncThunk('getCombindedPerson', async ({ id }) => {
    const response = await apiService.get(`/person/${id}/combined_credits`, options)
    return response
})


export const detailSlice = createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCreditMovie.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getCreditMovie.fulfilled, (state, action) => {
                state.status = "idea"
                state.creditsList = action.payload
            })
            .addCase(getCreditMovie.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getPerson.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getPerson.fulfilled, (state, action) => {
                state.status = "idea"
                state.person = action.payload
            })
            .addCase(getPerson.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getCombindedPerson.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getCombindedPerson.fulfilled, (state, action) => {
                state.status = "idea"
                state.combined = action.payload
            })
            .addCase(getCombindedPerson.rejected, (state) => {
                state.status = "rejected"
            })
    }
})


export default detailSlice.reducer