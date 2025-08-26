import instance from '@/services/axios'

const AUTH_API = {
  postLogin: async (data) => {
    try {
      const res = await instance.post('/users/login', {
        email: data.email,
        password: data.password,
      })

      return res.data
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message)
      throw error
    }
  },

  post: async (data) => {
    try {
      const res = await instance.post('/users/refresh-token', {
        refreshToken: data,
      })

      const { accessToken, message } = res.data
      return { accessToken, message }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message)
      throw error
    }
  },

  postRegister: async (data) => {
    try {
      const res = await instance.post('/users/register', {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      })

      return res.data
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message)
      throw error
    }
  },
}

export default AUTH_API
