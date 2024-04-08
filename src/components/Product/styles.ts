import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
export const Titulo = styled.h5`
  font-size: 18px;
  font-weight: bold;
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  img {
    margin-left: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
  }
`
export const P = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const Button = styled.button`
  display: inline-block;
  padding: 4px 6px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const Card = styled.div`
  width: 472px;
  height: 398px;
  border: solid 1px ${cores.rosa};
  position: relative;
  background-color: ${cores.branco};
  ${TagContainer} {
    margin-left: 8px;
  }
  img:nth-child(2) {
    width: 100%;
    height: 217px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
    height: 250px;

    ${Titulo} {
      font-size: 12px;
    }
    // ${Infos} {
    //   display: none;
    // }
  }
`
