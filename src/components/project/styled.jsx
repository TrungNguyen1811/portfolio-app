import styled from 'styled-components'

export const ProjectStyled = styled.div`
  padding: 9rem 0;

  h2 {
    text-align: center;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding-top: 2rem;

    &__item {
      display: flex;
      flex-direction: column;
      /* gap: 1rem; */
      border: 1px solid #eee;
      border-radius: 1rem;
      overflow: hidden;

      &-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
      }

      &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      &-description {
        height: 5rem;
        font-size: 1.6rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-tags {
        display: flex;
        flex-wrap: wrap;
        row-gap: 0.8rem;
      }

      &-banner {
        position: relative;
        width: 100%;
        height: 16rem;
        overflow: hidden;
        border-radius: 1rem;
        z-index: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease-in-out;
          border-radius: 1rem;
        }

        &:hover img {
          transform: scale(1.1);
          filter: blur(5px) brightness(0.8);
        }

        &-button {
          position: absolute;

          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          &:hover {
            opacity: 1;
          }
        }

        &:hover .projects__item-banner-button {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 0;
  }
  @media (max-width: 640px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`
