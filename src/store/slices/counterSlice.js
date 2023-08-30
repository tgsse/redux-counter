import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    isVisible: true,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++ // here it is safe to mutate state directly (redux toolkit handles this behind the scenes)
        },
        decrement(state) {
            state.value--
        },
        increaseBy(state, action) {
            state.value += action.payload
        },
        toggle(state) {
            state.isVisible = !state.isVisible
        },
    },
})

export const counterActions = counterSlice.actions