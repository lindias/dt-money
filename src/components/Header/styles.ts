import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem 8.25rem;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    border: 0;
    color: #fff;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;

    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.9);
    }
  }

`