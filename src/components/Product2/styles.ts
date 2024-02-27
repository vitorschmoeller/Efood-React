import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: block;
  padding: 8px;
`
export const Comida = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
  line-height: 18.75px;
`
export const P = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 21px;
`
export const Img = styled.img`
  width: 100%;
  margin-bottom: 8px;
`
