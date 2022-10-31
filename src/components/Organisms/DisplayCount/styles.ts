import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;

  > .separator {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 2.5rem;
    justify-content: space-between;
    width: 1.5rem;

    ::after,
    ::before {
      background: currentColor;
      border-radius: 50%;
      content: '';
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`
