import styled, { keyframes } from 'styled-components'
import { color } from '@/utils/getColorTheme'

const socialPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,255, 255, 0.3);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
  }
`

const AsideStyles = styled.aside`
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  h1 {
    text-align: center;
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 1rem;
    border: 1px solid ${color.border};
    border-radius: 1rem;
    gap: 2rem;

    &__avatar {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
    &__position {
      font-size: 24px;
      text-align: center;
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
      position: relative;
      overflow: hidden;
      text-decoration: none;
      font-size: 14px;
      color: ${color.text};
      border: 1px solid ${color.border};
      padding: 1rem 3rem;
      border-radius: 1rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -75%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.6),
          transparent
        );
        transform: skewX(-25deg);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease;
      }

      &:hover::before {
        animation: shine 0.75s forwards;
      }

      @keyframes shine {
        0% {
          left: -75%;
        }
        100% {
          left: 125%;
        }
      }
    }

    &__socials {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        font-size: 2.2rem;
        color: white;
        border-radius: 50%;
        border: 2px solid rgba(102, 126, 234, 0.2);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        &:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3),
            0 0 0 3px rgba(102, 126, 234, 0.1);
          animation: ${socialPulse} 1.5s infinite;

          &::before {
            opacity: 1;
          }
        }

        svg {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }
      }
    }
  }
`
export default AsideStyles
