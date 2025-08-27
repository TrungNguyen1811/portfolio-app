import { Layout } from 'antd'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8rem;
  max-width: 128rem;
  background-color: transparent;
  margin: 0 auto;
`
export { StyledLayout }
