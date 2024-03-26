import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
  background-color: ${cores.brancoFundo};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  li {
    list-style-type: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
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
    width: 100%;
    max-width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
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
