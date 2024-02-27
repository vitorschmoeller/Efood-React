import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
  background-color: ${cores.rosaClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`
