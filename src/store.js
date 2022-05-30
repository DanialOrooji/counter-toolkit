import stateReducer from './redux/stateSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        number: stateReducer
    }
})

export default store