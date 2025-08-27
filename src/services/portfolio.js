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
  post: async (portfolioData) => {
    try {
      const response = await instance.post('/portfolios', portfolioData)
      return response.data
    } catch (error) {
      console.error('Error posting portfolio data:', error)
      throw error
    }
  },
  put: async (portfolioId, portfolioData) => {
    try {
      const response = await instance.put(
        `/portfolios/${portfolioId}`,
        portfolioData
      )
      return response.data
    } catch (error) {
      console.error('Error updating portfolio data:', error)
      throw error
    }
  },
}

const PORTFOLIO_API_ITEM = {
  getPublic: async (type) => {
    try {
      const response = await instance.get(`/portfolio-items/${type}`)
      return response.data
    } catch (error) {
      console.error('Error fetching portfolio item data:', error)
      throw error
    }
  },
}

export { PORTFOLIO_API, PORTFOLIO_API_ITEM }
