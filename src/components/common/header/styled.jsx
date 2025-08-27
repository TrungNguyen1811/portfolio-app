import styled from 'styled-components'
import { color } from '@/utils/getColorTheme'

export const HeaderStyled = styled.header`
  .header {
    position: relative;

    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 500px;
      width: 100%;
      gap: 2rem;
      position: fixed;
      top: 2rem;
      left: 50%;
      padding: 1.5rem 4rem;
      border-radius: 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      z-index: 10;
    }
    &__nav a {
      color: ${color.foreground};
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 1.6rem;

      &:hover {
        color: ${color.primary};
      }
    }
  }
`
