import { createSlice } from '@reduxjs/toolkit'

const portfoliosSlice = createSlice({
  name: 'portfolios',
  initialState: {
    portfolio: {},
    portfolioItems: [],
    loading: false,
    error: null,
    loadingPortfolio: false,
    errorPortfolio: null,
  },
  reducers: {
    fetchPortfoliosRequest: (state) => {
      state.loadingPortfolio = true
      state.errorPortfolio = null
    },
    fetchPortfoliosSuccess: (state, action) => {
      state.loadingPortfolio = false
      state.portfolio = action.payload
    },
    fetchPortfoliosFailure: (state, action) => {
      state.loadingPortfolio = false
      state.errorPortfolio = action.payload
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

    resetPortfolioItems: (state) => {
      state.portfolioItems = []
      state.loading = false
      state.error = null
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
  resetPortfolioItems,
} = portfoliosSlice.actions

export default portfoliosSlice.reducer
