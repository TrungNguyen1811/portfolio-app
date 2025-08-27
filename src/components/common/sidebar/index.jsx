import {
  EnvironmentOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

import { Link } from 'react-router-dom'
import avatar from '@/assets/images/avatar.jpg'
import AsideStyles from './styled'

export function SideBar() {
  return (
    <AsideStyles>
      <section>
        <div className='profile'>
          <img className='profile__avatar' src={avatar} alt='avatar' />
          <h1>Trung Nguyen</h1>
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
          trungnguyen123@gmail.com
        </Link>
        <div className='contact__socials'>
          <Link to=''>
            <FacebookOutlined />
          </Link>
          <Link to=''>
            <TwitterOutlined />
          </Link>
          <Link to=''>
            <LinkedinOutlined />
          </Link>
        </div>
      </section>
    </AsideStyles>
  )
}
