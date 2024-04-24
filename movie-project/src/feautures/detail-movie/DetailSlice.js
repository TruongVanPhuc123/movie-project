import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiService from "../../app/apiService"

const initialState = {
    detailId: {},
    status: "ide",
}

export const getMovieDetail = createAsyncThunk('getMovieDetail', async ({ id }) => {
    const response = await apiService.get(`/movie/${id}?api_key=5be5d338bfe89e06c31e5034b37b82d2`)
    console.log(id)
    return response
})


export const detailSlice = createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMovieDetail.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.status = "idea"
                state.detailId = action.payload
            })
            .addCase(getMovieDetail.rejected, (state) => {
                state.status = "rejected"
            })
    }
})


export default detailSlice.reducer