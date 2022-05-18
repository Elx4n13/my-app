import React from 'react'
import { createSlice } from "@reduxjs/toolkit"

const filmSlice = createSlice({
    name: "film",
    initialState: {
        films: []
    },
    reducers: {
        searchFilms: (state, action) => {
            console.log('state', state);
            console.log('action', action);
            state.films.push(action.payload)
        }
    }
})

export const { searchFilms } = filmSlice.actions;

export default filmSlice.reducer;