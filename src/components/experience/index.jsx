import { usePortfolioItems } from '@/hooks/usePortfolioItem'
import { ExperienceStyled } from './styled'
import { Spin } from 'antd'

export function Experience() {
  const { portfolioItems, loading, error } = usePortfolioItems('experience')

  if (loading) {
    return (
      <ExperienceStyled>
        <div className='message-wrapper'>
          <Spin size='large' />
        </div>
      </ExperienceStyled>
    )
  }
  if (error) {
    return (
      <ExperienceStyled>
        <div className='message-wrapper'>
          <p>Error loading experience. Please try again later.</p>
        </div>
      </ExperienceStyled>
    )
  }

  return (
    <ExperienceStyled>
      <h2>Experience</h2>
      {portfolioItems.map((item) => (
        <section className='experience__item'>
          <div>
            <h4 className='experience__position'>{item.title}</h4>
            <p className='experience__company'>
              {item.subtitle} - {item.startDate} – {item.endDate}
            </p>
          </div>
          <ul className='experience__details'>
            <li>{item.description}</li>
            <li>
              Own multi-brand Back Office (10+ brands) – roadmap, infra,
              releases
            </li>
            <li>
              Own multi-brand Back Office (10+ brands) – roadmap, infra,
              releases
            </li>
            <li>
              Own multi-brand Back Office (10+ brands) – roadmap, infra,
              releases
            </li>
          </ul>
        </section>
      ))}
    </ExperienceStyled>
  )
}
