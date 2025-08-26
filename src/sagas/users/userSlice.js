import { createSlice } from '@reduxjs/toolkit'

const userInit = JSON.parse(localStorage.getItem('user'))

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userInit ?? null,
    isAuthenticated: !!userInit,
    loading: false,
    error: null,
  },
  reducers: {
    registerRequest: (state) => {
      state.loading = true
    },
    registerSuccess: (state) => {
      state.loading = false
      state.error = null
    },
    registerFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    signInRequest: (state) => {
      state.loading = true
      state.error = null
    },
    signInSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
      state.isAuthenticated = true
      state.error = null
    },
    signInFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    updateUserRequest: (state) => {
      state.loading = true
      state.error = null
    },
    updateUserSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
      state.error = null
    },
    updateUserFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    updatePublicPortfolioRequest: (state) => {
      state.loading = true
      state.error = null
    },
    updatePublicPortfolioSuccess: (state, action) => {
      state.loading = false
      tate.user = { ...state.user, isPublic: action.payload }
      state.error = null
    },
    updatePublicPortfolioFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    signOut: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
      state.loading = false
      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
  },
})

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updatePublicPortfolioRequest,
  updatePublicPortfolioSuccess,
  updatePublicPortfolioFailure,
  signOut,
} = userSlice.actions
export default userSlice.reducer
