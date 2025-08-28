import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolioItemsRequest } from '@/sagas/portfolios/portfolioSlice'

export const usePortfolioItems = (type) => {
  const dispatch = useDispatch()
  const { portfolioItems, loading, error } = useSelector(
    (state) => state.portfolios
  )
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    if (user?.portfolioSlug && type) {
      dispatch(
        getPortfolioItemsRequest({
          slug: user.portfolioSlug,
          type,
        })
      )
    }
  }, [dispatch, user?.portfolioSlug, type])

  return { portfolioItems, loading, error }
}
