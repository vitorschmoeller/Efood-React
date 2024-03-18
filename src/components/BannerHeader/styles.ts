import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.div`
  padding-top: 63px;
  padding-bottom: 65px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
`
export const CardButton = styled.a`
  text-decoration: none;
  color: ${cores.rosa};
`
export const Titulo = styled.h3`
  font-size: 18px;
`
export const Img = styled.img`
  width: 125px;
  height: 57.5px;
`
export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  display: block;
  color: ${cores.branco};
  position: relative;
`
export const Span = styled.span`
  margin-top: 30px;
  width: 100%;
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
`
export const BannerTitulo = styled.h3`
  width: 100%;
  font-weight: 900;
  font-size: 32px;
  margin-top: 156px;
  margin-bottom: 32px;
`
export const BannerContainer = styled.div`
  padding-top: 25px;
  position: relative;
  z-index: 1;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
