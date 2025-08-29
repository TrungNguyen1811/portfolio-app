import {
  AntDesignOutlined,
  CodeSandboxOutlined,
  DockerOutlined,
  DotNetOutlined,
  GithubOutlined,
  Html5Outlined,
  JavaOutlined,
  JavaScriptOutlined,
  LinuxOutlined,
  OpenAIOutlined,
  PythonOutlined,
} from '@ant-design/icons'
import { AboutStyled } from './styled'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'

export default function About() {
  const { portfolio, error, loading, loadingPortfolio } =
    useSelector((state) => state.portfolios) || {}

  if (loading) {
    return (
      <AboutStyled>
        <div className='message-wrapper'>
          <Spin size='large' />
        </div>
      </AboutStyled>
    )
  }
  if (error) {
    return (
      <AboutStyled>
        <div className='message-wrapper'>
          <p>Error loading about section. Please try again later.</p>
        </div>
      </AboutStyled>
    )
  }
  if (!loadingPortfolio)
    return (
      <AboutStyled>
        <div className='about'>
          <h2 className='about__title'>About Me</h2>
          <div>
            <p className='about__description'>{portfolio.info?.overview}</p>
          </div>
          <div>
            <h3>Professional Skills</h3>
            <div className='about__skills'>
              <div className='about__skills__list'>
                <ul>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Product roadmap & diagram mapping</li>
                  <li>Agile methodologies: Scrum & Kanban</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                </ul>
              </div>
              <div className='about__skills__list'>
                <ul>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                  <li>Planning & prioritising (RICE)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='about__stack'>
            <h3>Tech Stack</h3>
            <div className='about__stack__icons'>
              <GithubOutlined />
              <CodeSandboxOutlined />
              <JavaScriptOutlined />
              <Html5Outlined />
              <JavaOutlined />
              <AntDesignOutlined />
              <OpenAIOutlined />
              <DockerOutlined />
              <PythonOutlined />
              <DotNetOutlined />
              <LinuxOutlined />
            </div>
          </div>
        </div>
      </AboutStyled>
    )
}
