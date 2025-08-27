import { Badge, Button } from 'antd'
import { ProjectStyled } from './styled'
import { Tag } from 'antd'
import { Flex } from 'antd'
import ProjectBanner from '@/assets/images/projects/banner-project.jpg'

export function Project() {
  return (
    <ProjectStyled>
      <h2>Projects</h2>
      <div className='projects'>
        <section className='projects__item'>
          <div className='projects__item-banner'>
            <img src={ProjectBanner} alt='Project' />
            <Button
              color='primary'
              variant='outlined'
              className='projects__item-banner-button'
            >
              View Project
            </Button>
          </div>
          <div className='projects__item-info'>
            <div className='projects__item-content'>
              <h4 className='projects__item-title'>Project Title</h4>
              <Tag bordered={false} color='warning'>
                Acquiring
              </Tag>
            </div>
            <p className='projects__item-description'>
              AI-powered product scoring tool: evaluate, share, compare — no
              spreadsheets.
            </p>
            <div className='projects__item-tags'>
              <Tag>React</Tag>
              <Tag>Ant Design</Tag>
              <Tag>Formik</Tag>
              <Tag>Redux Saga</Tag>
            </div>
          </div>
        </section>
      </div>
    </ProjectStyled>
  )
}
