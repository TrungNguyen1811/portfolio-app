import { BankOutlined, LinkedinOutlined } from '@ant-design/icons'
import { EducationStyled } from './styled'

import { usePortfolioItems } from '@/hooks/usePortfolioItem'
import { Spin } from 'antd'
import { useFormatDate } from '@/hooks/useFormatDate'
import { useEffect } from 'react'

export default function Education() {
  const {
    portfolioItems,
    loading,
    error,
    getPortfolioItems,
    resetPortfolioItems,
  } = usePortfolioItems('education')
  const { formatDate } = useFormatDate()

  useEffect(() => {
    // getPortfolioItems()
    // return () => {
    //   resetPortfolioItems()
    // }
  }, [])

  if (loading) {
    return (
      <EducationStyled>
        <div className='message-wrapper'>
          <Spin size='large' tip='Loading education...' />
        </div>
      </EducationStyled>
    )
  }
  if (error) {
    return (
      <EducationStyled>
        <div className='message-wrapper'>
          <p>Error loading education. Please try again later.</p>
        </div>
      </EducationStyled>
    )
  }

  return (
    <EducationStyled>
      <h2>Education</h2>
      <section className='education__degree'>
        <h3>Degree</h3>
        {portfolioItems.map((item, index) => (
          <div className='education__degree-header' key={index}>
            <BankOutlined />
            <div>
              <h4 className='education__degree-title'>{item.title}</h4>
              <p className='education__degree-institution'>
                {item.subtitle} - {formatDate(item.endDate)}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h3>Certifications</h3>
        <div className='education__certifications'>
          <div className='education__certification-item'>
            <LinkedinOutlined />
            <div>
              <h4>Become a Product Manager · Udemy</h4>
              <p>Feb 2023</p>
            </div>
          </div>
          <div className='education__certification-item'>
            <LinkedinOutlined />
            <div>
              <h4>Become a Product Manager · Udemy</h4>
              <p>Feb 2023</p>
            </div>
          </div>
          <div className='education__certification-item'>
            <LinkedinOutlined />
            <div>
              <h4>Become a Product Manager · Udemy</h4>
              <p>Feb 2023</p>
            </div>
          </div>
          <div className='education__certification-item'>
            <LinkedinOutlined />
            <div>
              <h4>Become a Product Manager · Udemy</h4>
              <p>Feb 2023</p>
            </div>
          </div>
          <div className='education__certification-item'>
            <LinkedinOutlined />
            <div>
              <h4>Become a Product Manager · Udemy</h4>
              <p>Feb 2023</p>
            </div>
          </div>
        </div>
      </section>
    </EducationStyled>
  )
}
