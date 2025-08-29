import { NavLink } from 'react-router-dom'
import { HeaderStyled } from './styled'
import { useSelector } from 'react-redux'

export function Header() {
  const { loadingPortfolio, loading } =
    useSelector((state) => state.portfolios) || {}

  if (!loadingPortfolio)
    return (
      <HeaderStyled>
        <nav className='header__nav'>
          <NavLink disabled={loading} to='' end>
            About
          </NavLink>
          <NavLink disabled={loading} to='experience'>
            Experience
          </NavLink>
          <NavLink disabled={loading} to='education'>
            Education
          </NavLink>
          <NavLink disabled={loading} to='projects'>
            Projects
          </NavLink>
        </nav>
      </HeaderStyled>
    )
}
