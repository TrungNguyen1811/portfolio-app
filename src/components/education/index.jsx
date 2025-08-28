import { BankOutlined, LinkedinOutlined } from '@ant-design/icons'
import { EducationStyled } from './styled'

import { usePortfolioItems } from '@/hooks/usePortfolioItem'
import { Spin } from 'antd'

export function Education() {
  const { portfolioItems, loading, error } = usePortfolioItems('education')

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
        {portfolioItems.map((item) => (
          <div className='education__degree-header' key={item.id}>
            <BankOutlined />
            <div>
              <h4 className='education__degree-title'>{item.title}</h4>
              <p className='education__degree-institution'>
                {item.subtitle} - {item.endDate}
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
