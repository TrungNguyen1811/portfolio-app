import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  getPortfolioRequest,
  updatePortfolioRequest,
} from '@/sagas/portfolioManage/portfolioManageSlice'
import { fileToBase64 } from '@/utils/getImage'

const usePortfolioManage = () => {
  const { portfolio, loading, actionLoading } = useSelector(
    (state) => state.portfolioManage
  )
  const dispatch = useDispatch()

  const [file, setFile] = useState(null)

  const getInitialValues = (editValue) => ({
    overview: editValue?.overview || '',
    socials: editValue?.socials || [],
    cvUrl: editValue?.cvUrl || '',
    avatar: editValue?.avatar || null,
    email: editValue?.email || '',
    facebook:
      editValue?.socials?.find((s) => s.title === 'facebook')?.url || '',
    linkedin:
      editValue?.socials?.find((s) => s.title === 'linkedin')?.url || '',
    instagram:
      editValue?.socials?.find((s) => s.title === 'instagram')?.url || '',
  })

  const formik = useFormik({
    initialValues: getInitialValues(portfolio),
    enableReinitialize: true,
    validationSchema: Yup.object({
      overview: Yup.string().required('Overview is required'),
      cvUrl: Yup.string().url('Invalid URL').required('CV URL is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      facebook: Yup.string().url('Invalid URL'),
      linkedin: Yup.string().url('Invalid URL'),
      instagram: Yup.string().url('Invalid URL'),
    }),
    onSubmit: async (values) => {
      const { cvUrl, email, overview, facebook, linkedin, instagram } = values
      const avatar = file ? await fileToBase64(file.originFileObj) : null

      const dataValues = {
        cvUrl,
        email,
        overview,
        avatar,
        socials: [
          { title: 'facebook', url: facebook },
          { title: 'linkedin', url: linkedin },
          { title: 'instagram', url: instagram },
        ],
      }
      handleUpdatePortfolio(dataValues)
    },
  })

  const handleAvatarChange = (file) => {
    setFile(file)
  }

  const getDataPortfolio = async () => {
    await dispatch(getPortfolioRequest())
  }

  const handleUpdatePortfolio = async (data) => {
    await dispatch(updatePortfolioRequest(data))
  }

  return {
    formik,
    handleAvatarChange,
    getDataPortfolio,
    portfolio,
    loading,
    actionLoading,
  }
}

export default usePortfolioManage
