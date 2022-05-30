import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }
export const stateReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
    },
})
export const { increment, decrement, reset } = stateReducer.actions
export default stateReducer.reducer
