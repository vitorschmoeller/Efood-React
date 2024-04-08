import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

export const Button = ({ children, type, onClick, to, disabled }: Props) => {
  if (type === 'submit') {
    return (
      <ButtonContainer type="submit" onClick={onClick} disabled={disabled}>
        {children}
      </ButtonContainer>
    )
  }
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
