import { signInRequest } from '@/sagas/users/userSlice'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password needs to be at least 6 characters.')
    .required('Password is required'),
})

const useLogIn = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const onSubmit = (data) => {
    dispatch(
      signInRequest({
        values: data,
        callback: () => {
          navigate('/')
        },
      })
    )
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit,
  })

  const getFieldProps = (name) => ({
    validateStatus:
      formik.touched[name] && formik.errors[name] ? 'error' : undefined,
    help:
      formik.touched[name] && formik.errors[name]
        ? formik.errors[name]
        : undefined,
  })

  const getInputStatus = (name) =>
    formik.touched[name] && formik.errors[name] ? 'error' : undefined

  return { formik, getFieldProps, getInputStatus, loading, error }
}

export default useLogIn
