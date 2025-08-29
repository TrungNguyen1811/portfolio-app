import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPortfolioItemsRequest,
  resetPortfolioItems as resetPortfolioItemsAction,
} from '@/sagas/portfolios/portfolioSlice'
import { useParams } from 'react-router-dom'

export const usePortfolioItems = (type) => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const { portfolioItems, loading, error } = useSelector(
    (state) => state.portfolios
  )

  const getPortfolioItems = useCallback(() => {
    if (slug && type) {
      dispatch(getPortfolioItemsRequest({ slug, type }))
    }
  }, [dispatch, slug, type])

  const resetPortfolioItems = useCallback(() => {
    dispatch(resetPortfolioItemsAction())
  }, [dispatch])

  useEffect(() => {
    getPortfolioItems()
    return () => {
      resetPortfolioItems()
    }
  }, [getPortfolioItems, resetPortfolioItems])

  return {
    portfolioItems,
    loading,
    error,
    getPortfolioItems,
    resetPortfolioItems,
  }
}
