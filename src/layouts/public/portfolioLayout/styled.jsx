import { Layout } from 'antd'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8rem;
  max-width: 128rem;
  background-color: transparent;
  color: #fff;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 2rem 2rem;
  }
`
export { StyledLayout }

