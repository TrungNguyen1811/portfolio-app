import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

import { Link } from 'react-router-dom'
import avatar from '@/assets/images/avatar.jpg'
import AsideStyles from './styled'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPortfoliosRequest } from '@/sagas/portfolios/portfolioSlice'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function SideBar() {
  const dispatch = useDispatch()
  const { portfolio } = useSelector((state) => state.portfolios) || {}
  const { slug } = useParams()

  const SOCIAL_ICONS = {
    facebook: <FacebookOutlined />,
    linkedin: <LinkedinOutlined />,
    instagram: <InstagramOutlined />,
  }

  useEffect(() => {
    if (slug) {
      dispatch(fetchPortfoliosRequest(slug))
    }
  }, [slug, dispatch])

  return (
    <AsideStyles>
      <section>
        <div className='profile'>
          <img
            className='profile__avatar'
            src={portfolio.info?.avatar || avatar}
            alt='avatar'
          />
          <h1>{portfolio.user?.fullname || 'Anonymous'}</h1>
          <p className='profile__position'>Frontend Developer</p>
          <div className='profile__address'>
            <EnvironmentOutlined />
            Thua Thien Hue, Vietnam
          </div>
        </div>
      </section>
      <section className='contact'>
        <h2>Follow Me</h2>
        <Link to='' className='contact__mail'>
          {portfolio.user?.email}
        </Link>
        <div className='contact__socials'>
          {portfolio?.info?.socials?.map((social) => {
            const icon = SOCIAL_ICONS[social.title.toLowerCase()] || null
            return (
              <Link
                key={social.title}
                to={social.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {icon || social.title}
              </Link>
            )
          })}
        </div>
      </section>
    </AsideStyles>
  )
}
