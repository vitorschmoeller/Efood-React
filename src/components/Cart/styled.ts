import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import garbage from '../../assets/lixeira.svg'
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

export const Aside = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.rosa};
  z-index: 1;
  padding-top: 32px;
  button {
    cursor: pointer;
  }
  ${ButtonContainer} {
    width: 344px;
    margin-left: 8px;
    color: ${cores.rosa};
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
