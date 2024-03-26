import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  padding: 80px 0;
  background-color: ${cores.brancoFundo};
  @media (max-width: ${breakpoints.desktop}) {
    display-flex;
    justify-content: center;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  list-style-type: none;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
