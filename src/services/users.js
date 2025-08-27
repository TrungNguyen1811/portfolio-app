import instance from './axios'

const USERS_API = {
  put: async (user) => {
    try {
      const res = await instance.put(`/users/update-myself`, {
        fullname: user.fullname,
        email: user.email,
      })

      return res.data
    } catch (error) {
      throw error.message
    }
  },

  putPublicPortfolio: async (isPublic) => {
    try {
      const res = await instance.put(`/users/set-public-portfolio`, {
        isPublic: isPublic,
      })

      return res.data
    } catch (error) {
      throw error.message
    }
  },
}

export default USERS_API
