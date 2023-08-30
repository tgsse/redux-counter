import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            console.log("login", action.payload)
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        },
    },
})

export const authActions = authSlice.actions
