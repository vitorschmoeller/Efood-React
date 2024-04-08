import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  padding: 80px 0;
  background-color: ${cores.brancoFundo};
  @media (max-width: ${breakpoints.desktop}) {
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  list-style-type: none;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    grid-gap: 36px;
    width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    li {
      max-width: 100%;
      margin: 0 auto;
    }
  }
`
