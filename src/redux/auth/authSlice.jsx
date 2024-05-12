import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tokens: {
        access: '',
        refresh: '',
    },
    user: {
        isAdmin:false,
        isTutor:false,
        isAuthenticated: false,
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.tokens = action.payload.tokens
            state.user = action.payload.user
        },
        logout: (state) => {
            state.tokens = initialState.tokens
            state.user = initialState.user
        }
    }
})


export const { loginSuccess, logout } = authSlice.actions

export default authSlice.reducer