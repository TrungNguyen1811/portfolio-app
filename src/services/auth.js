import instance from '@/services/axios'

const AUTH_API = {
  postLogin: async (data) => {
    try {
      const res = await instance.post('/users/login', data)

      return res.data
    } catch (error) {
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
      throw error
    }
  },

  postRegister: async (data) => {
    try {
      const res = await instance.post('/users/register', data)

      return res.data
    } catch (error) {
      throw error
    }
  },
}

export default AUTH_API
