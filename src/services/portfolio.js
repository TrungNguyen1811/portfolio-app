import instance from './axios'

const PORTFOLIO_API = {
  getPublic: async (slug) => {
    try {
      const response = await instance.get(`/public/portfolio/${slug}`)
      return response.data
    } catch (error) {
      console.error('Error fetching portfolio data:', error)
      throw error
    }
  },
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

const PORTFOLIO_API_ITEM = {
  getPublic: async (slug, type) => {
    try {
      const response = await instance.get(`/public/portfolio/${slug}/${type}`)
      return response.data
    } catch (error) {
      console.error('Error fetching portfolio item data:', error)
      throw error
    }
  },
}

export { PORTFOLIO_API, PORTFOLIO_API_ITEM }
