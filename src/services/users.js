import instance from './axios'

const USERS_API = {
  put: async (user) => {
    try {
      const res = await instance.put(`/users/update-myself`, user)

      return res.data
    } catch (error) {
      throw error
    }
  },

  putPublicPortfolio: async (isPublic) => {
    try {
      const res = await instance.put(`/users/set-public-portfolio`, {
        isPublic: isPublic,
      })

      return res.data
    } catch (error) {
      throw error
    }
  },
}

export default USERS_API
