import styled from 'styled-components'
import { cores } from '../../styles'

import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: block;
  padding: 8px;

  ${ButtonContainer} {
    color: ${cores.rosa};
    cursor: pointer;
  }
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
  width: px;
  height: 167px;
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  z-index: 1;
  padding: 32px;
  display: flex;
  max-width: 1024px;
  background-color: ${cores.rosa};
  position: relative;
  color: ${cores.branco};

  img:first-child {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
  }

  img:nth-child(2) {
    height: 280px;
    width: 280px;
    margin-right: 24px;
  }

  h4 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ${ButtonContainer} {
    color: ${cores.rosa};
    max-width: 218px;
    margin-top: 16px;
    cursor: pointer;
  }
`
