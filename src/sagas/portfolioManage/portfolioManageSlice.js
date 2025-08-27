import { createSlice } from '@reduxjs/toolkit'

const portfolioSlice = createSlice({
  name: 'portfolioManage',
  initialState: {
    portfolio: null,
    loading: false,
    actionLoading: false,
    error: null,
  },
  reducers: {
    getPortfolioRequest: (state) => {
      state.loading = true
    },
    getPortfolioSuccess: (state, action) => {
      state.loading = false
      state.portfolio = action.payload
      state.error = null
    },
    getPortfolioFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updatePortfolioRequest: (state) => {
      state.actionLoading = true
    },
    updatePortfolioSuccess: (state, action) => {
      state.actionLoading = false
      state.portfolio = action.payload
      state.error = null
    },
    updatePortfolioFailure: (state, action) => {
      state.actionLoading = false
      state.error = action.payload
    },
  },
})

export const {
  getPortfolioRequest,
  getPortfolioSuccess,
  getPortfolioFailure,
  updatePortfolioRequest,
  updatePortfolioSuccess,
  updatePortfolioFailure,
} = portfolioSlice.actions
export default portfolioSlice.reducer
