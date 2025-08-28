import PortfolioItem from '@/components/common/portfolioItem'
import {
  getPortfolioItemRequest,
  resetPortfolioItemManage,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ProjectManagement = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolioItemRequest('project'))
    return () => {
      dispatch(resetPortfolioItemManage())
    }
  }, [dispatch])

  return <PortfolioItem type={'project'} />
}

export default ProjectManagement
