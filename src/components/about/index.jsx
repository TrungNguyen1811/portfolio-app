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

export default function About() {
  return (
    <AboutStyled>
      <div className='about'>
        <h2 className='about__title'>About Me</h2>
        <div>
          <p className='about__description'>
            Product Manager & Product Owner with 3 + years of experience
            delivering impactful web & native applications used by 1 M + users.
            Lead the full lifecycle of a multi-brand product for platform —
            infrastructure, feature logic, and system design. Adept at managing
            distributed cross-functional teams, building from scratch, and
            launching high-impact experiments that drive measurable growth.
          </p>
          <p className='about__description'>
            Demonstrated success releasing new functionality on mature products
            worldwide, backed by strong UX skills in wireframing and
            product-logic diagrams. Independently took multiple AI micro-SaaS
            projects from zero to monetisationusing SDLC best practices.
          </p>
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
