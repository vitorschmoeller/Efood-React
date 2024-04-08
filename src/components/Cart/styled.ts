import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import garbage from '../../assets/lixeira.svg'

export type Props = {
  colortext: 'pink' | 'white'
  maxWidth?: string
  asidePadding?: 'padding' | ''
}

export const CartContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  & > :nth-child(2) {
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  content: '';
`

export const Aside = styled.aside<Props>`
  max-width: 360px;
  width: 100%;
  color: ${(props) =>
    props.colortext === 'pink' ? cores.rosa : cores.rosaClaro};
  background-color: ${cores.rosa};
  z-index: 1;
  padding-top: 32px;
  padding-left: ${(props) => (props.asidePadding === 'padding' ? '8px' : '0')};
  padding-right: ${(props) => (props.asidePadding === 'padding' ? '8px' : '0')};
  button {
    cursor: pointer;
  }
  ${ButtonContainer} {
    width: 344px;
    margin-left: 8px;
    color: ${cores.rosa};
    margin-bottom: 8px;
  }

  &.is-closed {
    display: none;
  }
  &.is-open {
    display: flex;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.rosaClaro};
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 320px;
  }
`
export const List = styled.ul`
  display: block;
`

export const ListItem = styled.li`
  display: flex;
  margin: 0 8px;
  padding: 8px 8px 12px 8px;
  background-color: ${cores.rosaClaro};
  margin-bottom: 16px;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  div {
    h3 {
      margin-bottom: 16px;
      font-size: 18px;
    }
  }

  button {
    background-image: url(${garbage});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 8px;
    margin-bottom: 8px;
  }
`

export const ValorContainer = styled.div`
  color: ${cores.branco};
  margin: 0 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;

  span {
    font-size: 14px;
  }
`
export const Container = styled.div`
  margin: 0 8px;
  margin-bottom: 24px;
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  label {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    background-color: ${cores.rosaClaro};
    color: ${cores.black};
    font-weight: bold;
    font-size: 14px;
    border: 1px solid ${cores.rosaClaro};

    &.error {
      border: 1px solid red;
    }
  }
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Row = styled.div`
  display: flex;
  column-gap: 34px;

  ${InputGroup} {
    flex: auto;
    input {
      max-width: 155px;
    }
    #cardCode {
      max-width: 125.5px;
    }
    #cardNumber {
      max-width: 228px;
    }
  }
`
