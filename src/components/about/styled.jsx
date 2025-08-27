import styled from 'styled-components'
import { color } from '@/utils/getColorTheme'

export const AboutStyled = styled.div`
  .about {
    padding: 9rem 0;
    display: flex;
    flex-direction: column;
    gap: 2em;

    &__title {
      text-align: center;
    }

    &__description {
      font-size: 1.8rem;
      text-align: justify;
    }

    &__skills {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      &__list {
        display: flex;
        ul {
          // list-style: none;
          padding: 0 2rem;

          li {
            font-size: 1.6rem;
            padding: 0.5rem 0;
          }
        }
      }
    }

    &__stack {
      &__icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 1rem;

        svg {
          font-size: 4.8rem;

          &:hover {
            color: ${color.primary};
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
`
