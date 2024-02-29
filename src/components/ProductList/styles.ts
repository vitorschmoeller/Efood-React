import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 80px 0;
  background-color: ${cores.brancoFundo};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
`
