import { BankOutlined, LinkedinOutlined } from '@ant-design/icons'
import { EducationStyled } from './styled'

export function Education() {
  return (
    <EducationStyled>
      <h2>Education</h2>
      <section className='education__degree'>
        <h3>Degree</h3>
        <div className='education__degree-header'>
          <BankOutlined />
          <div>
            <h4 className='education__degree-title'>
              Hue University of Science
            </h4>
            <p className='education__degree-institution'>
              Software Technology - 2018
            </p>
          </div>
        </div>
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
