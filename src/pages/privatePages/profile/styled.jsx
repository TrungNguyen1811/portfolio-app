import FormItemControl from '@/components/common/formItemControl'
import { Card } from 'antd'
import styled from 'styled-components'

const StyleCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 4rem;

  &::before {
    content: '';
    background-color: #6274e8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110px;
  }

  .card__name {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  .card__email {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`

const StyleFormItemControl = styled(FormItemControl)`
  label {
    font-weight: 500;
  }
`

export { StyleCard, StyleFormItemControl }
