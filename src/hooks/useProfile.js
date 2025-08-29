import {
  updatePublicPortfolioRequest,
  updateUserRequest,
} from '@/sagas/users/userSlice'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { App } from 'antd'

const useProfile = () => {
  const { user, loading, actionLoading } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const { message } = App.useApp()
  const isPublic = Boolean(user.isPublic)

  const initialValues = {
    fullname: user.fullname || '',
    nickName: user.nickName || '',
    birthday: user.birthday || '',
    genre: user.genre || 'other',
    email: user.email || '',
    phone: user.phone || '',
  }

  const validationSchema = Yup.object({
    fullname: Yup.string(),
    nickName: Yup.string(),
    birthday: Yup.date().nullable(),
    genre: Yup.string().oneOf(['male', 'female', 'other']),
    email: Yup.string().email('Invalid Email'),
    phone: Yup.string()
      .matches(/^[0-9]{10,11}$/, 'Invalid phone number')
      .nullable(),
  })

  const onSubmit = async (data) => {
    await dispatch(
      updateUserRequest({
        values: data,
        callback: ({ success, messageResponse }) => {
          if (success) {
            message.success(messageResponse)
          } else {
            message.error(messageResponse)
          }
        },
      })
    )
  }

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  })

  const handPublicPortfolio = async () => {
    await dispatch(
      updatePublicPortfolioRequest({
        value: !isPublic,
        callback: ({ success, messageResponse }) => {
          if (success) {
            message.success(messageResponse)
          } else {
            message.error(messageResponse)
          }
        },
      })
    )
  }

  const handleNavigatePortfolio = () => {
    const fulUrl = window.location.origin + '/public/' + user.portfolioSlug
    window.open(fulUrl, '_blank')
  }

  return {
    user,
    formik,
    loading,
    actionLoading,
    handPublicPortfolio,
    handleNavigatePortfolio,
  }
}

export default useProfile
