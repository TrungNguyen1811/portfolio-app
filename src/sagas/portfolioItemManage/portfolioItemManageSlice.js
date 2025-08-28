import { createSlice } from '@reduxjs/toolkit'

const portfolioItemManageSlice = createSlice({
  name: 'portfolioItemManage',
  initialState: {
    list: [],
    detail: null,
    type: 'education',
    loading: false,
    actionLoading: false,
    error: null,
  },
  reducers: {
    getPortfolioItemRequest: (state, action) => {
      state.loading = true
      state.error = null
      state.type = action.payload
    },

    getPortfolioItemSuccess: (state, action) => {
      state.loading = false
      state.list = action.payload
      state.error = null
    },
    getPortfolioItemFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addPortfolioItemRequest: (state) => {
      state.actionLoading = true
      state.error = null
    },
    addPortfolioItemSuccess: (state) => {
      state.actionLoading = false
      state.error = null
    },
    addPortfolioItemFailure: (state, action) => {
      state.actionLoading = false
      state.error = action.payload
    },
    updatePortfolioItemRequest: (state) => {
      state.actionLoading = true
      state.error = null
    },
    updatePortfolioItemSuccess: (state) => {
      state.actionLoading = false
      state.error = null
    },
    updatePortfolioItemFailure: (state, action) => {
      state.actionLoading = false
      state.error = action.payload
    },

    deletePortfolioItemRequest: (state) => {
      state.actionLoading = true
      state.error = null
    },
    deletePortfolioItemSuccess: (state) => {
      state.actionLoading = false
      state.error = null
    },
    deletePortfolioItemFailure: (state, action) => {
      state.actionLoading = false
      state.error = action.payload
    },

    resetPortfolioItemManage: (state) => {
      state.list = []
      state.detail = null
      state.loading = false
      state.actionLoading = false
      state.error = null
    },
  },
})

export const {
  getPortfolioItemRequest,
  getPortfolioItemSuccess,
  getPortfolioItemFailure,
  addPortfolioItemRequest,
  addPortfolioItemSuccess,
  addPortfolioItemFailure,
  updatePortfolioItemRequest,
  updatePortfolioItemSuccess,
  updatePortfolioItemFailure,
  deletePortfolioItemRequest,
  deletePortfolioItemSuccess,
  deletePortfolioItemFailure,
  resetPortfolioItemManage,
} = portfolioItemManageSlice.actions
export default portfolioItemManageSlice.reducer
