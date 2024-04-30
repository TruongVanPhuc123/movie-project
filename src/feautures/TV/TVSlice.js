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
    tvAiringToday: [],
    tvOnTheAir: [],
    tvPopular: [],
    tvToprated: [],
    status: "ide",
}

export const getTVAiringToday = createAsyncThunk('getTVAiringToday', async ({ page }) => {
    const response = await apiService.get(`/tv/airing_today?&page=${page}`, options)
    return response.results
})
export const getTVOnTheAir = createAsyncThunk('getTVOnTheAir', async ({ page }) => {
    const response = await apiService.get(`/tv/on_the_air?&page=${page}`, options)
    return response.results
})
export const getTVPopular = createAsyncThunk('getTVPopular', async ({ page }) => {
    const response = await apiService.get(`/tv/popular?&page=${page}`, options)
    return response.results
})
export const getTVToprated = createAsyncThunk('getTVToprated', async ({ page }) => {
    const response = await apiService.get(`/tv/top_rated?&page=${page}`, options)
    return response.results
})


export const tvSlice = createSlice({
    name: "tv",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTVAiringToday.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getTVAiringToday.fulfilled, (state, action) => {
                state.status = "idea"
                state.tvAiringToday = action.payload
            })
            .addCase(getTVAiringToday.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getTVOnTheAir.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getTVOnTheAir.fulfilled, (state, action) => {
                state.status = "idea"
                state.tvOnTheAir = action.payload
            })
            .addCase(getTVOnTheAir.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getTVPopular.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getTVPopular.fulfilled, (state, action) => {
                state.status = "idea"
                state.tvPopular = action.payload
            })
            .addCase(getTVPopular.rejected, (state) => {
                state.status = "rejected"
            })
        builder
            .addCase(getTVToprated.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getTVToprated.fulfilled, (state, action) => {
                state.status = "idea"
                state.tvToprated = action.payload
            })
            .addCase(getTVToprated.rejected, (state) => {
                state.status = "rejected"
            })
    }
})

export default tvSlice.reducer