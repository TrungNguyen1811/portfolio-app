import instance from './axios'

const PORTFOLIO_API = {
  get: async () => {
    try {
      const res = await instance.get(`/portfolios`)
      return res.data
    } catch (error) {
      throw error
    }
  },
  put: async (payload) => {
    try {
      const res = await instance.put(`/portfolios`, payload)
      return res.data
    } catch (error) {
      throw error.message
    }
  },
}

export default PORTFOLIO_API
