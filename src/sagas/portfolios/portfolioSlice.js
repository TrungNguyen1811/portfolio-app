import { createSlice } from '@reduxjs/toolkit'

const portfoliosSlice = createSlice({
  name: 'portfolios',
  initialState: {
    portfolio: {},
    portfolioItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPortfoliosRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchPortfoliosSuccess: (state, action) => {
      state.loading = false
      state.portfolio = action.payload
    },
    fetchPortfoliosFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    getPortfolioItemsRequest: (state) => {
      state.loading = true
      state.error = null
    },
    getPortfolioItemsSuccess: (state, action) => {
      state.loading = false
      state.portfolioItems = action.payload
    },
    getPortfolioItemsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  fetchPortfoliosRequest,
  fetchPortfoliosSuccess,
  fetchPortfoliosFailure,
  getPortfolioItemsRequest,
  getPortfolioItemsSuccess,
  getPortfolioItemsFailure,
} = portfoliosSlice.actions

export default portfoliosSlice.reducer
