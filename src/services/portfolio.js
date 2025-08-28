import instance from './axios'

const PORTFOLIO_API = {
  getPublic: async (slug) => {
    try {
      const response = await instance.get(`/public/portfolio/${slug}`)
      return response.data
    } catch (error) {
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
      throw error
    }
  },
}

const PORTFOLIO_API_ITEM = {
  getPublic: async (slug, type) => {
    try {
      const response = await instance.get(`/public/portfolio/${slug}/${type}`)
      return response.data
    } catch (error) {
      throw error
    }
  },
  getByType: async (type) => {
    // type can education || experience || project
    try {
      const res = await instance.get(`/portfolio-items/${type}`)
      return res.data
    } catch (error) {
      throw error
    }
  },
  post: async (payload) => {
    try {
      const res = await instance.post(`/portfolio-items`, payload)
      return res.data
    } catch (error) {
      throw error
    }
  },
  put: async (payload) => {
    try {
      const { id, ...values } = payload
      const res = await instance.put(`/portfolio-items/${id}`, values)
      return res.data
    } catch (error) {
      throw error
    }
  },
  delete: async (id) => {
    try {
      const res = await instance.delete(`/portfolio-items/${id}`)
      return res.data
    } catch (error) {
      throw error
    }
  },
}

export { PORTFOLIO_API, PORTFOLIO_API_ITEM }
