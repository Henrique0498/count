import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 2rem;
    padding: 0 0.5rem;
    color: #000;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    :focus {
      outline: none;
      box-sizing: border-box;
    }
  }

  button {
    height: 2rem;
    width: 2rem;

    :first-child {
      border-radius: 4px 0 0 4px;
    }

    :last-child {
      border-radius: 0 4px 4px 0;
    }
  }
`
