import { BankOutlined, LinkedinOutlined } from '@ant-design/icons'
import { EducationStyled } from './styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPortfolioItemsRequest } from '@/sagas/portfolios/portfolioSlice'

export function Education() {
  const dispatch = useDispatch()
  const { portfolioItems, loading, error } = useSelector(
    (state) => state.portfolios
  )

  useEffect(() => {
    dispatch(getPortfolioItemsRequest('education'))
  }, [dispatch])

  console.log('Portfolio Items:', portfolioItems)

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
        {/* <BankOutlined />
          <div>
            <h4 className='education__degree-title'>
              Hue University of Science
            </h4>
            <p className='education__degree-institution'>
              Software Technology - 2018
            </p>
          </div> */}
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
