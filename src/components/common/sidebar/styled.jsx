import styled from 'styled-components'
import { color } from '@/utils/getColorTheme'

const AsideStyles = styled.aside`
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 1rem;
    border: 1px solid ${color.border};
    border-radius: 1rem;
    margin: 8rem 0;
    gap: 2rem;

    &__avatar {
      width: 200px;
      border-radius: 50%;
    }
    &__position {
      font-size: 24px;
    }
    &__address {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      margin: 1rem 0;
      color: ${color.text};
      display: flex;
      gap: 0.2rem;
      font-size: 14px;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    &__mail {
      text-decoration: none;
      font-size: 14px;
      color: ${color.text};
      border: 1px solid ${color.border};
      padding: 1rem 3rem;
      border-radius: 1rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease;
      }
    }
    &__socials {
      display: flex;
      color: ${color.text};

      a {
        color: ${color.text};
        margin: 0 0.5rem;
        font-size: 3.2rem;

        &:hover {
          color: ${color.primary};
        }
      }
    }
  }
`
export default AsideStyles
