import {createReducer} from "@reduxjs/toolkit"

export const authReducer = createReducer({},{
    loadUserRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload
    },
    loadUserFail:(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    },
    logOutUserRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    logOutUserSuccess:(state,)=>{
        state.loading = false
        state.isAuthenticated = false
        state.user = null
    },
    logOutUserFail:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    clearError:(state)=>{
        state.error = null
    }
})