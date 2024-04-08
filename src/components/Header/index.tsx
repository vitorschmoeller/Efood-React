import hero from '../../assets/fundo.png'
import logo from '../../assets/logoEfood.png'

import * as S from './styles'

const Header = () => {
  return (
    <div>
      <S.HeaderLog style={{ backgroundImage: `url(${hero})` }}>
        <h1>
          <S.Img src={logo} alt="EFOOD" />
        </h1>
        <S.Titulo>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </S.Titulo>
      </S.HeaderLog>
    </div>
  )
}

export default Header
