import { Button } from 'antd'
import { ProjectStyled } from './styled'
import { Tag } from 'antd'
import ProjectBanner from '@/assets/images/projects/banner-project.jpg'
import { usePortfolioItems } from '@/hooks/usePortfolioItem'
import { Spin } from 'antd'
import { Tooltip } from 'antd'
import { Link } from 'react-router-dom'

export default function Project() {
  const { portfolioItems, loading, error } = usePortfolioItems('project')

  if (loading) {
    return (
      <ProjectStyled>
        <div className='message-wrapper'>
          <Spin size='large' />
        </div>
      </ProjectStyled>
    )
  }
  if (error) {
    return (
      <ProjectStyled>
        <div className='message-wrapper'>
          <p>Error loading projects. Please try again later.</p>
        </div>
      </ProjectStyled>
    )
  }

  return (
    <ProjectStyled>
      <h2>Projects</h2>
      <div className='projects'>
        {portfolioItems.map((item, index) => (
          <section key={index} className='projects__item'>
            <div className='projects__item-banner'>
              <img src={item.imageUrl || ProjectBanner} alt='Project' />
              <Link to={item.linkUrl} target='_blank' rel='noopener noreferrer'>
                <Button
                  color='primary'
                  variant='outlined'
                  className='projects__item-banner-button'
                >
                  View Project
                </Button>
              </Link>
            </div>
            <div className='projects__item-info'>
              <div className='projects__item-content'>
                <h4 className='projects__item-title'>
                  <Tooltip title={item.title}>{item.title}</Tooltip>
                </h4>
              </div>
              <p className='projects__item-description'>
                <Tooltip title={item.description}>{item.description}</Tooltip>
              </p>
              <div className='projects__item-tags'>
                {item.tag &&
                  item.tag.split(',').map((tag, i) => (
                    <Tag key={i} bordered={false} color='blue'>
                      {tag.trim()}
                    </Tag>
                  ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </ProjectStyled>
  )
}
