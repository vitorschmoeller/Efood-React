import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${cores.rosaClaro};
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  padding: 4px 0px;
`

export const ButtonLink = styled(Link)`
  display: block;
  width: 100%;
  background-color: ${cores.rosaClaro};
  text-decoration: none;
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  border: none;
  text-align: center;
  padding: 4px 0px;
`
