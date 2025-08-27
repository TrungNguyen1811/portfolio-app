import styled from 'styled-components'

export const EducationStyled = styled.div`
  padding: 9rem 0;

  h2 {
    text-align: center;
  }

  .education__degree-header {
    display: flex;
    padding-bottom: 2rem;
    gap: 2rem;

    svg {
      font-size: 3.2rem;
      color: var(--primary-color);
    }
  }

  .education__degree-institution {
    font-size: 1.6rem;
  }
  .education__certifications {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .education__certification-item {
    display: flex;
    gap: 2rem;

    svg {
      font-size: 3.2rem;
      color: var(--primary-color);
    }
  }
`
