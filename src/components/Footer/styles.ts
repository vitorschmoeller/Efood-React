import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: block;
  text-align: center;
  padding: 40px 0px;
  background-color: ${cores.rosaClaro};
`

export const RedeSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  :nth-child(2) {
    margin: 0 8px;
  }
`
export const P = styled.p`
  font-size: 10px;
  line-height: 11.72px;
  margin-top: 80px;
`
