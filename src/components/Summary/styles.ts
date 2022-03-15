import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-title);
    }

    strong {
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
      margin-top: 1rem;
      display: block;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`